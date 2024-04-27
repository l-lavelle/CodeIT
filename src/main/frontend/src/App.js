import './App.css';
import NavigationBar from './components/nav/NavigationBar.jsx'
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


 return (
    <div className="App">
        <NavigationBar/>
        <Outlet />
     </div>
  )
}

export default App;

