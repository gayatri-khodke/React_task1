import React from 'react'
// import '../App.css';

function Modal() {
  return (
    <>
 <div id="myModal" class="modal">
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="container">
                <input type='text' placeholder='write your todo here' />
                <select>
                    <option>Pending</option>
                    <option>Tomorrow</option>
                    <option>Ongoing</option>
                </select>
                <button>ADD</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Modal