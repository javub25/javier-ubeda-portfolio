const Experience = () => 
{
    return (
        <>
            <div className="tablet:w-full text-left px-6 mt-32">
                <header className="w-[210px] flex items-center mobile:mx-0 justify-between">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-xl text-white mt-2 icon icon-tabler icon-tabler-briefcase" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
                    <h1 id="Experience" className="text-4xl text-white" data-section="navbar" data-value="second-item">Experiencia</h1>
                </header>
                <section>
                    <ol className="experience relative border-s border-gray-200 dark:border-gray-300 mt-12">                  
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-100"></div>
                                <time className="block mb-2 text-sm font-normal leading-none text-white dark:text-white" data-section="experience" data-value="last-job-date">oct. 2021 - actualidad</time>
                                <h3 className="text-lg font-semibold text-white pb-[0.5rem]" data-section="experience" data-value="last-job-title">Desarrollador Frontend</h3>
                                    <ul className="list-disc px-4">
                                        <li className="text-base font-normal text-white dark:text-white">
                                            HTML5
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            CSS3
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            React JS
                                        </li>
                                    </ul>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-100"></div>
                                <time className="block mb-2 text-sm font-normal leading-none text-white dark:text-white" data-section="experience" data-value="second-job-date">nov. 2020 - jul. 2021</time>
                                <h3 className="text-lg font-semibold text-white pb-[0.5rem]" data-section="experience" data-value="second-job-title">Analista de Ciberseguridad</h3>
                                <p className="text-base font-normal text-white dark:text-white pb-[0.5rem]" data-section="experience" data-value="second-job-task">Monitoreo de alertas de seguridad de sistemas heterogéneos.</p>
                                    <ul className="list-disc px-4">
                                        <li className="text-base font-normal text-white dark:text-white">
                                            Security Onion
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            Grafana
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            Elastic Search
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            Docker
                                        </li>
                                    </ul>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-300 dark:bg-gray-100"></div>
                                <time className="block mb-2 text-sm font-normal leading-none text-white dark:text-white" data-section="experience" data-value="first-job-date">abr. 2015 - jul. 2015</time>
                                <h3 className="text-lg font-semibold text-white pb-[0.5rem]" data-section="experience" data-value="first-job-title">Maquetador Web</h3>
                                <p className="text-base font-normal text-white dark:text-white pb-[0.5rem]" style={{textWrap:"balance"}} data-section="experience" data-value="first-job-task">Creación de landing empresarial y gestión de ecommerce.</p>
                                    <ul className="list-disc px-4">
                                        <li className="text-base font-normal text-white dark:text-white">
                                            WordPress
                                        </li>
                                        <li className="text-base font-normal text-white dark:text-white">
                                            WooCommerce
                                        </li>
                                    </ul>
                            </li>
                    </ol>   
                </section>
            </div>    
        </>
    )
}
export default Experience;