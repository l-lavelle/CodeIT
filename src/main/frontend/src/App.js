import './App.css';

import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


 return (
    <div className="App">
        <Outlet />
     </div>
  )
}

export default App;

