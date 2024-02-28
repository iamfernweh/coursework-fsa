import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import AllUsers from './components/AllUsers';

function App() {


  return (
    <>
      <Nav />
      <h1>My App</h1>
      <Routes>
        <Route path='/' element={<h2>Home</h2>} />
        <Route path='/users' element={<AllUsers />} />
        <Route path='/posts' element={<h2>Posts</h2>} />
      </Routes>
    </>
  );
}

export default App;