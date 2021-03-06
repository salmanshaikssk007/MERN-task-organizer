import { Link, Route , Routes } from 'react-router-dom';
import Styles from './App.module.css';
import Homepage from './pages/Homepage';
import Roompage from './pages/Roompage';
import Taskpage from './pages/Taskpage';

function App() {
  
  return (
    <div className={Styles.App}>
      
        <Routes>
          <Route path='/'element={<Homepage />} />
          <Route path='/rooms' element={<Roompage/>} />
          <Route path='/tasks' element={<Taskpage />} />
        </Routes> 
      
    </div>
  );

}

export default App;
