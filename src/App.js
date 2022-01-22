import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import data from './data';

function App() {
  const [navComponents] = useState(data);

  return (
    <>
      <Navbar data={navComponents} />
      <Search />
    </>
  );
}

export default App;
