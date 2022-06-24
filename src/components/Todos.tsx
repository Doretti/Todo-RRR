import React, { Ref } from 'react'
import todo, { ITodo } from '../store/todo'
import Todo from './Todo'
import s from './Todos.module.scss'
import { VscAdd, VscClose, VscCheckAll } from "react-icons/vsc";
import { observer } from 'mobx-react-lite';

// eslint-disable-next-line import/no-anonymous-default-export
export default observer((): JSX.Element => {
    let todos = todo.sorted.map((item, index) => <Todo key={index} todo={item} />)
    const textRef: Ref<HTMLInputElement> = React.createRef()

    const createTodo = () => {
        todo.addTodo({
            id: todo.todos.length + 1,
            text: textRef.current?.value || '',
            isComplite: false
        })
        textRef.current!.value = ''
    }

    return <div className={s.list}>
        <div>
            <div className={s.create}>
                <input ref={textRef} className={s.input} type="text" />
                <button onClick={createTodo} className={s.button}>
                    <VscAdd />
                </button>
            </div>
            { todos }
        </div>
        <div className={s.sort}>
            <VscCheckAll onClick={() => todo.sort('complited')} />
            <VscClose onClick={() => todo.sort('not-complited')} />
        </div>
    </div>
})
