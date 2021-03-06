import { Component, OnInit } from "@angular/core";
import { TodoListService } from "src/app/services/todo-list.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"]
})
export class TodoListComponent implements OnInit {
  //make array of todos:
  todos: Todo[];

  constructor(
    private todoListService: TodoListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.todos = new Array<Todo>();
    this.displayTodoList();
  }

  displayTodoList(): void {
    this.todoListService.getList().subscribe(data => {
      if (data.success) {
        console.log(data);
        this.todos = data.todoList;
      } else {
        this.flashMessage.show("User must be logged in", {
          cssClass: "alert-danger",
          timeOut: "3000"
        });
      }
    });
  }
}
