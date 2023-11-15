import aboutMe from '../../assets/img/aboutMe/aboutMe-photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'

const AboutMe = () => 
{
    return (
        <>
            <div className="px-4 mt-20 tablet:w-full mobile:mt-0 mobile:flex-col mx-auto w-[800px] flex items-center justify-between">
                <div>
                    <img src={aboutMe} width="900" alt="javi-img"
                        className="mobile:w-60 mobile:mt-12 rounded-xl"/>
                </div>
                <div className="px-4 mobile:px-0">
                    <header className="mobile:pt-8">
                        <h1 id="AboutMe" className="text-left text-4xl text-white">Javier Úbeda</h1>
                        <h2 className="text-left text-2xl text-white" data-section="profile" data-value="rol">Frontend Developer</h2>
                    </header>
                    <section className="mt-4">
                        <p className="text-white text-left" data-section="profile" data-value="description">
                            Soy una persona que ve el mundo de desarrollo web como único e innovador.
                            Me encanta dedicarle tiempo para ir mejorando en este sector.
                            Si puedes pensarlo puedes programarlo!
                        </p>
                    </section>

                    <footer className="mt-4 w-[160px] flex justify-between text-left">
                        <FontAwesomeIcon icon={faHtml5} className="text-white text-3xl"/>
                        <FontAwesomeIcon icon={faCss3Alt} className="text-white text-3xl"/>
                        <FontAwesomeIcon icon={faJs} className="text-white text-3xl"/>
                        <FontAwesomeIcon icon={faReact} className="text-white text-3xl" />
                    </footer>
                </div>               
            </div>
        </>
    )
}

export default AboutMe;