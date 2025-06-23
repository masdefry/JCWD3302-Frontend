'use client';
import TodoList from '@/features/todos/components/TodoList';
import { useRef, useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([
    {
      activity: 'Makan',
      place: 'Meja',
    },
    {
      activity: 'Minum',
      place: 'Meja',
    },
    {
      activity: 'Nobar',
      place: 'Cafe',
    },
  ]);
  const inputTodo = useRef<HTMLInputElement>(null);

  const onCreateTodo = () => {
    if (!inputTodo?.current?.value) return alert('Input todo is required');

    const currentTodos = [...todos];
    currentTodos.push({
      activity: inputTodo.current?.value,
      place: 'Dimanapun',
    });
    setTodos(currentTodos);
    console.log(todos);
  };

  return (
    <>
      <section
        id='banner'
        className='flex justify-center'
      >
        <div className='w-[540px] pt-32'>
          <h1 className='text-3xl text-white font-bold'>T O D O</h1>
          <label className='input w-full mt-10'>
            <input
              type='radio'
              className='radio'
            />
            <input
              ref={inputTodo}
              type='text'
              className='grow w-full'
              placeholder='Create a new todo'
            />
          </label>
          <button
            onClick={onCreateTodo}
            className='btn bg-purple-900 text-white w-full mt-5'
          >
            Create Todo
          </button>
          <div className='bg-white rounded-md shadow-md mt-5 p-5'>
            {todos.map((item, index) => {
              return (
                <TodoList
                  key={index}
                  todo={item.activity}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
