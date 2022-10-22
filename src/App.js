import { Link, Route, Routes } from 'react-router-dom';
import BookLayout from './BookLayout';
import Book from './pages/Book';
import BookList from './pages/BookList';

import Home from './pages/Home';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={'/'} state={{ name: 'Mina' }}>
              Home
            </Link>
          </li>
          <li>
            {' '}
            <Link to={'/books'}>Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookLayout />}>
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
          <Route index element={<BookList />} />
        </Route>
        {/* <Route path='/books' element={<BookList />} />
        <Route path='/books/:id' element={<Book />} />
        <Route path='/books/new' element={<NewBook />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
