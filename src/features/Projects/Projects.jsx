import React from 'react';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe } from '@fortawesome/free-solid-svg-icons'
import {faHandPointer} from '@fortawesome/free-regular-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import TastyWorld from '../../assets/img/projects/TastyWorld.png'
import Tenzies from '../../assets/img/projects/tenzies.png'
import TodoList from '../../assets/img/projects/todoList.png'


const Projects = () => 
{
    const [showdetails, setshowdetails] = React.useState([{
        TastyWorld: false,
        Tenzies: false,
        TodoList: false
    }]);

    const showDetails = (e) => 
    {
        const clickedValue = e.currentTarget.getAttribute("value");

        setshowdetails(oldState => 
            oldState.map(item => ({
                ...item,
                [clickedValue]: !item[clickedValue]
            }
        )))
    }
    return (
        <>
            <div className="tablet:w-full text-left mx-auto px-4 mt-32">
                <header className="w-[210px] flex items-center mx-auto mobile:mx-0 justify-between ">
                    <FontAwesomeIcon icon={faCode} className="text-xl text-white mt-2" />
                    <h1 id="Projects" className="text-4xl text-white">Proyectos&nbsp;&nbsp;</h1>
                </header>

                <section className="grid tablet:w-full mt-4" style={{paddingTop: '11px', gridTemplateColumns: 'repeat(auto-fit,minmax(min(30rem,100%),1fr)'}}>
                    <div value={"TastyWorld"} className="pt-4 pr-4 tablet:pr-0" onClick={(e) => showDetails(e)}>
                        <div className="relative" style={{height: '500px'}}>
                            <img src={TastyWorld} className="w-full rounded-xl" style={{objectFit: 'cover', height: '100%'}}/>
                            <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-white absolute top-4 right-4 rounded-md bg-blue-500 p-2"/>

                            <div className={`h-full px-4 rounded-xl bg-blue-500 absolute bottom-0 w-full ${showdetails[0].TastyWorld ? 'block' : 'hidden' }`} 
                            style={{paddingTop: '50px'}}>
                                <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-blue-500 absolute top-4 right-4 rounded-md bg-white p-2"/>

                                <header className="text-center pt-4">
                                    <h1 className="text-3xl text-white">TastyWorld</h1>
                                </header>
                                <section className="text-white mt-4">
                                    <p>Aplicación Web diseñada para consultar y guardar recetas internacionales.</p>
                                    <div className="flex w-full justify-between flex-wrap mt-4">
                                        <span className="bg-black px-4 text-white tablet:mt-4">MealDB Api</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">NodeJS</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">Tailwindcss</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">React</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">Animate.css</span>
                                        <span className="bg-black px-4 text-white mt-4">LocalStorage</span>
                                    </div>
                                </section>
                                <footer className="w-[80px] flex justify-between mt-8 pb-4">
                                    <a href="https://github.com/javub25/Recipes" title="GitHub TastyWorld" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} className="text-3xl text-white"/>
                                    </a>
                                    <a href="https://mealdbproject13.netlify.app/" title="Website" target="_blank">
                                        <FontAwesomeIcon icon={faGlobe} className="text-3xl text-white"/>
                                    </a>
                                </footer>
                            </div>
                        </div> 
                    </div>
                    <div value={"Tenzies"} className="pr-4 tablet:pr-0 pt-4" onClick={showDetails}>
                        <div className="relative" style={{height: '500px'}} >
                            <img src={Tenzies} className="w-full rounded-xl" style={{objectFit: 'cover', height: '100%'}}/>
                            <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-white absolute top-4 right-4 rounded-md bg-blue-500 p-2"/>

                            <div className={`h-full px-4 rounded-xl bg-blue-500 absolute bottom-0 w-full ${showdetails[0].Tenzies ? 'block' : 'hidden' }`}
                            style={{paddingTop: '50px'}}>
                                <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-blue-500 absolute top-4 right-4 rounded-md bg-white p-2"/>

                                <header className="text-center pt-4">
                                    <h1 className="text-3xl text-white">Tenzies</h1>
                                </header>
                                <section className="text-white mt-4">
                                    <p>Juego diseñado para seleccionar 10 números que sean iguales.
                                      Tienes tantas oportunidades como necesites hasta encontrarlos.
                                    </p>
                                    <div className="flex w-full justify-between flex-wrap mt-4">
                                        <span className="bg-black px-4 text-white tablet:mt-4">NodeJS</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">React</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">Tailwindcss</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">Animate.css</span>
                                        <span className="bg-black px-4 text-white tablet:mt-4">LocalStorage</span>
                                    </div>
                                </section>
                                <footer className="w-[80px] flex justify-between mt-8 pb-4">
                                    <a href="https://github.com/javub25/Tenzies" title="GitHub Tenzies" target="_blank">
                                        <FontAwesomeIcon icon={faGithub} className="text-3xl text-white"/>
                                    </a>
                                    <a href="https://tenziesproject2.netlify.app/" title="Website" target="_blank">
                                        <FontAwesomeIcon icon={faGlobe} className="text-3xl text-white"/>
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </div>
                    <div value={"TodoList"} className="pt-4 pr-4 tablet:pr-0" onClick={showDetails}>
                        <div className="relative" style={{height: '500px'}}>
                            <img src={TodoList} className="w-full rounded-xl"  style={{objectFit: 'cover', height: '100%'}}/>
                            <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-white absolute top-4 right-4 rounded-md bg-blue-500 p-2"/>
                            
                            <div className={`h-full px-4 rounded-xl bg-blue-500 absolute bottom-0 w-full ${showdetails[0].TodoList ? 'block' : 'hidden' }`}
                            style={{paddingTop: '50px'}}>
                                <FontAwesomeIcon icon={faHandPointer} className="text-3xl text-blue-500 absolute top-4 right-4 rounded-md bg-white p-2"/>

                                <header className="text-center pt-4">
                                        <h1 className="text-3xl text-white">TodoList</h1>
                                </header>
                                <section className="text-white mt-4">
                                        <p>Aplicación Web diseñada para guardar y consultar una lista de tareas.</p>
                                        <div className="flex w-full justify-between flex-wrap mt-4">
                                            <span className="bg-black px-4 text-white tablet:mt-4">NodeJS</span>
                                            <span className="bg-black px-4 text-white tablet:mt-4">React</span>
                                            <span className="bg-black px-4 text-white tablet:mt-4">Animista CSS</span>
                                            <span className="bg-black px-4 text-white tablet:mt-4">Animate.css</span>
                                            <span className="bg-black px-4 text-white tablet:mt-4">LocalStorage</span>
                                        </div>
                                </section>
                                <footer className="w-[80px] flex justify-between mt-8 pb-4">
                                        <a href="https://github.com/javub25/TodoList" title="GitHub TodoList" target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="text-3xl text-white"/>
                                        </a>
                                        <a href="https://todo-list-javi.netlify.app/" title="Website" target="_blank">
                                            <FontAwesomeIcon icon={faGlobe} className="text-3xl text-white"/>
                                        </a>
                                </footer>
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        </>
    )
}
export default Projects;