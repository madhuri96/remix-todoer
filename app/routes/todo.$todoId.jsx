import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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

export const action = async ({ params }) => {
  const { todoId } = params; // Extract the todoId from the route params

  try {
    // Delete the todo with the specified ID from the database
    await db.todo.delete({ where: { id: todoId } });

    // Respond with a success message
    return json({ message: "Todo deleted successfully" });
  } catch (error) {
    // Handle errors and respond with an error message
    return json({ error: "An error occurred while deleting the todo" }, 500);
  }
};


export default function TodoId(){
  const data = useLoaderData();
  return(
    <div>
        <h3>Todo ID</h3>
        <p>{data.todo.description}</p>
        <Link to=".">"{data.todo.title}" Permalink</Link>
    </div>
  )
}