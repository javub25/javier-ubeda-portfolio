import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'


const Contact = () => 
{
    return (
        <div className="tablet:w-full text-left px-4 mt-32">
                <header className="w-[210px] flex items-center mx-auto mobile:mx-0 justify-between">
                    <FontAwesomeIcon icon={faAddressBook} className="text-xl text-white mt-2" />
                    <h1 id="Contact" className="text-4xl text-white">Contacto&nbsp;&nbsp;&nbsp;</h1>
                </header>

                <section className="mt-8 grid contactCols place-items-center mobile:gap-4" style={{paddingTop: '11px', justifyContent: 'center'} }>
                    <div>
                        <FontAwesomeIcon icon={faPhone} className="text-4xl text-white" />
                        <span className="text-white">&nbsp;&nbsp;+34 663290820</span>
                    </div>
                    <a href="https://www.linkedin.com/in/javierubedarayo/" title="Linkedin" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="text-4xl text-white" />
                    </a>
                    <a href="https://github.com/javub25" title="Github" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="text-4xl text-white" />
                    </a>
                    <a href="mailto:javuberay@outlook.com" title="Email" target="_blank">
                        <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-white" />
                    </a>
                </section>
        </div>  
    )
}

export default Contact;