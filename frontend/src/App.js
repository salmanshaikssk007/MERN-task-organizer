import { Link, Route } from 'react-router-dom';
import Styles from './App.module.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import Taskpage from './pages/Taskpage';

function App() {
  
  return (
    <div className={Styles.App}>
      <Routes>
        <Route path='/'element={<Homepage />} />
        <Route path='/loginpage' element={<Loginpage />} />
        <Route path='/homepage/taskpage' element={<Taskpage />} />
      </Routes> 
      <Link to='/loginpage'>Login</Link>
      <Link ></Link>
    </div>
  );

}

export default App;
