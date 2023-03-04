import logo from './logo.svg';
import './App.css';
import Employee from './component/employee';
import NavBar from './nav/NavBar';
import { useState } from 'react';
import Petrol from './component/petrol';
import Language from './component/language';


function App() {
  const [navindex, setNavIndex]=useState(0)
  const showpage=()=>{
    switch (navindex){
      case 0:
        return <Employee />
        case 1:
          return <Petrol />
    }
  }
  return (
    <div className="container">
    
    <NavBar updateNav={setNavIndex} />
    <Language />
{showpage()}

    </div>
  );
}

export default App;
