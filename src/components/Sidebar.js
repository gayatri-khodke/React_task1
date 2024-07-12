import React from 'react';

const Sidebar = ({ time, setFilter }) => (
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
);

export default Sidebar;
