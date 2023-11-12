import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


const Experience = () => 
{
    return (
        <>
            <div className="tablet:w-full text-left px-4 mt-32">
                <header className="w-[210px] flex items-center mx-auto mobile:mx-0 justify-between">
                    <FontAwesomeIcon icon={faBriefcase} className="text-xl text-white mt-2" />
                    <h1 id="Experience" className="text-4xl text-white">Experiencia</h1>
                </header>

                <section className="flex justify-center tablet:justify-start items-center flex-wrap w-full" style={{paddingTop: '11px'}}>
                    <div className="pr-4">
                        <header className="mt-4">
                            <h1 className="text-white text-2xl ">Maquetador Web</h1>
                            <h2 className="text-white">abr. 2015 - jul. 2015</h2>
                        </header>
                        <section className="mt-2.5">
                            <p className="text-white">Desarrollo con <b>WordPress</b><br/>
                                eCommerce con <b>WooCommerce</b>
                            </p>
                        </section>
                    </div>
                    <div className="pr-4">
                        <header className="mt-4">
                            <h1 className="text-white text-2xl">Analista Ciberseguridad Junior</h1>
                            <h2 className="text-white">nov. 2020 - jul. 2021</h2>
                        </header>
                        <section className="mt-2.5">
                            <p className="text-white">Visualización de alertas con <b>Grafana</b><br/>
                                Despliegue de contenedores con <b>Docker</b></p>
                        </section>
                    </div>
                    <div>
                        <header className="mt-4">
                            <h1 className="text-white text-2xl">Desarrollador web</h1>
                            <h2 className="text-white">oct.2021 - actualidad</h2>
                        </header>
                        <section className="mt-2.5">
                            <p className="text-white">
                                Desarrollo Frontend con <b>React</b>.
                                <br/>
                                Uso de control de versiones <b>GIT</b>.
                            </p>
                        </section>
                    </div>
                </section>
            </div>    
        </>
    )
}
export default Experience;