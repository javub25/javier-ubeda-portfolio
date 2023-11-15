import enFlag from '../../assets/img/flags/gb-eng.svg'
import esFlag from '../../assets/img/flags/es.svg'
import Changelanguage from "../../scripts/getlanguage.jsx";

const ItemsNav = () => 
{
    return (
        <>
            <li className="text-white text-xl mobile:py-1" data-section="navbar" data-value="first-item">
                <a href="#AboutMe">Sobre Mi</a>
            </li>
            <li className="text-white text-xl mobile:py-1" data-section="navbar" data-value="second-item">
                <a href="#Experience">Experiencia</a>
            </li>
            <li className="text-white text-xl mobile:py-1" data-section="navbar" data-value="third-item">
                <a href="#Projects">Proyectos</a>
            </li>
            <li className="text-white text-xl mobile:py-1" data-section="navbar" data-value="fourth-item">
                <a href="#Contact">Contacto</a>
            </li>
            <li className="tablet:mt-4 w-[70px] flex justify-between items-center">
                <div data-flaglang="es" onClick={(e) => Changelanguage(e)}>
                    <img width="30" src={esFlag}/>
                </div>
                <div data-flaglang="en" onClick={(e) => Changelanguage(e)}>
                    <img width="30" src={enFlag}/>
                </div>
            </li>
        </>
    )
}

export default ItemsNav;