import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './screens/home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Createpost from './screens/createpost/Createpost'
import Postdetails from './screens/postdetails/Postdetails'
function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Createpost/>} />
      <Route path='/post/:id' element={<Postdetails/>} />
    </Routes>
    </div>
    </BrowserRouter>
   </div>
  );
}

export default App;
