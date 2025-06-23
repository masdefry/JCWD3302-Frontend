import { ITodoListProps } from './types';

export default function TodoList(props: ITodoListProps) {
  return (
    <div className='flex items-center gap-3 border-b-2 border-gray-200 p-3'>
      <input
        type='radio'
        className='radio'
      />
      <h3>{props?.todo}</h3>
    </div>
  );
}
