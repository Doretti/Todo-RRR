import { makeAutoObservable } from "mobx"

export interface ITodo {
    id: number
    isComplite: boolean
    text: string
}

class Todo {
    todos: ITodo[] = []
    sorted: ITodo[] = []
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: ITodo): void {
        if (todo.text.length < 5 || todo.text.length > 20) {
            return
        }
        this.todos.push(todo)
        this.sorted = this.todos
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter((item: ITodo) => id !== item.id)
        this.sorted = this.todos
    }

    toggleTodo(id: number): void {        
        this.todos = this.todos.map((item: ITodo): ITodo => ({
            id: item.id,
            text: item.text,
            isComplite: item.id === id ? !item.isComplite : item.isComplite
        }))
        this.sorted = this.todos
    }

    sort(type: string) {
        switch (type) {
            case 'complited':
                this.sorted = this.todos.filter(i => i.isComplite)
                break;
        
            case 'not-complited':
                this.sorted = this.todos.filter(i => !i.isComplite)
                break;
        }
    }
}

export default new Todo()