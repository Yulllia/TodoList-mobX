import { observer } from "mobx-react";
import React from "react";
import store from "../store";
import ModalPopup from "./ModalPopup";

function TodoList() {
  return (
    <div className="mx-auto container-sm text-center mt-5">
      <table className="w-5 table">
        {store.todos.length ? (
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
        ) : (
          <tbody>
            <tr>
              <th className="border-bottom-0">{"Add Todo Item!"}</th>
            </tr>
          </tbody>
        )}
        <tbody>
          {store.todos.map((todo, index) => (
            <React.Fragment key={todo.id}>
              <tr
                key={todo.id}
                className="cursor-pointer"
                onClick={() => store.getTodo(index)}
              >
                <th
                  scope="row"
                  data-bs-toggle="modal"
                  data-bs-target="#modalTodo"
                >
                  #{todo.id}
                </th>
                <td data-bs-toggle="modal" data-bs-target="#modalTodo">
                  {" "}
                  {todo.title}
                </td>
                <td data-bs-toggle="modal" data-bs-target="#modalTodo">
                  {todo.description}
                </td>
                <td>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                      onChange={() => (todo.status = !todo.status)}
                      checked={todo.status}
                    />
                  </div>
                </td>
                <td className="border-bottom-0">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => {
                    store.removeTodo(todo.id);
                  }}
                >
                  Delete
                </button>
                </td>
              </tr>
              <ModalPopup />
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ObservedTodoListItems = observer(TodoList);

function TodoListItem() {
  return (
    <>
      <ObservedTodoListItems />
    </>
  );
}

export default TodoListItem;
