import aboutMe from '@assets/aboutMe/aboutMe-photo.jpg'

const AboutMe = () => 
{
    return (
        <>
            
            <div className="px-6 mx-auto mt-20 w-full">
                <div>
                    <img src={aboutMe} alt="Imagen de perfil" 
                        className="w-60 mobile:mt-12 rounded-xl mx-auto"/>
                </div>
                <div>
                    <header className="pt-8" id="AboutMe">
                        <h1 className="text-left text-4xl text-white">Javier Úbeda</h1>
                        <h2 className="text-left text-2xl text-white" data-section="profile" data-value="rol">Frontend Developer</h2>
                    </header>
                    <section className="mt-4">
                        <p className="text-white text-left mb-4" data-section="profile" data-value="description">
                            Me llamo Javier, aunque las personas que me conocen me llaman Javi.
                            Empecé estudiando un Grado Superior de Administración de Sistemas Informáticos en Redes.
                        </p>
                        <p className="text-white text-left mb-4" data-section="profile" data-value="cybersecurity">
                            Después de pasar por una empresa de ciberseguridad, cambie a la rama del desarrollo web como frontend
                            dentro de la empresa Ogilvy.
                        </p>
                        <p className="text-white text-left mb-4" data-section="profile" data-value="react">
                            Durante mi experiencia laboral, he estado formándome en la librería React de JavaScript, pudiendo hacer mis primeros proyectos personales.
                        </p>
                        <p className="text-white text-left" data-section="profile" data-value="goal">
                            Mi objetivo es poder ofrecer una mejor experiencia de usuario, dando una mejor optimización de rendimiento y tiempo de respuesta.
                        </p>
                    </section>

                    <footer id="Contact" className="grid grid-cols-4 mobile:grid-cols-2 gap-4 items-center mt-8 tablet:w-full w-[580px]">
                        <a href="https://www.linkedin.com/in/javierubedarayo/" className="bg-blue-700 dark:bg-blue-600 py-2 px-4 block text-white rounded-md flex shadow-lg transition shadow-black/20 hover:scale-110" title="Linkedin" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin text-white" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
                            LinkedIn
                        </a>
                        <a href="https://github.com/javub25" className="bg-blue-700 dark:bg-blue-600 py-2 px-4 block text-white rounded-md flex shadow-lg transition shadow-black/20 hover:scale-110" title="GitHub" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github text-white" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
                            GitHub
                        </a>
                        <a href="mailto:javuberay@outlook.com" className="bg-blue-700 dark:bg-blue-600 py-2 px-4 block text-white rounded-md flex shadow-lg transition shadow-black/20 hover:scale-110" title="Mail" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
                            Mail
                        </a>
                        <a href="tel:+34663290820" className="bg-blue-700 dark:bg-blue-600 py-2 px-4 block text-white rounded-md flex shadow-lg transition shadow-black/20 hover:scale-110" title="Teléfono" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="35" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>
                            Teléfono
                        </a>
                    </footer>
                </div>               
            </div>
        </>
    )
}

export default AboutMe;