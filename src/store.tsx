import { timeStamp } from "console";
import { action, makeAutoObservable, observable } from "mobx";

export interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

const addTodo = (todos: Todo[], title: string, description: string): Todo[] => {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      title,
      description,
      status: false,
    },
  ];
};

const removeTodo = (todos: Todo[], id: number): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

class Todos {
  todos: Todo[] = [];
  todo: Todo = { id: 0, title: "", description: "", status: false };
  title: string = "";
  description: string = "";

  constructor() {
    makeAutoObservable(this);
  }
  @action addValueTitle(value: string) {
    this.title = value;
  }
  @action addValueDescription(value: string) {
    this.description = value;
  }
  @action addTodo() {
    this.todos = addTodo(this.todos, this.title, this.description);
    this.title = "";
    this.description = "";
  }

  @action getTodo(id: number) {
    this.todo = this.todos[id];
  }

  @action removeTodo(id: number) {
    this.todos = removeTodo(this.todos, id);
  }
}

const store = new Todos();

export default store;
