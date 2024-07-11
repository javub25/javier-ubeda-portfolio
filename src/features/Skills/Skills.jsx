import Git from '@assets/git-original.svg'
import JavaScript from '@assets/javascript-plain.svg'
import React from '@assets/react-original.svg'
import TailwindCSS from '@assets/tailwindcss-original.svg'
import ViteJs from '@assets/vitejs-original.svg'
import HTML from '@assets/html5-plain.svg'
import { Carousel } from 'flowbite-react'

const Skills = () => 
{
    return (
        <>
            <div className="tablet:w-full text-left px-6 mt-32">
                <header className="flex items-center mobile:mx-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
                        &nbsp;&nbsp;<h1 id="Skills" className="text-4xl text-white" data-section="navbar" data-value="five-item">Habilidades</h1>
                </header>

                <section className="mx-auto h-96 mobile:w-full w-1/2">
                    <Carousel>
                        <img src={HTML} alt="HTML5" className="w-44 h-44"/>
                        <img src={TailwindCSS} alt="TailwindCSS" className="w-44 h-44"/>
                        <img src={JavaScript} alt="JS" className="w-44 h-44"/>
                        <img src={React} alt="React" className="w-44 h-44"/>
                        <img src={ViteJs} alt="Vite" className="w-44 h-44"/>
                        <img src={Git} alt="Git" className="w-44 h-44"/>
                    </Carousel>
                </section>
            </div> 
        </>
    )
}
export default Skills;