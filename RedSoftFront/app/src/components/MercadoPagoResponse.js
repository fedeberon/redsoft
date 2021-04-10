import React, {useEffect, useState} from 'react';
import Header from "./header/Header";
import FooterComponent from "./home/FooterComponent";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";

const MercadoPagoResponse = () => {

    const [orderResume, setOrderResume] = useState([]);
    const [orders, setOrders] = useState([]);
    const [details, setDetails] = useState([]);
    const {id} = useParams();

    const getResume = () => {
        
        fetch(`https://laredintercomp.com.ar:8886/api/cart/paymentresponse/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                    'Accept': '*/*'},
        }).then(response => response.json())
        .then(data => {
            setOrderResume(data);
        }) 
    }

    const getHistory = () => {

        fetch(`https://laredintercomp.com.ar:8886/api/orders/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                    'Accept': '*/*'},
        }).then(response => response.json())
        .then(data => {
            setOrders(data);
            setDetails(data.details);
        })
    }
    useEffect(()=> {
        getResume();
        getHistory();
    },[]);

    function FormatDate(date) {
        let newdate = new Date(date);
        return `${newdate.getDate() < 10 ? `0${newdate.getDate()}` : `${newdate.getDate()}`}/${newdate.getMonth()+1 < 10 ? `0${newdate.getMonth()+1}` : `${newdate.getMonth()+1}`}/${newdate.getFullYear()} a las ${newdate.getHours()}:${newdate.getMinutes() < 10 ? `0${newdate.getMinutes()}` : `${newdate.getMinutes()}`}hs`
    }

    function ParseStatus(value) {
        switch (value){
            case 'approved':
                return 'Aprobada'
            case 'pending':
                return 'Pendiente'
            case 'failure':
                return 'Rechazada'
            default: 
                return 'Pendiente'
            break;   
        }
    }
    
    return (
        <>
        <Header/>
            <div className="">
                <h2 className="mpcomponent-head">Resumen de compra</h2>
                <Container>
                    <Row hover>
                        <Col className="mp-response-title">Fecha de la operación</Col>
                        <Col className="mp-response-text">{orders && orders.paystate ? FormatDate(orders.lastUpdate) : FormatDate(orders.date)}
                        </Col>
                    </Row>
                    <Row hover>
                        <Col className="mp-response-title">Estado de la operación</Col>
                        <Col className="mp-response-text" 
                        style={{color: orderResume.collectionStatus === 'approved' ? 'green' : 'orange'}}>
                            {ParseStatus(orderResume.collectionStatus)}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mp-response-title">Forma de Pago</Col>
                        <Col className="mp-response-text">{orderResume.paymentType === 'credit_card' ? 'Tarjeta de Crédito' : 'Efectivo'}</Col>
                    </Row>
                    {/* { details.map((prod, index) => (
                    <Row key={index} >
                        <Col className="mp-response-text">{prod.product?.name} x {prod.quantity}</Col>  
                        <Col className="mp-response-text">Subtotal:  ${prod.product?.price * prod.quantity}</Col>
                    </Row>                                
                    ))} */}
                    

                </Container>
            </div>
        <FooterComponent/>
        </>
    );
}

export default MercadoPagoResponse;