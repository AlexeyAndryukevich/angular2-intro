import {Component} from "@angular/core";

const todos = [
    'Изучить TS',
    'Изучить Angular2',
    'Написать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app', // название тэга который будет использоваться в html
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    // свойства компонента:
    title = 'Angular 2Do';
    todos = todos;
}