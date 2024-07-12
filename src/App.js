import React, { useReducer, useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import TodoModal from './TodoModal';
import { initialState, themeReducer } from './themeReducer';

function App() {
  const [time, setTime] = useState(new Date());
  const [sidebar, setSidebar] = useState(true);
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newStatus, setNewStatus] = useState('Pending');
  const [filter, setFilter] = useState('All Task');
  const [state, dispatch] = useReducer(themeReducer, initialState);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []);

  const toggleSidebar = () => {
    setSidebar(prevSidebar => !prevSidebar);
  };

  const toggleModal = () => {
    setModal(prevModal => !prevModal);
  };

  const handleAddTodo = () => {
    const todo = {
      text: newTodo,
      status: newStatus,
      id: Date.now()
    };
    setTodos([...todos, todo]);
    setNewTodo('');
    setNewStatus('Pending');
    toggleModal();
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleStatusChange = (id, newStatus) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status: newStatus } : todo));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All Task') return true;
    return todo.status === filter;
  });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <div className={`App ${state.theme}`}>
      <Header toggleSidebar={toggleSidebar} toggleModal={toggleModal} toggleTheme={toggleTheme} theme={state.theme} />
      {sidebar && <Sidebar time={time} setFilter={setFilter} />}
      <MainContent 
        filter={filter}
        filteredTodos={filteredTodos}
        handleStatusChange={handleStatusChange}
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      <TodoModal 
        modal={modal}
        toggleModal={toggleModal}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        newStatus={newStatus}
        setNewStatus={setNewStatus}
        handleAddTodo={handleAddTodo}
      />
    </div>
  );
}

export default App;
