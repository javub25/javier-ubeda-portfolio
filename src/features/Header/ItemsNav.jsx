import enFlag from '../../assets/img/flags/gb-eng.svg'
import esFlag from '../../assets/img/flags/es.svg'

const ItemsNav = () => 
{
    return (
        <>
            <li className="text-white text-xl mobile:py-1">
                <a href="#AboutMe">Sobre Mi</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Experience">Experiencia</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Projects">Proyectos</a>
            </li>
            <li className="text-white text-xl mobile:py-1">
                <a href="#Contact">Contacto</a>
            </li>
            <li className="tablet:mt-4 w-[70px] flex justify-between items-center">
                <img width="30" src={esFlag}/>
                <img width="30" src={enFlag}/>
            </li>
        </>
    )
}

export default ItemsNav;