import { InMemoryDbService } from "angular-in-memory-web-api"; 

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {id: 1, title: 'Изучить TS', completed: true},
            {id: 2, title: 'Изучить Angular2', completed: false},
            {id: 3, title: 'Написать приложение', completed: false}    
        ];
        return {todos}; //return {todos: todos};
    }
}
