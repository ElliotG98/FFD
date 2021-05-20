import React from 'react';

const List = (props) => {
    const {tasks} = props;
    if(!tasks || tasks.length === 0) return <p>Nothing Todo</p>;
    return (
        <ul>
            <h2 className="list-head">To Do list</h2>
            {tasks.Items.map((task) => {
                return (
                    <li key={task.id} className="list">
                        <span className='task-text'>{task.task} </span>
                        <span className='task-completed'>{task.completed}</span>
                    </li>)
            })}
        </ul>
    );
};
export default List;