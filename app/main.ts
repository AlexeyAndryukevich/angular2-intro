//этот файл импортирует и запускает основной файл приложения
//импорт платформы на которой работает приложение
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
//импорт основного модуля
import { AppModule } from "./app.module";
const platform = platformBrowserDynamic(); //создаем платформу на которой будет работать наше приложение
platform.bootstrapModule(AppModule); //отправляем в платформу модуль приложнения