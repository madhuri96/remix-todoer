import { Link, Outlet, useLoaderData, useNavigate} from "@remix-run/react";
import { json } from "@remix-run/node";
import { db } from "~/utils/db.server";
import { useState } from "react";
import styleUrl from '~/styles/todo.css'
import Pagination from '../components/Pagination';
import bookmark from '../styles/bookmark.png'
import todolist from '../styles/checklist.png';
import { getUser } from "~/utils/session.server";
import CategoryForm from '../components/Category';
import Subtask from '../components/Subtask';


export const links = () => [
  {rel:"stylesheet", href: styleUrl},
]

export const loader = async ({ request }) => {
  const todoListItems = await db.todo.findMany({
    include: {
      subtask: true,
      category: true,
    },
  });
  const todoListWithSelected = await Promise.all(
    todoListItems.map(async (todo) => {
      const subtasks = await db.subtask.findMany({
        where: {
          todoId: todo.id,
        },
      });

      return {
        ...todo,
        subtask: subtasks,
        selected: false,
      };
    })
  );
  const user = await getUser(request);
  const categories = await db.category.findMany();
  const subtasks = await db.subtask.findMany();
  return json({
    todoListItems: todoListWithSelected,
    user,
    categories,
    subtasks,
  });
  };


  export const action = async ({ request }) => {
    const form = await request.formData();
    const description = form.get("description");
    const title = form.get("title");
    const status = form.get("status");
    
    
    if (
      typeof description !== "string" ||
      typeof title !== "string"
    ) {
      throw new Error("Form not submitted correctly.");
    }
  
    // Retrieve the user from the session or authentication data
    const user = await getUser(request);
  
    // Check if the user is logged in
    if (!user) {
      throw new Error("User not authenticated.");
    }

    const selectedCategoryId = form.get("category");

    if (!selectedCategoryId) {
      throw new Error("Selected category ID cannot be null or empty.");
    }
  
    const fields = {
      description,
      title,
      status,
      todos: { connect: { id: user.id } }, // Connect the Todo to the user
      category: { connect: { id: selectedCategoryId } },
    };
  
    const todo = await db.todo.create({ data: fields });
  
    return todo;
  };

  
  


export default function TodoRoute(){
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [todoList, setTodoList] = useState(useLoaderData().todoListItems);
    const [filterValue, setFilterValue] = useState("all");
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const [todosPerPage, setTodosPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("");
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState("");
    const [isCategoryFormOpen, setIsCategoryFormOpen] = useState(false); 
    // const [category, setCategory] = useState([]);
    // const categories = data.categories;
    const [categories, setCategories] = useState(useLoaderData().categories);
    const data = useLoaderData();

 const [isSubtaskPanelOpen, setIsSubtaskPanelOpen] = useState(false);
const [selectedTodoId, setSelectedTodoId] = useState("");
const [subtaskTitle, setSubtaskTitle] = useState("");
const [subtaskStatus, setSubtaskStatus] = useState("in-progress");
const selectedTodo = todoList.find(todo => todo.id === selectedTodoId);
//const [subtasks, setSubtasks] = useState(selectedTodo ? selectedTodo.subtask : []);
const [subtasks, setSubtasks] = useState(useLoaderData().subtasks);


      const toggleForm = () => {
        setIsFormOpen(!isFormOpen);
      };

      const closeForm = () => {
        setIsFormOpen(false);
      };

      const handleCategoryCreate = async (categoryName) => {
        console.log('Received category:', categoryName); // Add this line
      
        try {
          if (!categoryName) {
            throw new Error("Invalid category data.");
          }
      
          const newCategory = await db.category.create({
            data: {
              category: categoryName,
            },
          });
      
          // Fetch the updated list of categories from the database
          const updatedCategories = await db.category.findMany();
      
          // Update the state to include the new category and updated categories list
          setCategories(updatedCategories);
          setSelectedCategoryId(newCategory.id); // Optionally, select the newly created category
        } catch (error) {
          console.error('Error creating category:', error);
        }
      };
      
         

      const handleStatusChange = (id, newStatus) => {
        const updatedTodoList = todoList.map(todo => {
          if (todo.id === id) {
            return { ...todo, status: newStatus };
          }
          return todo;
        });
        setTodoList(updatedTodoList);
      };
    

    const handleDelete = async (id) => {
        const updatedTodoList = todoList.filter(todo => todo.id !== id);
        setTodoList(updatedTodoList);
      
        try {
          await fetch(`/todo/${id}`, {
            method: "DELETE",
          });
        } catch (error) {
          console.error("Error deleting todo:", error);
        }
      };
     
      const filteredTodoList =
      filterValue === "all"
      ? todoList
      : todoList.filter((todo) => todo.status === filterValue);

      console.log("Filtered Todo List:", filteredTodoList);


    const handleSearch = () => {
      const filteredTodoList =
        filterValue === "all"
          ? todoList
          : todoList.filter((todo) => todo.status === filterValue);
  
      const searchedTodoList = filteredTodoList.filter((todo) =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      return searchedTodoList;
    };
  
    const searchedTodoList = handleSearch();

    //  // Calculate index of the first and last todos for the current page
    //  const indexOfLastTodo = currentPage * todosPerPage;
    //  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
 
    //    // Get the todos for the current page
    //  const currentTodos = filteredTodoList.slice(indexOfFirstTodo, indexOfLastTodo);

      // Calculate index of the first and last todos for the current page
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  
        // Get the todos for the current page
      const currentTodos = searchedTodoList.slice(indexOfFirstTodo, indexOfLastTodo);

      const handleFavoriteToggle = (id) => {
        const updatedTodoList = todoList.map(todo => {
          if (todo.id === id) {
            return { ...todo, isFavorite: !todo.isFavorite };
          }
          return todo;
        });
        setTodoList(updatedTodoList);
      };

      const favoritedTodoList = todoList.filter(todo => todo.isFavorite);

      const openSubtaskPanel = (todoId) => {
        setSelectedTodoId(todoId);
        setIsSubtaskPanelOpen(true);
      };
      
      const handleSubtaskCreate = async (newSubtask) => {
        if (!selectedTodoId || newSubtask.title.trim() === "") {
          return; // Don't add an empty subtask or if no todo is selected
        }

        // newSubtask = {
        //   title: subtaskTitle,
        //   status: subtaskStatus,
        // };
      
        const updatedSubtasks = [...subtasks, newSubtask]; // Add the new subtask
        setSubtasks(updatedSubtasks); // Update the subtasks state
      
        const updatedTodoList = todoList.map((todo) => {
          if (todo.id === selectedTodoId) {
            // Update the selected todo's subtasks with the new subtask
            return { ...todo, subtask: updatedSubtasks };
          }
          return todo;
        });
      
        setTodoList(updatedTodoList);
        setIsSubtaskPanelOpen(false);
        setSubtaskTitle("");
        setSubtaskStatus("in-progress");
      };

      const handleSubtaskDelete = (subtaskId) => {
        const updatedSubtasks = subtasks.filter(subtask => subtask.id !== subtaskId);
        setSubtasks(updatedSubtasks);
      
        // You might also want to update the subtasks for the selected todo
        const updatedTodoList = todoList.map(todo => {
          if (todo.id === selectedTodoId) {
            return { ...todo, subtask: updatedSubtasks };
          }
          return todo;
        });
      
        setTodoList(updatedTodoList);
      };

      function getStatusColor(status) {
        if (status === "in-progress") {
          return "rgb(245, 245, 245)";
        } else if (status === "completed") {
          return "rgba(144, 238, 144, 0.849)";
        } else if (status === "on-hold") {
          return "rgba(255, 166, 0, 0.623)";
        } else {
          return ""; 
        }
      }
      
      
    

    return(
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>  
            <header>

            <h1><img src={todolist} alt="" style={{height:"50px"}}/>TODOER</h1>

            {data.user ? (
            <div className="user-info">
              <span style={{ fontSize: "30px" }}>{`Hi ${data.user.username}`}</span>
              <form action="/logout" method="post">
                <button type="submit" className="button" style={{ marginLeft: "10px" }}>
                  Logout
                </button>
              </form>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}
            </header>
            <main>
             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <div>
                  <h3>What do you want to do Today?</h3>
                  <div className="button-container">
                  <button type="button" id="addtodo" className="button1" onClick={toggleForm}>
                       Add Todo
                  </button>

                  <div>
                  <button
                   type="button"
                   className="button1"
                   onClick={() => setIsCategoryFormOpen(true)}
                   >
                    Add Category
                   </button>
               
                   {isCategoryFormOpen && (
                   <div className="popup">
                   {categories && (
                   <CategoryForm
                    onSave={handleCategoryCreate}
                    onCancel={() => setIsCategoryFormOpen(false)}
                    categories={categories}
                   />
                   )}
                  </div>
                  )}
                 </div>
                 </div>


                  
                  {isFormOpen && (
                  <div className="popup">
                  <form method="post">
                  <div>
                   <label>
                     Title
                   <input
                    type="text"
                    name="title"
                   className="input-field"
                   />
                 </label>
                 </div>
                <div>
                <label>
                Description
               <textarea
                name="description"
                className="textarea-field"
               />
            </label>
          </div>
          <div>
          <label>
           Status
          <select
           name="status"
           className="select-field"
          >
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>
         </label>
         </div>
         <div>
         <label>
           Category
           {categories && (
          <select
            name="category"
            value={selectedCategoryId}
            onChange={e => setSelectedCategoryId(e.target.value)}
            className="select-field"
           >
            <option value="">Select Category</option>
            {categories.map(category => (
            <option key={category.id} value={category.id}>
             {category.category}
            </option>
           ))}
          </select>
          )}
          </label>
          </div>
          <div className="button-group">
          <button type="submit" className="button">
            Add
          </button>
          <button class="button button-cancel" onClick={closeForm}>
          Cancel
          </button>
          </div>

          </form>
          </div>
           )}


{selectedTodoId && isSubtaskPanelOpen && (
  <div className="popup">
    <form>
      <Subtask
        selectedTodoId={selectedTodoId}
        subtasks={subtasks}
        onSaveSubtask={handleSubtaskCreate}
        onDeleteSubtask={handleSubtaskDelete}
      />

      <div>
        <button
          type="button"
          onClick={() => {
            setIsSubtaskPanelOpen(false);
            setSubtaskTitle("");
            setSubtaskStatus("in-progress");
          }}
          className="button"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
)}



                </div>
                

               <div className="search-container">
                  <input
                   type="text"
                   className="search-input"
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   onKeyPress={(e) => {
                   if (e.key === "Enter") {
                   e.preventDefault();
                   const filteredTodos = handleSearch();
                   const currentSearchedTodos = filteredTodos.slice(
                   indexOfFirstTodo,
                   indexOfLastTodo
                   );
                  setTodoList(currentSearchedTodos);
                  }
                }}
               placeholder="Search todos..."
    
               />
              <button
               className="button search-button"
               onClick={() => {
               const filteredTodos = handleSearch();
               const currentSearchedTodos = filteredTodos.slice(
               indexOfFirstTodo,
               indexOfLastTodo
               );
               setTodoList(currentSearchedTodos);
              }}
               >
                🔍
               </button>
              </div>

               <div style={{display: "flex",justifyContent: "initial"}}>
                <div>
                <input
                type="checkbox"
                onChange={(e) => {
                const selectAll = e.target.checked;
                const updatedTodoList = todoList.map(todo => ({
                 ...todo,
                selected: selectAll,
                }));
                setTodoList(updatedTodoList);
                }}
                />
                <select
                value={filterValue}
                onChange={e => setFilterValue(e.target.value)}
                >
                <option value="all">All</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="on-hold">On Hold</option>
                </select>
                </div>

                <div className="bookmark-icon-container">
                 <span
                 className={`bookmark-icon ${showFavoritesOnly ? "active" : ""}`}
                 onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  >
                <img src={bookmark} alt="" style={{height:"40px"}}/>
                 </span>
                </div>
                </div>


                <div>
                <ul>
                  {/* {todoList.map(({ id, title,status,selected}) => ( */}
                  {/* {filteredTodoList.map(({ id, title, status, selected }) => ( */}
                  {showFavoritesOnly
                   ? favoritedTodoList.map(({ id, title, status, selected, isFavorite }) =>(
                    
                    <li key={id}>

                    <span>

                      <span
                       className="add-icon"
                       onClick={() => openSubtaskPanel(id)} 
                      >
                       ➕ 
                      </span>

                     <input
                     type="checkbox"
                     checked={selected}
                     onChange={() => {
                     const updatedTodoList = todoList.map(todo => {
                     if (todo.id === id) {
                        return { ...todo, selected: !selected };
                     }
                     return todo;
                    });
                    setTodoList(updatedTodoList);
                    }}
                    />
                    {/* <Link to={id}>{title}</Link> */}
                    <Link
                     to={id}
                     style={{
                     backgroundColor: getStatusColor(status),
                     padding: "2px 5px",
                     textDecoration: "none", 
                    }}
                    >
                   {title}
                    </Link>
                    
              </span>

               <span style={{ display: "table" }}>
               <span style={{ display: "table-row" }}>
               <span className={`status ${status}`} style={{ display: "table-cell", marginRight: "10px" }}>
               <select
               name="status"
               value={status}
               onChange={(e) => handleStatusChange(id, e.target.value)}
                >
               <option value="in-progress">In Progress</option>
               <option value="completed">Completed</option>
               <option value="on-hold">On Hold</option>
               </select>
               </span>
               <span style={{ display: "table-cell" }}>
               <button
               className="button"
               onClick={() => {
               navigate(`/edit-todo/${id}`);
               }}
               style={{ backgroundColor: "lightblue", marginLeft: "2px" }}
               >
               Edit
              </button>
              <button
               className="button"
               onClick={() => {
               if (window.confirm("Are you sure you want to delete this todo?")) {
               handleDelete(id);
               }
               }}
              style={{ backgroundColor: "lightcoral", marginLeft: "2px" }}
               >
                Delete
              </button>
              <span
               className={`favorite-icon ${isFavorite ? "active" : ""}`}
               onClick={() => handleFavoriteToggle(id)}
               style={{ marginLeft: "2px" }}
              >
               {isFavorite ? "❤️" : "🖤"}
              </span>
             </span>
             </span>
            </span>
 
        </li>
        ))
                  
                  :currentTodos.map(({ id, title, status, selected, isFavorite  }) => (
                    
                   <li key={id}>
                    <span>
                     <span
                       className="add-icon"
                       onClick={() => openSubtaskPanel(id)} 
                      >
                       ➕ 
                      </span>

                    <input
                    type="checkbox"
                    checked={selected}
                    onChange={() => {
                    const updatedTodoList = todoList.map(todo => {
                    if (todo.id === id) {
                       return { ...todo, selected: !selected };
                    }
                    return todo;
                   });
                   setTodoList(updatedTodoList);
                   }}
                   />
                    <Link
                     to={id}
                     style={{
                     backgroundColor: getStatusColor(status),
                     padding: "2px 5px",
                     textDecoration: "none", 
                    }}
                    >
                   {title}
                    </Link>
                </span>
                
                <span style={{ display: "table" }}>
               <span style={{ display: "table-row" }}>
               <span className={`status ${status}`} style={{ display: "table-cell", marginRight: "10px" }}>
               <select
               name="status"
               value={status}
               onChange={(e) => handleStatusChange(id, e.target.value)}
                >
               <option value="in-progress">In Progress</option>
               <option value="completed">Completed</option>
               <option value="on-hold">On Hold</option>
               </select>
               </span>
               <span style={{ display: "table-cell" }}>
               <button
               className="button"
               onClick={() => {
               navigate(`/edit-todo/${id}`);
               }}
               style={{ backgroundColor: "lightblue", marginLeft: "2px" }}
               >
               Edit
              </button>
              <button
               className="button"
               onClick={() => {
               if (window.confirm("Are you sure you want to delete this todo?")) {
               handleDelete(id);
               }
               }}
              style={{ backgroundColor: "lightcoral", marginLeft: "2px" }}
               >
                Delete
              </button>
              <span
               className={`favorite-icon ${isFavorite ? "active" : ""}`}
               onClick={() => handleFavoriteToggle(id)}
               style={{ marginLeft: "2px" }}
              >
               {isFavorite ? "❤️" : "🖤"}
              </span>
             </span>
             </span>
            </span>
 
           </li>
        ))}
      </ul>
   </div>
                <div>
                   <Outlet />
                </div>

                </div>
              
                <Pagination
                currentPage={currentPage}
                todosPerPage={todosPerPage}
                totalTodos={searchedTodoList.length}            //{filteredTodoList.length} 
                onPageChange={(page) => setCurrentPage(page)}
                onPerPageChange={(event) => setTodosPerPage(parseInt(event.target.value))}
                />
            </main>
        </div>
    )
}