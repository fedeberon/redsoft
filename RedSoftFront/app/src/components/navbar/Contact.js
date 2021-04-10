import React from 'react';
import Iframe from 'react-iframe';
import Header from "../header/Header";
import FooterComponent from "../home/FooterComponent";
import Alert from 'react-bootstrap/Alert';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            showAlert: false,
            alertMessage: false,
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let details = {};
        details.name = this.state.name;
        details.email = this.state.email;
        details.phone = this.state.phone;
        details.message = this.state.message;
        console.log(details);
        const res = await fetch(`https://laredintercomp.com.ar:8886/sendEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'},
            body: JSON.stringify(details),
            }).then(response => {
                if(response.status === 200){
                    this.setState({alertMessage: true})
                    this.setState({showAlert: true});
                    this.setState({
                        name: '',
                        email: '',
                        phone: '',
                        message: ''
                    })
                }
            })
            setTimeout(()=> {
                this.setState({showAlert: false});
                this.setState({alertMessage: false})
            },5000)
    } 

    render() {

        const {name, email, phone, message} = this.state;

        return (

            <>
            <Header/> 
            <div className="page Contacto">
                <div className="container">
                    <div className="row">
                        <div className="col-12"><h1 className="titpage">Contacto</h1></div>
                        <div className="col-md-7">
                            <div className="recuadro" style={{backgroundColor: '#f8f9fa', padding: '30px'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <img alt="" src="/img/iso.svg" className="iso"
                                             style={{width: '30px', height: '40px'}}/>
                                        <ul style={{display: 'inline-table',verticalAlign: 'top',
                                            fontSize: '14px', paddingLeft: '25px',
                                            listStyleType: 'none'}}>
                                            <li><strong>Av. Alsina 555</strong></li>
                                            <li style={{marginBottom: '10px'}}>Bolivar, Buenos Aires</li>
                                            <li>Tel: 2314 404320</li>
                                            <li>2314 427308</li>
                                            <li>gestiones@laredwifi.com.ar</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 mapa">
                                        <Iframe
                                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.356081281311!2d-61.113489383923934!3d-36.23084315290085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bfe31404386c1d%3A0x64f05c918d808d84!2sAv.%20Alsina%20555%2C%20B6550%20San%20Carlos%20de%20Bolivar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1596806316107!5m2!1ses-419!2sar"
                                            width="100%"
                                            height="150"
                                            frameBorder="0"
                                            style="border:0"
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"/>
                                    </div>
                                    <div className="col-12">
                                        <img alt="" src="/img/contacto.jpg"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 info">
                            <p className="intro">También podés realizarnos una consulta a través de
                                nuestro
                                formulario online.</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" value={name} className="form-control" id="nombre"
                                           aria-describedby="emailHelp" placeholder="Nombre" maxLength={20}
                                           onChange={this.handleChange} name="name"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" value={email} className="form-control" id="email"
                                           placeholder="Email"
                                           onChange={this.handleChange} name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="telefono"
                                           placeholder="Telefono" value={phone}
                                           onChange={this.handleChange} name="phone"/>
                                </div>
                                <div className="form-group">
                                            <textarea className="form-control" id="mensaje"
                                                      placeholder="Mensaje" rows="5" value={message}
                                                       onChange={this.handleChange} name="message"/>
                                </div>
                                <button 
                                type="submit" 
                                className="btn-consulta"
                                disabled={!this.state.name || !this.state.email || 
                                    !this.state.phone || !this.state.message}
                                >
                                Consultar
                                </button>
                            </form>
                        </div>
                        <Alert
                        style={{margin: '0 auto', width: '25%', textAlign: 'center'}} 
                        show={this.state.showAlert} 
                        variant={this.state.alertMessage ? 'success' : 'danger'}>
                            {this.state.alertMessage ? `Mensaje enviado con éxito!` : `Envío de mensaje falló!`}
                        </Alert>
                    </div>
                </div>
            </div>
            <FooterComponent/>
            </>
        );
    }
}

export default Contact;
