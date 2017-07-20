//подключение нужных модулей
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
//главный (основной) модуль приложения
@NgModule({
    imports: [BrowserModule, FormsModule], //импортируем модуль браузера в модуль приложения через объект параметр функции декоратора, регистрируем модуль форм в приложении
    declarations: [AppComponent], // регистрация компонента App в основном модуле приложения
    bootstrap: [AppComponent] // что использовать для запуска приложения
    
}) //декоратор
export class AppModule {
    
}