import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import ItemsNav from './ItemsNav.jsx'

const Header = () => 
{
    const [showNav, setshowNav] = React.useState(false);
    const [iconNav, setIconNav] = React.useState(faBars);


    const handleNavMob = () => 
    {
        setshowNav(oldState => !oldState);
        setIconNav(showNav ? faBars : faXmark);
    }
    return (
        <header className="mobile:p-0 p-5 sticky top-0 w-full mx-auto z-10">
            <nav className="mx-auto bg-[#0057b7] dark:bg-blue-600 rounded-md">
                <ul className="p-6 mobile:hidden flex flex-wrap items-center justify-between">
                    <ItemsNav />
                </ul>                
            </nav>
            

            <nav className={`mobile:block bg-[#0057b7] dark:bg-blue-600`}>
                <FontAwesomeIcon icon={iconNav} className="menu-btn hidden text-white text-3xl mobile:block p-6" 
                    onClick={handleNavMob}/>

                    {showNav && 
                        <ul className="menu text-left p-6 mobile:block">
                            <ItemsNav />
                        </ul>      
                    }
            </nav>
        </header>
    )
}

export default Header;

