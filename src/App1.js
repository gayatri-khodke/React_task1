import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [sidebar, setSidebar] = useState(true);
  const [modal, setModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newStatus, setNewStatus] = useState('Pending');
  const [filter, setFilter] = useState('All Task');

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

  return (
    <>
      <header>
        <nav>
          <button className='togglebtn' onClick={toggleSidebar}>Toggle Sidebar</button>
          <ul>
            <li onClick={toggleModal}>Open Modal</li>
          </ul>
        </nav>
      </header>
      {sidebar && (
        <aside>
          <nav>
            <ul>
              <li onClick={() => setFilter('All Task')}>All Task</li>
              <li onClick={() => setFilter('Pending')}>Pending</li>
              <li onClick={() => setFilter('Completed')}>Completed</li>
              <li onClick={() => setFilter('Processing')}>Processing</li>
            </ul>
            <div className='showtime'>
              <h3>Digital Clock</h3>
              <h2>{time.toLocaleTimeString()}</h2>
            </div>
          </nav>
        </aside>
      )}
      <main>
        <div className="todo-list">
          <h2>{filter}</h2>
          <ul>
            {filteredTodos.map(todo => (
              <li key={todo.id}>
                <span style={{ textDecoration: todo.status === 'Completed' ? 'line-through' : 'none' }}>
                  {todo.text}
                </span>
                {todo.status !== 'Completed' && (
                  <>
                    <button onClick={() => handleStatusChange(todo.id, 'Completed')}>Done</button>
                    <button onClick={() => handleStatusChange(todo.id, 'Pending')}>Pending</button>
                    <button onClick={() => handleStatusChange(todo.id, 'Processing')}>Processing</button>
                    <button onClick={() => handleEditTodo(todo.id, prompt('Edit todo', todo.text))}>Edit</button>
                  </>
                )}
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </main>
      {modal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>&times;</span>
            <div className="container">
              <input type='text' placeholder='Write your todo here' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
              <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                <option>Pending</option>
                <option>Processing</option>
              </select>
              <button onClick={handleAddTodo}>ADD</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
