import React from 'react';

const MainContent = ({ filter, filteredTodos, handleStatusChange, handleEditTodo, handleDeleteTodo }) => (
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
);

export default MainContent;
