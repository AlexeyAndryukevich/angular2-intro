import {Component} from "@angular/core";

class Todo {
    constructor(public title: string,
                public completed: boolean = false) {};
}

const todos: Todo[] = [
    {title: 'Изучить TS', completed: true},
    {title: 'Изучить Angular2', completed: false},
    {title: 'Написать приложение', completed: false}    
];

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

    //create(event: Event, input: HTMLInputElement) - в классе DOM элемент - мешать логику и манипулирование DOM не рекомендуется!
    create(event: Event, title: string) {
        event.preventDefault();

        let todo = new Todo(title);
        this.todos.push(todo);
    }

    toggle(todo: Todo) {
        todo.completed = !todo.completed;
    }

    delete(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if(index > -1) {
            this.todos.splice(index, 1);
        }
    }
}