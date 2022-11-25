import { observer } from "mobx-react";
import React from "react";
import store from "../store";

function ModalPopup() {
  const todo = store.todo;
  return store.todos.length ? (
    <tr>
      <td className="border-bottom-0">
        <div
          className="modal fade"
          id="modalTodo"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{todo?.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body container">
                <p>{todo?.description} </p>
                <p>
                  {"Status: "}
                  {todo?.status ? "Done" : "In Process"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  ) : (
    <div>No data!</div>
  );
}

export default observer(ModalPopup);
