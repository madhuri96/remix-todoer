import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  checklist_default,
  require_session
} from "/build/_shared/chunk-SAWA2PYZ.js";
import {
  require_db
} from "/build/_shared/chunk-KONDUBG3.js";
import {
  Link,
  Outlet,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-XTSDW6LX.js";
import {
  createHotContext
} from "/build/_shared/chunk-5UFQ5NKC.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/todo.jsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_react4 = __toESM(require_react());

// app/styles/todo.css
var todo_default = "/build/_assets/todo-VCJ6IRPS.css";

// app/components/Pagination.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Pagination.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Pagination.jsx"
  );
  import.meta.hot.lastModified = "1692335797790.096";
}
var Pagination = ({
  currentPage,
  todosPerPage,
  totalTodos,
  onPageChange,
  onPerPageChange
}) => {
  const totalPages = Math.ceil(totalTodos / todosPerPage);
  const handlePageClick = (page) => {
    onPageChange(page);
  };
  const handlePerPageSelect = (event) => {
    onPerPageChange(event);
  };
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Records per page:" }, void 0, false, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { value: todosPerPage, onChange: handlePerPageSelect, style: {
      margin: "0 10px",
      padding: "5px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "3", children: "3" }, void 0, false, {
        fileName: "app/components/Pagination.jsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "5", children: "5" }, void 0, false, {
        fileName: "app/components/Pagination.jsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "10", children: "10" }, void 0, false, {
        fileName: "app/components/Pagination.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: "15", children: "15" }, void 0, false, {
        fileName: "app/components/Pagination.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "pagination-button", onClick: handlePreviousPage, disabled: currentPage === 1, style: {
      backgroundColor: "#f0f0f0",
      border: "none",
      padding: "5px 10px",
      margin: "0 5px",
      cursor: "pointer",
      opacity: currentPage === 1 ? 0.5 : 1
    }, children: "\u25C0" }, void 0, false, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "pagination-list", style: {
      listStyle: "none",
      display: "flex",
      margin: "0",
      padding: "0"
    }, children: Array.from({
      length: totalPages
    }, (_, index) => index + 1).map((number) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: `pagination-item ${number === currentPage ? "active" : ""}`, onClick: () => handlePageClick(number), style: {
      margin: "0 2px",
      padding: "5px",
      cursor: "pointer",
      border: "1px solid #ccc",
      borderRadius: "3px",
      fontWeight: number === currentPage ? "bold" : "normal",
      backgroundColor: number === currentPage ? "cyan" : "transparent"
    }, children: number }, number, false, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 80,
      columnNumber: 49
    }, this)) }, void 0, false, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 72,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "pagination-button", onClick: handleNextPage, disabled: currentPage === totalPages, style: {
      backgroundColor: "#f0f0f0",
      border: "none",
      padding: "5px 10px",
      margin: "0 5px",
      cursor: "pointer",
      opacity: currentPage === totalPages ? 0.5 : 1
    }, children: "\u25B6" }, void 0, false, {
      fileName: "app/components/Pagination.jsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pagination.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_c = Pagination;
var Pagination_default = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/bookmark.png
var bookmark_default = "/build/_assets/bookmark-FTRHVZZX.png";

// app/routes/todo.jsx
var import_session = __toESM(require_session());

// app/components/Category.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Category.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Category.jsx"
  );
  import.meta.hot.lastModified = "1692859696322.632";
}
function CategoryForm({
  onSave,
  onCancel,
  categories
}) {
  _s();
  const [category, setCategory] = (0, import_react.useState)("");
  const [editingCategoryId, setEditingCategoryId] = (0, import_react.useState)(null);
  const [editedCategory, setEditedCategory] = (0, import_react.useState)("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      console.error("Category is empty.");
      return;
    }
    console.log(category);
    onSave(category);
    setCategory("");
  };
  const handleEditCategory = (categoryId) => {
    const categoryToEdit = categories.find((category2) => category2.id === categoryId);
    if (categoryToEdit) {
      setEditingCategoryId(categoryId);
      setEditedCategory(categoryToEdit.category);
    }
  };
  const handleSaveEditedCategory = () => {
    if (!editedCategory) {
      console.error("Edited category is empty.");
      return;
    }
    setEditingCategoryId(null);
    setEditedCategory("");
  };
  const handleDeleteCategory = (categoryId) => {
    deleteCategoryFromServer(categoryId).then(() => {
      const updatedCategories = categories.filter((category2) => category2.id !== categoryId);
      setCategories(updatedCategories);
    }).catch((error) => {
      console.error("Error deleting category:", error);
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { children: [
      "Category Name:",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", value: category, onChange: (e) => setCategory(e.target.value) }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.jsx",
      lineNumber: 71,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Category.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", className: "button", children: "ADD" }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "button", onClick: onCancel, style: {
        backgroundColor: "red",
        marginLeft: "2px"
      }, children: "Cancel" }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.jsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { children: categories.map((category2) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: editingCategoryId === category2.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", value: editedCategory, onChange: (e) => setEditedCategory(e.target.value) }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 91,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: handleSaveEditedCategory, children: "Save" }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 92,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.jsx",
      lineNumber: 90,
      columnNumber: 52
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
      category2.category,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => handleEditCategory(category2.id), style: {
        marginLeft: "8px"
      }, children: "Edit" }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 95,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { onClick: () => handleDeleteCategory(category2.id), style: {
        marginLeft: "8px",
        color: "red"
      }, children: "Delete" }, void 0, false, {
        fileName: "app/components/Category.jsx",
        lineNumber: 100,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Category.jsx",
      lineNumber: 93,
      columnNumber: 26
    }, this) }, category2.id, false, {
      fileName: "app/components/Category.jsx",
      lineNumber: 89,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/Category.jsx",
      lineNumber: 88,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Category.jsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Category.jsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}
_s(CategoryForm, "HjoX0fzjyOICyLjwEj5gbf64v1E=");
_c2 = CategoryForm;
var Category_default = CategoryForm;
var _c2;
$RefreshReg$(_c2, "CategoryForm");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Subtask.jsx
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/Subtask.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/Subtask.jsx"
  );
  import.meta.hot.lastModified = "1692859988302.256";
}
function Subtask({
  subtasks,
  onSaveSubtask,
  onDeleteSubtask
}) {
  _s2();
  const [subtaskTitle, setSubtaskTitle] = (0, import_react2.useState)("");
  const [subtaskStatus, setSubtaskStatus] = (0, import_react2.useState)("in-progress");
  const handleSubtaskCreate = () => {
    if (subtaskTitle.trim() === "") {
      return;
    }
    const newSubtask = {
      title: subtaskTitle,
      status: subtaskStatus
    };
    onSaveSubtask(newSubtask);
    setSubtaskTitle("");
    setSubtaskStatus("in-progress");
  };
  const handleSubtaskDelete = (subtaskId) => {
    onDeleteSubtask(subtaskId);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { children: "Add Subtask" }, void 0, false, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
        "Title:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", value: subtaskTitle, onChange: (e) => setSubtaskTitle(e.target.value) }, void 0, false, {
          fileName: "app/components/Subtask.jsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { children: [
        "Status:",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("select", { value: subtaskStatus, onChange: (e) => setSubtaskStatus(e.target.value), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
            fileName: "app/components/Subtask.jsx",
            lineNumber: 56,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
            fileName: "app/components/Subtask.jsx",
            lineNumber: 57,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
            fileName: "app/components/Subtask.jsx",
            lineNumber: 58,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Subtask.jsx",
          lineNumber: 55,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: handleSubtaskCreate, children: "Add Subtask" }, void 0, false, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Subtask.jsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: subtasks && subtasks.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { children: subtasks.map((subtask) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { children: [
      subtask.title,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("select", { value: subtask.status, onChange: (e) => setSubtaskStatus(e.target.value), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
          fileName: "app/components/Subtask.jsx",
          lineNumber: 68,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
          fileName: "app/components/Subtask.jsx",
          lineNumber: 69,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
          fileName: "app/components/Subtask.jsx",
          lineNumber: 70,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { onClick: () => handleSubtaskDelete(subtask.id), children: "Delete" }, void 0, false, {
        fileName: "app/components/Subtask.jsx",
        lineNumber: 72,
        columnNumber: 17
      }, this)
    ] }, subtask.id, true, {
      fileName: "app/components/Subtask.jsx",
      lineNumber: 65,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/components/Subtask.jsx",
      lineNumber: 64,
      columnNumber: 44
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "No subtasks available." }, void 0, false, {
      fileName: "app/components/Subtask.jsx",
      lineNumber: 76,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/Subtask.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Subtask.jsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_s2(Subtask, "GxVNUIx0xhT979ZiswkMGJmUExo=");
_c3 = Subtask;
var Subtask_default = Subtask;
var _c3;
$RefreshReg$(_c3, "Subtask");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/todo.jsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/todo.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/todo.jsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: todo_default
}];
function TodoRoute() {
  _s3();
  const [isFormOpen, setIsFormOpen] = (0, import_react4.useState)(false);
  const [todoList, setTodoList] = (0, import_react4.useState)(useLoaderData().todoListItems);
  const [filterValue, setFilterValue] = (0, import_react4.useState)("all");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const [todosPerPage, setTodosPerPage] = (0, import_react4.useState)(10);
  const [searchTerm, setSearchTerm] = (0, import_react4.useState)("");
  const [showFavoritesOnly, setShowFavoritesOnly] = (0, import_react4.useState)(false);
  const [selectedCategoryId, setSelectedCategoryId] = (0, import_react4.useState)("");
  const [isCategoryFormOpen, setIsCategoryFormOpen] = (0, import_react4.useState)(false);
  const [categories, setCategories2] = (0, import_react4.useState)(useLoaderData().categories);
  const data = useLoaderData();
  const [isSubtaskPanelOpen, setIsSubtaskPanelOpen] = (0, import_react4.useState)(false);
  const [selectedTodoId, setSelectedTodoId] = (0, import_react4.useState)("");
  const [subtaskTitle, setSubtaskTitle] = (0, import_react4.useState)("");
  const [subtaskStatus, setSubtaskStatus] = (0, import_react4.useState)("in-progress");
  const selectedTodo = todoList.find((todo) => todo.id === selectedTodoId);
  const [subtasks, setSubtasks] = (0, import_react4.useState)(useLoaderData().subtasks);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  const closeForm = () => {
    setIsFormOpen(false);
  };
  const handleCategoryCreate = async (categoryName) => {
    console.log("Received category:", categoryName);
    try {
      if (!categoryName) {
        throw new Error("Invalid category data.");
      }
      const newCategory = await import_db.db.category.create({
        data: {
          category: categoryName
        }
      });
      const updatedCategories = await import_db.db.category.findMany();
      setCategories2(updatedCategories);
      setSelectedCategoryId(newCategory.id);
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };
  const handleStatusChange = (id, newStatus) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: newStatus
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  const handleDelete = async (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    try {
      await fetch(`/todo/${id}`, {
        method: "DELETE"
      });
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  const filteredTodoList = filterValue === "all" ? todoList : todoList.filter((todo) => todo.status === filterValue);
  console.log("Filtered Todo List:", filteredTodoList);
  const handleSearch = () => {
    const filteredTodoList2 = filterValue === "all" ? todoList : todoList.filter((todo) => todo.status === filterValue);
    const searchedTodoList2 = filteredTodoList2.filter((todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return searchedTodoList2;
  };
  const searchedTodoList = handleSearch();
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = searchedTodoList.slice(indexOfFirstTodo, indexOfLastTodo);
  const handleFavoriteToggle = (id) => {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isFavorite: !todo.isFavorite
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };
  const favoritedTodoList = todoList.filter((todo) => todo.isFavorite);
  const openSubtaskPanel = (todoId) => {
    setSelectedTodoId(todoId);
    setIsSubtaskPanelOpen(true);
  };
  const handleSubtaskCreate = async (newSubtask) => {
    if (!selectedTodoId || newSubtask.title.trim() === "") {
      return;
    }
    const updatedSubtasks = [...subtasks, newSubtask];
    setSubtasks(updatedSubtasks);
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === selectedTodoId) {
        return {
          ...todo,
          subtask: updatedSubtasks
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    setIsSubtaskPanelOpen(false);
    setSubtaskTitle("");
    setSubtaskStatus("in-progress");
  };
  const handleSubtaskDelete = (subtaskId) => {
    const updatedSubtasks = subtasks.filter((subtask) => subtask.id !== subtaskId);
    setSubtasks(updatedSubtasks);
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id === selectedTodoId) {
        return {
          ...todo,
          subtask: updatedSubtasks
        };
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
    fontFamily: "system-ui, sans-serif",
    lineHeight: "1.8"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: checklist_default, alt: "", style: {
          height: "50px"
        } }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 285,
          columnNumber: 17
        }, this),
        "TODOER"
      ] }, void 0, true, {
        fileName: "app/routes/todo.jsx",
        lineNumber: 285,
        columnNumber: 13
      }, this),
      data.user ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
          fontSize: "30px"
        }, children: `Hi ${data.user.username}` }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 290,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "button", style: {
          marginLeft: "10px"
        }, children: "Logout" }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 294,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 293,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todo.jsx",
        lineNumber: 289,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/todo.jsx",
        lineNumber: 300,
        columnNumber: 22
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/todo.jsx",
      lineNumber: 283,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { children: "What do you want to do Today?" }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 311,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "button-container", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", id: "addtodo", className: "button1", onClick: toggleForm, children: "Add Todo" }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 313,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", className: "button1", onClick: () => setIsCategoryFormOpen(true), children: "Add Category" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 318,
                columnNumber: 19
              }, this),
              isCategoryFormOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "popup", children: categories && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Category_default, { onSave: handleCategoryCreate, onCancel: () => setIsCategoryFormOpen(false), categories }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 324,
                columnNumber: 35
              }, this) }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 323,
                columnNumber: 43
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 317,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 312,
            columnNumber: 19
          }, this),
          isFormOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "popup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: [
              "Title",
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "title", className: "input-field" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 339,
                columnNumber: 20
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 337,
              columnNumber: 20
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 336,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: [
              "Description",
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", { name: "description", className: "textarea-field" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 346,
                columnNumber: 16
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 344,
              columnNumber: 17
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 343,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: [
              "Status",
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { name: "status", className: "select-field", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
                  fileName: "app/routes/todo.jsx",
                  lineNumber: 355,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
                  fileName: "app/routes/todo.jsx",
                  lineNumber: 356,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
                  fileName: "app/routes/todo.jsx",
                  lineNumber: 357,
                  columnNumber: 13
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 353,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 351,
              columnNumber: 11
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 350,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { children: [
              "Category",
              categories && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { name: "category", value: selectedCategoryId, onChange: (e) => setSelectedCategoryId(e.target.value), className: "select-field", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "", children: "Select Category" }, void 0, false, {
                  fileName: "app/routes/todo.jsx",
                  lineNumber: 366,
                  columnNumber: 13
                }, this),
                categories.map((category) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: category.id, children: category.category }, category.id, false, {
                  fileName: "app/routes/todo.jsx",
                  lineNumber: 367,
                  columnNumber: 41
                }, this))
              ] }, void 0, true, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 364,
                columnNumber: 27
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 362,
              columnNumber: 10
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 361,
              columnNumber: 10
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "button-group", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 375,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { class: "button button-cancel", onClick: closeForm, children: "Cancel" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 378,
                columnNumber: 11
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 374,
              columnNumber: 11
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 335,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 334,
            columnNumber: 34
          }, this),
          selectedTodoId && isSubtaskPanelOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "popup", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Subtask_default, { selectedTodoId, subtasks, onSaveSubtask: handleSubtaskCreate, onDeleteSubtask: handleSubtaskDelete }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 390,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => {
              setIsSubtaskPanelOpen(false);
              setSubtaskTitle("");
              setSubtaskStatus("in-progress");
            }, className: "button", children: "Cancel" }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 394,
              columnNumber: 9
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 393,
              columnNumber: 7
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 389,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 388,
            columnNumber: 54
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 310,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "search-container", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", className: "search-input", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), onKeyPress: (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const filteredTodos = handleSearch();
              const currentSearchedTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
              setTodoList(currentSearchedTodos);
            }
          }, placeholder: "Search todos..." }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 413,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button search-button", onClick: () => {
            const filteredTodos = handleSearch();
            const currentSearchedTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);
            setTodoList(currentSearchedTodos);
          }, children: "\u{1F50D}" }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 423,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 412,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { style: {
          display: "flex",
          justifyContent: "initial"
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "checkbox", onChange: (e) => {
              const selectAll = e.target.checked;
              const updatedTodoList = todoList.map((todo) => ({
                ...todo,
                selected: selectAll
              }));
              setTodoList(updatedTodoList);
            } }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 438,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { value: filterValue, onChange: (e) => setFilterValue(e.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "all", children: "All" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 449,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 450,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 451,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 452,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 447,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 437,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "bookmark-icon-container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `bookmark-icon ${showFavoritesOnly ? "active" : ""}`, onClick: () => setShowFavoritesOnly(!showFavoritesOnly), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: bookmark_default, alt: "", style: {
            height: "40px"
          } }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 459,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 457,
            columnNumber: 18
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 456,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 433,
          columnNumber: 16
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { children: showFavoritesOnly ? favoritedTodoList.map(({
          id,
          title,
          status,
          selected,
          isFavorite
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "add-icon", onClick: () => openSubtaskPanel(id), children: "\u2795" }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 481,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "checkbox", checked: selected, onChange: () => {
              const updatedTodoList = todoList.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    selected: !selected
                  };
                }
                return todo;
              });
              setTodoList(updatedTodoList);
            } }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 486,
              columnNumber: 22
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: id, style: {
              backgroundColor: getStatusColor(status),
              padding: "2px 5px",
              textDecoration: "none"
            }, children: title }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 500,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 479,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
            display: "table"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
            display: "table-row"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `status ${status}`, style: {
              display: "table-cell",
              marginRight: "10px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { name: "status", value: status, onChange: (e) => handleStatusChange(id, e.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 523,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 524,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 525,
                columnNumber: 16
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 521,
              columnNumber: 16
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 517,
              columnNumber: 16
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
              display: "table-cell"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button", onClick: () => {
                navigate(`/edit-todo/${id}`);
              }, style: {
                backgroundColor: "lightblue",
                marginLeft: "2px"
              }, children: "Edit" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 531,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button", onClick: () => {
                if (window.confirm("Are you sure you want to delete this todo?")) {
                  handleDelete(id);
                }
              }, style: {
                backgroundColor: "lightcoral",
                marginLeft: "2px"
              }, children: "Delete" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 540,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `favorite-icon ${isFavorite ? "active" : ""}`, onClick: () => handleFavoriteToggle(id), style: {
                marginLeft: "2px"
              }, children: isFavorite ? "\u2764\uFE0F" : "\u{1F5A4}" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 551,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 528,
              columnNumber: 16
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 514,
            columnNumber: 16
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 511,
            columnNumber: 16
          }, this)
        ] }, id, true, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 477,
          columnNumber: 19
        }, this)) : currentTodos.map(({
          id,
          title,
          status,
          selected,
          isFavorite
        }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "add-icon", onClick: () => openSubtaskPanel(id), children: "\u2795" }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 569,
              columnNumber: 22
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "checkbox", checked: selected, onChange: () => {
              const updatedTodoList = todoList.map((todo) => {
                if (todo.id === id) {
                  return {
                    ...todo,
                    selected: !selected
                  };
                }
                return todo;
              });
              setTodoList(updatedTodoList);
            } }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 574,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: id, style: {
              backgroundColor: getStatusColor(status),
              padding: "2px 5px",
              textDecoration: "none"
            }, children: title }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 587,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 568,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
            display: "table"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
            display: "table-row"
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `status ${status}`, style: {
              display: "table-cell",
              marginRight: "10px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("select", { name: "status", value: status, onChange: (e) => handleStatusChange(id, e.target.value), children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "in-progress", children: "In Progress" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 609,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 610,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "on-hold", children: "On Hold" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 611,
                columnNumber: 16
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 607,
              columnNumber: 16
            }, this) }, void 0, false, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 603,
              columnNumber: 16
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { style: {
              display: "table-cell"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button", onClick: () => {
                navigate(`/edit-todo/${id}`);
              }, style: {
                backgroundColor: "lightblue",
                marginLeft: "2px"
              }, children: "Edit" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 617,
                columnNumber: 16
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "button", onClick: () => {
                if (window.confirm("Are you sure you want to delete this todo?")) {
                  handleDelete(id);
                }
              }, style: {
                backgroundColor: "lightcoral",
                marginLeft: "2px"
              }, children: "Delete" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 626,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: `favorite-icon ${isFavorite ? "active" : ""}`, onClick: () => handleFavoriteToggle(id), style: {
                marginLeft: "2px"
              }, children: isFavorite ? "\u2764\uFE0F" : "\u{1F5A4}" }, void 0, false, {
                fileName: "app/routes/todo.jsx",
                lineNumber: 637,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/todo.jsx",
              lineNumber: 614,
              columnNumber: 16
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 600,
            columnNumber: 16
          }, this) }, void 0, false, {
            fileName: "app/routes/todo.jsx",
            lineNumber: 597,
            columnNumber: 17
          }, this)
        ] }, id, true, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 567,
          columnNumber: 19
        }, this)) }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 468,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 467,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Outlet, {}, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 651,
          columnNumber: 20
        }, this) }, void 0, false, {
          fileName: "app/routes/todo.jsx",
          lineNumber: 650,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/todo.jsx",
        lineNumber: 304,
        columnNumber: 14
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Pagination_default,
        {
          currentPage,
          todosPerPage,
          totalTodos: searchedTodoList.length,
          onPageChange: (page) => setCurrentPage(page),
          onPerPageChange: (event) => setTodosPerPage(parseInt(event.target.value))
        },
        void 0,
        false,
        {
          fileName: "app/routes/todo.jsx",
          lineNumber: 656,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "app/routes/todo.jsx",
      lineNumber: 303,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/todo.jsx",
    lineNumber: 279,
    columnNumber: 10
  }, this);
}
_s3(TodoRoute, "VlsOK8VPx8NX+IBcevIkKkkSsxg=", false, function() {
  return [useLoaderData, useNavigate, useLoaderData, useLoaderData, useLoaderData];
});
_c4 = TodoRoute;
var _c4;
$RefreshReg$(_c4, "TodoRoute");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  TodoRoute as default,
  links
};
//# sourceMappingURL=/build/routes/todo-MPTZXMSH.js.map
