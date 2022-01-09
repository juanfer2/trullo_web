import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import ImagePexels from '@assets/images/nature-image.jpg';
import Card from '@components/card';
import ModalContainer from '@components/modal_container';
import ImageCrob from '@components/image/image_crop';
import TaskContent from '@components/task_content';

export interface ColumnInterface {
  title: string;
  tasks: any[];
  id: any;
}

function Column({ title, tasks, id }: ColumnInterface) {
  const [open, setOpen] = useState(false);

  const image = 'https://joeschmoe.io/api/v1/random';

  const avatarURls = [{ name: image, url: image }];

  return (
    <div className="app">
      <h1>{title}</h1>
      <Droppable droppableId={id}>
        {(droppableProvided: any) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="dropable-container"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(draggableProvided: any) => (
                  <div
                    key={`${title}-${task.id}`}
                    {...draggableProvided.draggableProps}
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.dragHandleProps}
                    className="task-item"
                  >
                    <Card
                      onClick={() => setOpen(true)}
                      title={task.text}
                      imageUrl={ImagePexels}
                      avatarUrls={avatarURls}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {droppableProvided.placeholder}
          </div>
        )}
      </Droppable>
      <ModalContainer open={open} setOpen={setOpen}>
        <ImageCrob imageUrl={ImagePexels} onClose={() => {}} />
        <TaskContent />
      </ModalContainer>
    </div>
  );
}

export default Column;
