import React from "react";
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Addstudent from './routes/Addstudent'
import Viewstudent from './routes/Viewstudent'
import Deletestudent from "./routes/Deletestudent";
import Notfound from "./routes/Notfound";
import './App.css'
const App =() =>{
 const img1 ="https://simg.nicepng.com/png/small/16-163438_circle-clipart-sky-blue-clip-art-blue-circle.png";
  return(
    <BrowserRouter >
    <nav >
      <ul className="link">
        
        <li><img src={img1} className="img1"/> <span className="header">Student Registration System </span> </li>
        <li> <Link to="/"><button className="btn5"> Addstudent </button></Link></li>
        <li> <Link to="/view"> <button className="btn5"> Viewstudent </button>   </Link></li>
        <li> <Link to="/del">  <button className="btn5">Deletestudent </button>  </Link></li>
        </ul>
   
      </nav>
      <hr className="lines" />
   
    <Switch>
      <Route path="/" component={Addstudent} exact/>
      <Route path="/view" component={Viewstudent}/>
      <Route path ="/del" component={Deletestudent}/>
      <Route component={Notfound} />
    </Switch>
  
    </BrowserRouter>
  )
}

export default App;
