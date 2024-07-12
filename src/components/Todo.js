import React from 'react';

const TodoModal = ({ modal, toggleModal, newTodo, setNewTodo, newStatus, setNewStatus, handleAddTodo }) => (
  modal && (
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
  )
);

export default TodoModal;
