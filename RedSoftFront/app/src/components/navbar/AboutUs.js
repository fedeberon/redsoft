import React from 'react';
import Header from "../header/Header";
import FooterComponent from "../home/FooterComponent";

const AboutUs = () => {

        return (
            <>
            <Header/> 
            <div className="page nosotros">
                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-10">
                            <img src="img/nosotros.jpg" alt="Nuestra empresa" className="foto"/>
                            <div className="row recuadro">
                                <div className="col-sm-12">
                                    <h1>Sobre La Red</h1>
                                    <h3>Historia</h3>
                                </div>
                                <div className="col-sm-6">
                                    <p>
                                        La Red es un emprendimiento local que nace en el año 2003, como cibercafé y 
                                        venta de hardware, apuntando a un segmento en crecimiento con un concepto innovador
                                        y excelente calidad de servicio, por un período de ocho años.<br/>
                                        Paralelamente a partir del año 2006, comenzamos a desarrollar nuestra red propia,
                                        incorporando tecnología actual para la época e incorporando desarrollos propios con
                                        la finalidad de prestar servicio de internet al hogar. Eran nuestro primeros pasos.
                                        En el año 2011, dimos por cerrada la etapa de cibercafé y nos abocamos de lleno a la 
                                        venta de hardware e insumos y a seguir desarrollando nuestra red que estaba en pleno
                                        crecimiento, incorporando nuevas tecnologías como la fibra óptica para nuestro enlace
                                        principal. 
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <p>
                                        En el año 2017 luego de mucho esperar obtuvimos nuestra licencia expedida por la ENACOM
                                        para poder ser ISP registrado, y en ese mismo período obtuvimos nuestro ASN (sistema 
                                        autónomo) que nos definía como red propia frente a internet.<br/>
                                        En la actualidad seguimos trabajando e invirtiendo capital con la finalidad de mantener
                                        nuestra calidad de servicio, en épocas donde la demanda de conectividad se ha acrecentado
                                        exponencialmente.<br/><br/>
                                        <strong>Compromiso y calidad de servicio, como estandárte de nuestra empresa, siempre al 
                                            lado de nuestros clientes atentos a sus demandas con vocación de servicio.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent/>
            </>
        );
}

export default AboutUs;
