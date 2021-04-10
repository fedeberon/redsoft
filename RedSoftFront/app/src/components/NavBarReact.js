import React, {Fragment} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

const NavBarReact = () => {

    const history = useHistory();


        return (
            <Fragment>
                <Navbar expand="lg" className="navbar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav className="linklr"><Link
                                to={"/"}>INICIO</Link></Nav>
                            <Nav className="linklr"><Link
                                to={"/services"}>SERVICIOS</Link></Nav>
                            <NavDropdown style={{marginTop: "-1px", padding: 0}} className="linklr navbar-nav" title="PRODUCTOS">
                                <Row className="row01">
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>PC e Impresión</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=impresora"}>
                                            Impresoras</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=notebook"}>Notebooks</Link></li><br/>
                                        
                                        <span><h5>Conectividad</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=cables"}>Cables</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=router"}>Router</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=switch"}>Switch</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=wireless"}>Wireless</Link></li>
                                        
                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Componentes de PC</h5></span>
                                        <NavDropdown.Divider/>
                                        <ul>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=procesador"}>Procesadores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=disco"}>Discos</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=monitor"}>Monitores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=mother"}>Mothers</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=ddr%20ram"}>Memorias RAM</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=fuente"}>Fuentes</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=gabinete"}>Gabinetes</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=lector"}>Lectoras</Link></li>
                                        {/* <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=refrig"}>Refrigeración</Link></li> */}
                                        </ul>
                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Periféricos</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=teclados"}>Teclados</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=pad"}>Pads</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=mouse"}>Mouse's</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=auricular"}>Auriculares</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=adaptador"}>Adaptadores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=kit"}>Kit's</Link></li>
                                        

                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Audio y Video</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=parlante"}>Parlantes</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=monitor"}>Monitores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=video"}>Placas de Video</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=sonido"}>Placas de Sonido</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=microfono"}>Micrófonos</Link></li>
                                    </Col>

                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                    <span><h5>Varios</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=consola"}>Consolas</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=estabilizador"}>Estabilizadores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=pendrive"}>PenDrives</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=sd"}>Memorias SD</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=celular"}>Accesorios Celulares</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=cartuchos%20toner"}>Cartuchos / Toners</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=tinta"}>Tinta</Link></li>
                                        <li className="dropdownmenu-desktop"><Link to={""} className="linklr" onClick={() => window.location.href="/products/search=estuche%20funda%20soporte%20silla"}>Otros</Link></li>
                                        
                                    </Col>
                                </Row>
                            </NavDropdown>
                            <Nav className="linklr" href="/aboutus"><Link to={"/aboutus"}>SOBRE
                                LA RED</Link></Nav>
                            <Nav className="linklr"><Link to={"/login"}>ACCESO A
                                CLIENTES</Link></Nav>
                            <Nav className="linklr" href="/contact"><Link
                                to={"/contact"}>CONTACTO</Link></Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div>
                    <div className="social top">
                        <a href="https://wa.me/542314404320" rel="noopener noreferrer" target="_blank" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                <title>Chateá con nosotros!</title>
                                <path
                                    d="M.529,13.5l.914-3.338a6.445,6.445,0,1,1,5.584,3.226h0A6.426,6.426,0,0,1,3.945,12.6ZM4.1,11.438l.2.116a5.343,5.343,0,0,0,2.726.746h0A5.355,5.355,0,1,0,2.49,9.791l.127.2L2.076,11.97Z"/>
                                <path
                                    d="M5.417,3.947c-.121-.268-.248-.273-.363-.278-.094,0-.2,0-.308,0a.594.594,0,0,0-.43.2,1.805,1.805,0,0,0-.563,1.342A3.139,3.139,0,0,0,4.41,6.875a6.613,6.613,0,0,0,2.751,2.43c1.36.536,1.637.43,1.932.4a1.63,1.63,0,0,0,1.087-.766,1.334,1.334,0,0,0,.093-.765c-.04-.067-.147-.107-.308-.188s-.953-.47-1.1-.524-.255-.08-.363.081-.415.524-.509.631-.188.121-.349.04a4.371,4.371,0,0,1-1.295-.8,4.812,4.812,0,0,1-.9-1.115c-.094-.161-.01-.248.071-.328s.161-.188.241-.282a1.055,1.055,0,0,0,.161-.269.3.3,0,0,0-.013-.282C5.873,5.062,5.56,4.266,5.417,3.947Z"
                                    fillRule="evenodd"/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/LaRedBolivar/" rel="noopener noreferrer" target="_blank"
                           className="social-icon">
                            <svg viewBox="0 0 320 512">
                                <title>Nuestro Facebook!</title>
                                <path
                                    d="M279.1 288l14.3-92.7h-89v-60c0-25.4 12.5-50.2 52.3-50.2H297V6.4S260.4 0 225.4 0C152 0 104.3 44.4 104.3 124.7v70.6H22.9V288h81.4v224h100.2V288z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/laredbolivar/" rel="noopener noreferrer" target="_blank" className="social-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <title>Nuestro Instagram!</title>
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                            </svg>
                        </a>
                        <a href="https://telegram.me/542314404320" className="social-icon">
                            <svg style={{width: '25px'}} xmlns="http://www.w3.org/2000/svg" version="1.0" width="240.000000pt" height="240.000000pt" viewBox="0 0 240.000000 240.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M1075 2394 c-232 -34 -404 -100 -570 -219 -249 -177 -416 -436 -482 -745 -24 -117 -24 -343 0 -460 104 -487 460 -843 947 -947 117 -24 343 -24 460 0 487 104 843 460 947 947 12 60 18 128 18 230 0 102 -6 170 -18 230 -103 485 -462 845 -942 945 -78 16 -299 28 -360 19z m289 -209 c543 -95 914 -614 821 -1149 -95 -543 -614 -914 -1149 -821 -543 95 -914 614 -821 1149 95 543 614 914 1149 821z"/>
                                <path d="M1135 1489 c-308 -115 -566 -216 -573 -223 -23 -23 -5 -53 41 -70 23 -8 89 -30 146 -48 l105 -33 55 -165 c31 -91 60 -171 64 -178 18 -26 52 -10 133 64 55 50 88 73 96 68 7 -5 73 -52 147 -106 74 -54 144 -98 156 -98 12 0 29 8 38 18 10 11 51 190 113 484 101 488 102 499 55 497 -9 0 -268 -95 -576 -210z m395 27 c0 -7 -114 -116 -252 -241 l-253 -228 -9 -79 c-5 -43 -12 -78 -15 -78 -6 0 -76 227 -76 247 0 10 587 393 601 393 2 0 4 -6 4 -14z"/>
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
            </Fragment>
        );
}

export default NavBarReact;