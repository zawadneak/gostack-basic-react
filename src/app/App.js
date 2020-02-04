import React from 'react';
import './App.css';

import Header from './components/header/header';
import PostList from './components/postList/postList';

function App() {
  return (
    <div className="container">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
