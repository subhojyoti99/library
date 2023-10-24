import './App.css';
// import { Sidebar } from './components/Sidebar';
import { AddNewBook } from './components/AddNewBook';
import { RemoveBook } from './components/RemoveBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Register } from './components/Register';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* <Sidebar /> */}
          <Route path='/' element={<About />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/admin/library/book' element={<AddNewBook />} />
          <Route path='/remove-book' element={<RemoveBook />} />
          {/* <AddNewBook />
        <RemoveBook /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
