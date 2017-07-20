import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'app', // название тэга который будет использоваться в html
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    // свойства компонента:
    title: string = 'Angular 2Do';

}