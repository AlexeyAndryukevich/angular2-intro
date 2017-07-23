//подключение нужных модулей
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from "angular-in-memory-web-api"; 
import { InMemoryDataService } from "./shared/data.service";

import { AppComponent } from "./app.component";
import { TodoFormComponent } from "./todo-form/todo-form.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { TodoService } from "./shared/todo.service";

//главный (основной) модуль приложения
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
    ], //импортируем модуль браузера в модуль приложения через объект параметр функции декоратора, регистрируем модуль форм в приложении
    declarations: [
        AppComponent,
        TodoFormComponent,
        TodoListComponent,
        TodoItemComponent
    ], // регистрация компонента App в основном модуле приложения
    providers: [TodoService], // регистрация сервисов
    bootstrap: [AppComponent] // что использовать для запуска приложения
    
}) //декоратор
export class AppModule {
    
}