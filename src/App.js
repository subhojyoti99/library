import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { AddNewBook } from './components/AddNewBook';
import { RemoveBook } from './components/RemoveBook';
import { BrowserRouter, Route, Router, Routes, Switch } from 'react-router-dom';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          {/* <Sidebar /> */}
          <Route path='/' element={<About />} />
          <Route path='/add-new-book' element={<AddNewBook />} />
          <Route path='/remove-book' element={<RemoveBook />} />
          {/* <AddNewBook />
        <RemoveBook /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
