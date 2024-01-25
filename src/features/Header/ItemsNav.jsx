import enFlag from '@assets/flags/gb-eng.svg'
import esFlag from '@assets/flags/es.svg'
import Changelanguage from "@scripts/getlanguage.jsx";

const ItemsNav = () => 
{
    
    return (
        <>
            <li className="text-white text-xl mobile:py-1">
                <a href="#AboutMe" data-section="navbar" data-value="first-item">Sobre Mi</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Experience" data-section="navbar" data-value="second-item">Experiencia</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Projects" data-section="navbar" data-value="third-item">Proyectos</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Contact" data-section="navbar" data-value="fourth-item">Contacto</a>
            </li>
            <li className="tablet:mt-4 w-[70px] flex justify-between items-center">
                <div data-flaglang="es" onClick={(e) => Changelanguage(e.target.parentElement.dataset.flaglang)}>
                    <img width="30" src={esFlag}/>
                </div>
                <div data-flaglang="en" onClick={(e) => Changelanguage(e.target.parentElement.dataset.flaglang)}>
                    <img width="30" src={enFlag}/>
                </div>
            </li>
        </>
    )
}

export default ItemsNav;