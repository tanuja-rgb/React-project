import { useContext } from "react";
import { Link,Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import light from '../img/contrast_circle_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';
import dark from '../img/brightness_2_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg';

function Nav(){
    
    const {theme,setTheme} = useContext(ThemeContext);
    console.log(theme);

    let mystyle = {};
    if(theme === 'light'){
      mystyle = {
        background:'#3498db',
        color:'#111010ff'
      }
    }
    else{
      mystyle = {
        background:'#9b59b6',
        color:'#f4f0f0ff'
      }
    }
    return(<>
    <header>
        {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark"> */}
        <nav className="navbar navbar-expand-sm " style={mystyle}>
   <div className="container-fluid">
     <Link className="navbar-brand rounded circle" to={'#'}>Logo</Link>
   
    <ul className="nav nav-pills">
  <li className="nav-item">
    <Link className="nav-link active" to="/home">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/contact">Contactus</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="product">Product1</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="services">Services</Link>
  </li>
   <li className="nav-item">
    <Link className="nav-link" to="about">About</Link>
  </li>
  <li>
    {
      theme ==='light'?
      (
        <img src={dark} onClick={()=>setTheme('dark')}/>
      )
      :
      (
        <img src={light} onClick={()=>setTheme('light')}/>
      )
    }
  </li>
</ul>
</div>
 </nav>
    </header>
    <main>
        <Outlet/>
    </main>
     
    </>)
}
export default Nav; //npm i react-router-dom