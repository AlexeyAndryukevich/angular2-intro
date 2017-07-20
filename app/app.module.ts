//подключение нужных модулей
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todo-list/todo-list.component";


//главный (основной) модуль приложения
@NgModule({
    imports: [BrowserModule, FormsModule], //импортируем модуль браузера в модуль приложения через объект параметр функции декоратора, регистрируем модуль форм в приложении
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent
    ], // регистрация компонента App в основном модуле приложения
    bootstrap: [AppComponent] // что использовать для запуска приложения
    
}) //декоратор
export class AppModule {
    
}