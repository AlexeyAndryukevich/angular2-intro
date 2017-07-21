//EventEmitter создает объекты способные генерировать события, также они предостовляют интерфейс для подписки на эти события
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Todo } from "../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() delete = new EventEmitter(); //тут хранится объект, генерирующий событие
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onDelete() {
        this.delete.emit(this.todo); //произойдет событие и в рез-те вызовется метод указанный в шаблоне, т.е. метод delete() у родительского компонента
    }
}