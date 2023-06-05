import React from 'react';

const NavBar = (): React.ReactElement => (
  <nav className="z-20 fixed shadow-lg w-full h-16 flex justify-center md:border-b md:transition-all md:ease-in-out md:duration-150">
    <ul className='flex space-x-11 items-center text-lg'>
      <li>Home</li>
      <li>My Projects</li>
      <li>About Me</li>
      <li></li>
    </ul>
  </nav>
);


export default NavBar;