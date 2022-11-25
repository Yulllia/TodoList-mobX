import React from "react";
import store from "../store";
import { observer } from "mobx-react";

function TodoAddBlock() {
  return (
    <form className="mx-auto container-sm text-center mt-5" onSubmit={e=>e.preventDefault()}>
      <h2 className="mb-5">Todo List</h2>
      <div className="form-floating mb-3">
        <input
          type="text"
          value={store.title}
          onChange={(evt) => (store.addValueTitle(evt.target.value))}
          className="form-control"
          id="title"
          placeholder="title"
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating">
        <input
          type="text"
          value={store.description}
          onChange={(evt) => (store.addValueDescription(evt.target.value))}
          className="form-control"
          id="description"
          placeholder="description"
        />
        <label htmlFor="description">Description</label>
      </div>
      <button
        type="submit"
        className="mt-4 btn btn-primary btn-lg"
        onClick={() => store.addTodo()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default observer(TodoAddBlock);
