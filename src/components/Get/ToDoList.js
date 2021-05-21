import React, {useEffect, useState} from 'react';
import '../../styling/ToDoList.css';
import List from './List';
import IfLoading from './IfLoading';


function ToDoList(){
    const ListLoading = IfLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        tasks: null,
    });

    useEffect(() => {
        setAppState({loading: true});
        const url = 'https://5tkwxph66b.execute-api.us-east-2.amazonaws.com/items';
        fetch(url)
            .then((res) => res.json())
            .then((tasks) => {
                setAppState({loading: false, tasks: tasks});
            });
    }, [setAppState])

    return(
        <div className='App'>
        <div className='container'>
          <h1>To Do List</h1>
        </div>
        <div className='task-container'>
          <ListLoading isLoading={appState.loading} tasks={appState.tasks} />
        </div>
      </div>
    );
  }

export default ToDoList;