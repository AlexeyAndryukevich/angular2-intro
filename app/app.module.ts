//подключение нужных модулей
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
//главный (основной) модуль приложения
@NgModule({
    imports: [BrowserModule] //импортируем модуль браузера в модуль приложения через объект параметр функции декоратора
}) //декоратор
export class AppModule {
    
}