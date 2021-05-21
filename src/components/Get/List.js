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
                        <span className='id-text'>{task.id}</span>
                        <span className='task-text'>{task.task} </span>
                        <div>{!task.id ? (<p>Completed</p>):(<p>Not Completed</p>)}</div>
                    </li>)
            })}
        </ul>
    );
};
export default List;