import './App.css';
// import { Sidebar } from './components/Sidebar';
import { AddNewBook } from './components/AddNewBook';
import { RemoveBook } from './components/RemoveBook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { AddNewLibrary } from './components/AddNewLibrary';
import Books from './components/Books';
import MyRequests from './components/MyRequests';
import AdminRequests from './components/AdminRequests';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* <Sidebar /> */}
          <Route path='/' element={<About />} />
          <Route path='/auth/register' element={<Register />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/owner/add-new-library' element={<AddNewLibrary />} /> 
          <Route path='/add-new-book' element={<AddNewBook />} /> 
          <Route path='/api/books' element={<Books />} /> 
          <Route path='/api/my-requests' element={<MyRequests />} />
          <Route path='/admin/issue-book' element={<AdminRequests />} />
          <Route path='/remove-book' element={<RemoveBook />} />
          {/* <AddNewBook />
        <RemoveBook /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
