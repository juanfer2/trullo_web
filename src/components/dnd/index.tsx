import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '@components/dnd/column';

const initialTasks = [
  {
    id: '1',
    text: 'React.js'
  },
  {
    id: '2',
    text: 'HTML/CSS'
  },
  {
    id: '3',
    text: 'AWS'
  },
  {
    id: '4',
    text: 'JavaScript'
  }
];

const initialColumns = {
  Backlog: initialTasks,
  Todo: [
    {
      id: '5',
      text: 'OtherColumn'
    }
  ]
};

const reorder = ({ list, startIndex, endIndex }: { list: any; startIndex: any; endIndex: any }) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function DnD() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [columns, setColumns] = useState<any>(initialColumns);

  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) {
          return;
        }
        console.log('start');
        console.log(source.index);
        console.log(destination.index);

        if (source.droppableId === destination.droppableId) {
          if (source.index === destination.index) {
            return;
          }

          console.log(columns[source.droppableId].tasks);

          const widgets = reorder({
            list: columns[source.droppableId],
            startIndex: source.index,
            endIndex: destination.index
          });

          console.log(widgets);

          const update = {
            ...columns,
            [source.droppableId]: widgets
          };

          console.log(update);

          setColumns({
            ...columns,
            [source.droppableId]: widgets
          });
        } else {
          const startColumn = [...columns[source.droppableId]];
          const finishColumn = [...columns[destination.droppableId]];
          const [removed] = startColumn.splice(source.index, 1);
          finishColumn.splice(destination.index, 0, removed);

          setColumns({
            ...columns,
            [source.droppableId]: startColumn,
            [destination.droppableId]: finishColumn
          });
        }
      }}
    >
      <div className="column-list">
        {columns &&
          Object.keys(initialColumns).map((column: any) => (
            <Column key={column} id={column} title={column} tasks={columns[column]} />
          ))}
      </div>
    </DragDropContext>
  );
}

export default DnD;
