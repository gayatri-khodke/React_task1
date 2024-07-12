import React from 'react';

const Header = ({ toggleSidebar, toggleModal, toggleTheme, theme }) => (
  <header>
    <nav>
      <button className='togglebtn' onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul>
        <li onClick={toggleModal}>Modal</li>
        <li onClick={toggleTheme} className="theme-toggle-btn" style={{backgroundColor:{theme}}}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </li>
      </ul>
     
    </nav>
  </header>
);

export default Header;
