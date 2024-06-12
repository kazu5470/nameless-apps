import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import { Home } from './components/Home';
import { Top } from './components/Top';
import { Todo } from './components/Todo';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Top />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Link to="/">Back To Top</Link>
    </BrowserRouter>
  );
};
