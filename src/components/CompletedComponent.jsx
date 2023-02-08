﻿import { TaskItemCompleted } from './TaskItemCompleted'
import Icon from '@mdi/react';
import { mdiDeleteOutline } from '@mdi/js';

export const CompletedComponent = ({tasks}) => {

  const removeAll = () => {

  }

  return (
    <>
      <div className="task-group">
        {
          tasks.filter((x) => x.completed === true).sort((a,b) => b.id - a.id).map( ( task ) => (
            <TaskItemCompleted 
              key={ task.id } 
              task={ task }
            />
          ))
        }
      </div>
      <button onClick={removeAll}><Icon path={mdiDeleteOutline} size={0.6} />delete all</button>
    </>
  )

}