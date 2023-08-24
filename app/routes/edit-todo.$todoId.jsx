// routes/edit-todo.$todoId.jsx
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async ({ params }) => {
  const todo = await db.todo.findUnique({
    where: { id: params.todoId },
  });
  if (!todo) {
    throw new Error("Todo not found");
  }
  return json({ todo });
};

export const action = async ({ params, request }) => {
  const { todoId } = params;
  const form = await request.formData();
  const newTitle = form.get("title");

  try {
    // Update the todo's description in the database
    await db.todo.update({
      where: { id: todoId },
      data: { title: newTitle },
    });

    // Redirect back to the todo details page
    return json({ success: true });
  } catch (error) {
    // Handle errors and respond with an error message
    return json({ error: "An error occurred while updating the todo" }, 500);
  }
};

export default function EditTodo() {
  const data = useLoaderData();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch(`/edit-todo/${data.todo.id}`, {
      method: "POST",
      body: formData,
    });
    // Handle the response (success or error)
  };

  return (
    <div>
      <h3>Edit Todo</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:{" "}
            <textarea name="title" defaultValue={data.todo.title} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={() => { navigate(`/todo`); }} className="button">
            Save 
          </button>
        </div>
      </form>
    </div>
  );
}
