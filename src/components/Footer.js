import React, { memo } from 'react'

const Footer = memo(props =>{
    const {status, setStatusFilter, numOfTodosLeft, numOfTodos, clearCompleted} = props
    const filterBtns =[{
        title: 'ALL',
        isActived: status === 'ALL',
        onClick: () => setStatusFilter('ALL'),
        Link: ''
    }, {
        title: 'Active',
        isActived: status === 'ACTIVE',
        onClick: () => setStatusFilter('ACTIVE'),
        Link: 'active'
    }, { 
        title: 'Completed',
        isActived: status === 'COMPLETED',
        onClick: () => setStatusFilter('COMPLETED'),
        Link: 'completed'  
    }]
    return (
        <footer className="footer">
           <span className="todo-count">
                <strong>{numOfTodosLeft}</strong>
                <span> </span>
                <span>{numOfTodosLeft <= 1 ? 'item': 'items'}</span>
                <span> left</span>
            </span>
            <ul className="filters">
                {
                    filterBtns.map(btn => (
                        <FilterBtn 
                            key={`btn${btn.title}`} 
                            {...btn} 
                            />
                    ))
                }
            </ul>
            {numOfTodos > numOfTodosLeft &&<button className="clear-completed" onClick={clearCompleted}clearCompleted>Clear completed</button>}
        </footer>
    )
})

const FilterBtn = memo(props => {
    const { title, onClick, Link, isActived } = props
    return(
        <>
            <li>
                <a
                    href={`#/${Link}`}
                    className={`${isActived ? 'selected' : ''}`}
                    onClick={onclick}
                 >
                    {title}
                    </a>
            </li>
                <span></span>
        </>
    )
})
export default Footer
    