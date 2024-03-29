import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';
import { loginispcubeActions } from "../../store";
import { useDispatch } from "react-redux";

const Facturas = () => {

    const user = useSelector((state) => state.loginispcube.user);
    const [smShow, setSmShow] = useState(false);
    const dispatch = useDispatch();
    const date = new Date();
    const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
                "Noviembre","Diciembre"];


    //http://online3.ispcube.com:8080/index.php/mercadopago/button?idcustomer=000009&price=100.20
    //https://apilared.ispcube.com/index.php/mercadopago/button?idcustomer=000001&price=200

    const getUser = async () => {

        await fetch(`https://apilared.ispcube.com/index.php/customers?page=1&limit=1&q=${user.idcustomer}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
            'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
        }).then(response => response.json())
        .then(data => {
            if(data && data.data.length > 0){
                dispatch(loginispcubeActions.setUser(data.data[0]));
            }
        });
    };

    const buttonPay = () => {
        
        fetch(`https://apilared.ispcube.com/index.php/mercadopago/button?idcustomer=${user.idcustomer}&price=${user.debt}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
                'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
            }).then(response => response.json())
            .then(response => {
                window.open(response,"_blank");
            });       
        setSmShow(false);
        getUser();
    };


    return (
        <div>            
            <h1 className="titlesh1">Mis facturas</h1>


            <h2 className="titlesh2">Saldo de tu cuenta</h2>
            <div className="container-fluid box">
            <div className="row">
                <div className="col-12 col-sm">
                    El saldo del domicilio seleccionado al {date.getDate()} de {mes[date.getMonth()].toString()} de {date.getFullYear()} es de:
                </div>
                <div className="col-12 col-sm">
                    <span className="importe">${user.debt}</span>
                </div>
                <div className="col-12 col-sm">
                    <span className="referencia">No. de Referencia de Pago: *********</span>
                </div>
            </div>
            <div className="row foot">
                <div className="col-12 col-sm">Recordá que tus pagos son acreditados a las 48 hs de haber sido realizados.</div>
                <div className="col-12 col-sm cont-btn">
                    {Number(user.debt) > 0 ? 
                         <Button 
                         id="pay-button-customers"
                         disabled={!user.debt > 0}
                         onClick={() => setSmShow(true)} 
                         type="button" 
                         className="btn btn-primary"
                         
                        >
                                Pagar
                        </Button>
                        :
                       
                        <Button className="btn btn-success">
                            Estás al día
                        </Button>
                    }                    
                </div>
            </div>
            </div>

                
            <h2 className="titlesh2" >Historial de facturas</h2>
            <table className="table table-striped table-responsive-sm">
            <thead>
                <tr>
                <th scope="col">Período</th>
                <th scope="col">Fecha de vencimiento</th>
                <th scope="col">Importe</th>
                <th scope="col">Descargar factura</th>
                <th scope="col">Estado</th>
                </tr>
            </thead>
            <tbody>
                <p style={{padding: '10px', fontSize: '15px', position: 'absolute'}}>
                   Información no disponible
                   </p>
                {/* <tr>
                <th scope="row">Julio 2020</th>
                <td>06/07/2020</td>
                <td>$1900</td>
                <td><a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.63 13.57"><title>facturas</title><path d="M12.83,8.19H7.17A.22.22,0,0,0,7,8.42a.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,8.19Z" transform="translate(-4.68 -3.21)"/><path d="M7.17,6.83H9.43a.23.23,0,1,0,0-.45H7.17A.22.22,0,0,0,7,6.61.22.22,0,0,0,7.17,6.83Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,10H7.17a.22.22,0,0,0-.22.23.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,10Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,11.81H7.17A.22.22,0,0,0,7,12a.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,11.81Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,13.62H7.17a.22.22,0,0,0-.22.23.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,13.62Z" transform="translate(-4.68 -3.21)"/><path d="M12,3.21H4.68V16.79H15.32V6.51Zm.13.78,2.39,2.39H12.15Zm-7,12.34V3.67H11.7V6.83h3.16v9.5Z" transform="translate(-4.68 -3.21)"/></svg>
                    </a>
                </td>
                <td><span className="estado pago">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><title>Untitled-1</title><path d="M10,2.5A7.5,7.5,0,1,0,17.5,10,7.5,7.5,0,0,0,10,2.5Zm0,14.42A6.92,6.92,0,1,1,16.92,10,6.92,6.92,0,0,1,10,16.92Z" transform="translate(-2.5 -2.5)"/><path d="M13.53,6.92l-4.43,5L6.43,9.77a.29.29,0,0,0-.36.46L9,12.53a.27.27,0,0,0,.18.07.32.32,0,0,0,.22-.1L14,7.31a.3.3,0,0,0,0-.41A.29.29,0,0,0,13.53,6.92Z" transform="translate(-2.5 -2.5)"/></svg>
                    Pago</span></td>
                </tr> */}
            
            </tbody>
            </table>
            <div>            
                <Modal show={smShow} onHide={() => setSmShow(false)} centered animation={true}>
                    <Modal.Header closeButton>
                    <Modal.Title>Pago de Servicio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{fontSize: '17px'}}>
                        <p>Podés abonar tu factura mediante Mercado Pago</p>
                        <p>Total a pagar: ${user.debt}</p>

                        <p>Hacé click en Pagar para abrir tu link de pago!</p>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => setSmShow(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => buttonPay()}>
                        Pagar
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}
export default Facturas;