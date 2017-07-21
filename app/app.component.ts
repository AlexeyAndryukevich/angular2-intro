import { Component } from "@angular/core";

import { Todo } from "./shared/todo";
import { todos } from "./shared/data";


@Component({
    moduleId: module.id,
    selector: 'app', // название тэга который будет использоваться в html
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    // свойства компонента:
    title: string = 'Angular 2Do';
    todos: Todo[] = todos;

    create(title: string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }
}