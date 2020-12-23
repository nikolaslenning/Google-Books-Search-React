import React, { useState } from 'react';
import { useGlobalContext } from '../../utils/GlobalContext';
import BooksContainer from '../../components/BooksContainer/BooksContainer'

const AddTodo = () => {
  const [, dispatch] = useGlobalContext();
  const [todoValue, setTodoValue] = useState('');

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        '/api/todo',
        {
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: todoValue }),
          method: 'POST',
        }
      );
      const json = await response.json();

      dispatch({ type: 'addTodo', payload: json.data });
      setTodoValue('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <BooksContainer/>
     
    </div>
  );
};

export default AddTodo;