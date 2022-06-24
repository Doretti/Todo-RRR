import { observer } from 'mobx-react-lite'
import React from 'react'
import todo, { ITodo } from '../store/todo'
import s from './Todo.module.scss'
import { VscCheck, VscChromeClose } from "react-icons/vsc";

interface ITodoProps {
    todo: ITodo
}

export default observer(function Todo(props: ITodoProps) {
    return (
    <div className={s.todo}>
        <div onClick={() => {
            todo.toggleTodo(props.todo.id)        
        }}>
            <p>{props.todo.id}</p>
            <p>{props.todo.text}</p>
            {
                props.todo.isComplite
                ?
                <VscCheck />
                :
                <VscChromeClose />
            }
        </div>
        <VscChromeClose onClick={() => todo.removeTodo(props.todo.id)} style={{color: 'red'}}/>
    </div>
    )
})
