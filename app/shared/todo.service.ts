import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from "./todo";

@Injectable() // аннотация чтоб в сервисе использовать другие сервисы
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[] = [];

    constructor(private http: Http) {} // экземпляр сервиса Http будет помещен в соотв св-во при конструировании

    getTodos(): Observable<Todo[]> {
        return this.http.get(this.apiUrl)
                        .map(res => res.json().data as Todo[])
                        .map(todos => this.todos = todos)
                        .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});

        let todo = new Todo(title);
        
        this.http.post(this.apiUrl, todo, options)
                 .map(res => res.json().data)
                 .map(todo => this.todos.push(todo))
                 .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.delete(url, options)
                 .map(res => {
                     let index = this.todos.indexOf(todo);
                     if(index > -1) {
                         this.todos.splice(index, 1);
                     }
                 })
                 .catch(this.handleError);        
    }

    toggleTodo (todo: Todo) {
        let headers = new Headers({'Content-type': 'application/json'});
        let options = new RequestOptions({headers});
        let url = `${this.apiUrl}/${todo.id}`;

        this.http.put(url, todo, options)
                 .map(res => todo.completed = !todo.completed)
                 .catch(this.handleError);         
    }

    private handleError(error: any) {
        console.error("Произошла ошибка ", error);
        return Observable.throw(error.message || error);
    }
}