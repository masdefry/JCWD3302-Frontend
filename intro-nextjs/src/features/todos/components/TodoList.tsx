import { ITodoListProps } from './types';

export default function TodoList(props: ITodoListProps) {
  return (
    <div className='flex items-center gap-3 border-b-2 border-gray-200 p-3'>
      <input
        type='checkbox'
        className='checkbox'
        onChange={() => props?.onUpdateTodoTobeDone(props?.index)}
      />
      <h3>{props?.isDone ? <del>{props?.todo}</del> : props?.todo}</h3>

      <h3 className={props?.isDone ? 'border-b-2 border-gray-300' : ''}>
        {props.todo}
      </h3>
    </div>
  );
}
