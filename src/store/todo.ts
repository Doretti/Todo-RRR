import { makeAutoObservable } from "mobx"

export interface ITodo {
    id: number
    isComplite: boolean
    text: string
}

class Todo {
    todos: ITodo[] = []
    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo: ITodo): void {
        if (todo.text.length < 5 || todo.text.length > 20) {
            return
        }
        this.todos.push(todo)
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter((item: ITodo) => id !== item.id)
    }

    toggleTodo(id: number): void {        
        this.todos = this.todos.map((item: ITodo): ITodo => ({
            id: item.id,
            text: item.text,
            isComplite: item.id === id ? !item.isComplite : item.isComplite
        }))
    }
}

export default new Todo()