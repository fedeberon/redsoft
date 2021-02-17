import React, {Fragment} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";


class NavBarReact extends React.Component {

    render() {
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

                                        <span><h5>Mouses y Teclados</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=inalambricos"}>
                                            Inalambricos</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr"
                                                                onClick={() => window.location.href="/products/search=mouses"}>Mouses</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr"
                                                                onClick={() => window.location.href="/products/search=teclados"}>Teclados</Link></li>


                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Computadoras</h5></span>
                                        <NavDropdown.Divider/>
                                        <ul>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=notebook"}>Notebooks</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=cpu"}>CPU's</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=monitor"}>Monitores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=mother"}>Mothers</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=memoria"}>Memorias RAM</Link></li>
                                        </ul>
                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Accesorios e Impresion</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=impresora"}>Impresoras</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=adap"}>Adaptadores</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=cable"}>Cables</Link></li>

                                    </Col>
                                    <Col xs={2} md={3} style={{flex: '20%', maxWidth: '25%'}}>

                                        <span><h5>Audio y Gaming</h5></span>
                                        <NavDropdown.Divider/>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=auricular"}>Auriculares</Link></li>
                                        <li className="dropdownmenu-desktop"><Link className="linklr" onClick={() => window.location.href="/products/search=gaming"}>Gaming</Link></li>
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
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NavBarReact;