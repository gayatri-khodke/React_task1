import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date());
  const [sidebar, setSidebar] = useState(true);

  useEffect(() => {
    const updateTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(updateTime);
  }, []); 

  const toggleSidebar = () => {
    setSidebar(prevSidebar => !prevSidebar);
  };

  return (
    <>
      <header>
        <nav>
          <button className='togglebtn' onClick={toggleSidebar}>asidebar</button>
          <ul>
            <li>Open Modal</li>
          </ul>
        </nav>
      </header>
      {
        sidebar && (
          <aside>
            <nav>
              <ul>
                <li>All Task</li>
                <li>Pending</li>
                <li>Completed</li>
              </ul>
              <div class='showtime'>
                <h3>Digital Clock</h3>
                <h2>{time.toLocaleTimeString()}</h2>
              </div>
              </nav>

          </aside>
        )
      }
    </>
  );
}

export default App;
