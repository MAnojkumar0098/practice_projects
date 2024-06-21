import { useState } from "react"
import './sidebar.css'
import Home from "./home";
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";

export function Sidebar()
{
    let [stat,setStat]=useState(false);
    function fn()
    {
        setStat(!stat);
    }
    
    return(<>
    <div onClick={fn}>
    <div className='nav'><img src='menu-bar.png' alt='burger' onClick={fn}/>
    <div className='nav-elts'><Link to='/home'>Home</Link></div>
    <div className="nav-elts">About</div>
    <div className="nav-elts">Contact</div>
    </div>
    <CSSTransition
      in={stat} 
      timeout={300}
      classNames="sidebar-primary"
    ><>
    {stat&&(<div className='sidebar'><div className='side-elts'>Inbox</div>
    <div className="side-elts">Personal</div>
    <div className="side-elts">Workout</div>
    </div>)}
    </>
    </CSSTransition>
    </div>
    </>)
}