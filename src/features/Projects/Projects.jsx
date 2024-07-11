import TastyWorld from '@assets/projects/TastyWorld_so.webp'
import Tenzies from '@assets/projects/Tenzies_so.webp'
import ShoppingApp from '@assets/projects/Shopping_so.webp';


const Projects = () => 
{
    return (
        <>
            <div className="tablet:w-full text-left mx-auto px-6 mt-32">
                <header className="w-[210px] flex items-center mobile:mx-0 justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-xl text-white mt-2 icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                    <h1 id="Projects" className="text-4xl text-white" data-section="projects" data-value="title">Proyectos&nbsp;&nbsp;</h1>
                </header>

                <section className="grid gap-x-6 grid-cols-2 tablet:grid-cols-1 mt-12 items-center" style={{paddingTop: '11px'}}>
                    <article className="relative w-full h-80 z-0 card mb-8" style={{transform:"none"}}>
                        <figure className="w-full h-full text-center absolute front rounded-2xl overflow-hidden shadow-xl border">
                            <img className="w-full h-full object-cover" src={TastyWorld} alt="Menu item"/>
                        </figure>
                        <div className="w-full h-full absolute back bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-5 text-black">
                            <header>
                                <h1 className="text-2xl font-medium text-center">TastyWorld</h1>
                            </header>
                            <section>
                                <p className="text-center mt-2" data-section="projects" data-value="first-project-description">
                                ¡Consulta y guarda recetas de diferentes países para consultarlas en cualquier momento!
                                </p>
                                    <div className="flex justify-between items-center w-[70px] mx-auto mt-4">
                                        <h2>React</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                    </div>
                                    <div className="flex justify-between items-center w-[120px] mx-auto mt-4">
                                        <h2>Tailwind CSS</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tailwind" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
                                    </div>
                            </section>
                            <footer className="flex mt-8 mx-auto w-[200px] justify-between items-center">
                                <a href="https://mealdbproject13.netlify.app/" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300
                                    rounded-full
                                    inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4
                                    text-xs md:text-base
                                    transition
                                    hover:scale-110 hover:bg-white/10">  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path> <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> </svg>
                                    Demo
                                </a>
                                <a href="https://github.com/javub25/Recipes" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300
                                    rounded-full
                                    inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4
                                    text-xs md:text-base
                                    transition
                                    hover:scale-110 hover:bg-white/10">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                        </svg>
                                    <span className="m-0 p-0" data-section="projects" data-value="project-codebtn">Código</span>
                                </a>
                            </footer>
                        </div>
                    </article>
                    <article className="relative w-full h-80 z-0 card mb-8" style={{transform:"none"}}>
                        <figure className="w-full h-full text-center absolute front rounded-2xl overflow-hidden shadow-xl border">
                            <img className="w-full h-full object-cover" src={Tenzies} alt="Menu item"/>
                        </figure>
                        <div className="w-full h-full absolute back bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-5 text-black">
                            <header>
                                <h1 className="text-2xl font-medium text-center">Tenzies</h1>
                            </header>
                            <section>
                                <p className="text-center mt-2" data-section="projects" data-value="second-project-description">
                                ¡Encuentra y selecciona 10 números iguales, el juego mostrará un confetti cuando el usuario haya ganado!
                                </p>
                                    <div className="flex justify-between items-center w-[70px] mx-auto mt-4">
                                        <h2>React</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                    </div>
                                    <div className="flex justify-between items-center w-[120px] mx-auto mt-4">
                                        <h2>Tailwind CSS</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tailwind" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" /></svg>
                                    </div>
                                
                            </section>
                            <footer className="flex mt-8 mx-auto w-[200px] justify-between items-center">
                                <a href="https://tenziesproject2.netlify.app/" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4 text-xs md:text-base
                                    transition hover:scale-110 hover:bg-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> 
                                            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> 
                                            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                                            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> 
                                            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> 
                                            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> 
                                            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> 
                                            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                        </svg>
                                    Demo
                                </a>
                                <a href="https://github.com/javub25/Tenzies" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300
                                    rounded-full
                                    inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4
                                    text-xs md:text-base
                                    transition
                                    hover:scale-110 hover:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                    <span data-section="projects" data-value="project-codebtn">Código</span>
                                </a>
                            </footer>
                        </div>
                    </article>
                    <article className="relative w-full h-80 z-0 card mb-8" style={{transform:"none"}}>
                        <figure className="w-full h-full text-center absolute front rounded-2xl overflow-hidden shadow-xl border">
                            <img className="w-full h-full object-cover" src={ShoppingApp} alt="Menu item"/>
                        </figure>
                        <div className="w-full h-full absolute back bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-5 text-black">
                            <header>
                                <h1 className="text-2xl font-medium text-center">Shopping App</h1>
                            </header>
                            <section>
                                <p className="text-center mt-2" data-section="projects" data-value="three-project-description">
                                Ecommerce donde los usuarios pueden filtrar productos por precio o categoría, ver historial de compras y dejar valoraciones.
                                </p>
                                    <div className="flex justify-between items-center w-[70px] mx-auto mt-4">
                                        <h2>React</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-react" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
                                    </div>
                                    
                                    <div className="flex justify-between items-center w-[110px] mx-auto mt-4">
                                        <h2>Strapi CMS</h2>
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-rocket"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /></svg>
                                    </div>
                            </section>
                            <footer className="flex mt-8 mx-auto w-[200px] justify-between items-center">
                                <a href="https://shopping-react-strapi.netlify.app/" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300 rounded-full inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4 text-xs md:text-base
                                    transition hover:scale-110 hover:bg-white/10">
                                        <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> 
                                            <path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"></path> 
                                            <path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4"></path>
                                            <path d="M12.5 3a16.989 16.989 0 0 1 1.828 4"></path> 
                                            <path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"></path> 
                                            <path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4"></path> 
                                            <path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4"></path> 
                                            <path d="M2 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                            <path d="M17 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                            <path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4"></path> 
                                        </svg>
                                    Demo
                                </a>
                                <a href="https://github.com/javub25/shopping-frontend" target="_blank" className="bg-white/5
                                    border dark:border-white/10 border-gray-300
                                    rounded-full
                                    inline-flex justify-center items-center gap-x-2
                                    py-1 px-2 md:py-2 md:px-4
                                    text-xs md:text-base
                                    transition
                                    hover:scale-110 hover:bg-white/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                    </svg>
                                    <span data-section="projects" data-value="project-codebtn">Código</span>
                                </a>
                            </footer>
                        </div>
                    </article>
                </section>               
            </div>    
        </>
    )
}
export default Projects;