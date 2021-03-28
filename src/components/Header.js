import react, { memo, useState } from 'react'

const Header = memo(pros => {
    const [text, setText] = useState(' ')
    const { addTodo, isCheckedAll } = pros
    const onAddTodo = (e ={} ) => {
        if(e.key === 'Enter' && text){
            addTodo({
                id: new Date().valueOf(),
                text,
                isCompleted: false
            })
            setText('')
        }
    }
    return (
        <header className="header">
            <h1>Todo</h1>
            <input 
            className="new-todo"
            value= {text}
            onChange= {(e) => setText(e.target.value)}
            onKeyPress={(e) => onAddTodo(e)} 
            checked = {isCheckedAll}
            />
        </header>
    )
})
export default Header