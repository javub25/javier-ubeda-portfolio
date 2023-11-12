import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import ItemsNav from './ItemsNav.jsx'
import 'animate.css';

const Header = () => 
{
    const [showNav, setshowNav] = React.useState(false);
    const [iconNav, setIconNav] = React.useState(faBars);

    const handleNavMob = () => 
    {
        setshowNav(oldState => !oldState)

        if(showNav) {
            setIconNav(faBars);
        } 
        else setIconNav(faXmark);
    }

    return (
        <header>
            <nav className="tablet:w-full mx-auto bg-blue-700 rounded-md">
                <ul className="p-8 mobile:hidden flex flex-wrap items-center justify-between">
                    <ItemsNav />
                </ul>                
            </nav>

            <nav className={`mobile:block ${iconNav === faXmark ? 'bg-blue-700 animate__animated animate__fadeInDown': ''}`}>
                <FontAwesomeIcon icon={iconNav} className="hidden text-white p-8 text-3xl mobile:block" 
                    onClick={handleNavMob}/>

                    {showNav && 
                        <ul className="text-left mt-2 p-8 hidden mobile:block">
                            <ItemsNav />
                        </ul>
                    }
            </nav>            
        </header>
    )
}

export default Header;

