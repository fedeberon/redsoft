import React, {useEffect, useState} from 'react';
import Header from "./header/Header";
import FooterComponent from "./home/FooterComponent";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useParams } from "react-router-dom";

const MercadoPagoResponse = () => {

    const [orderResume, setOrderResume] = useState([]);
    const {id} = useParams();

    const getResume = () => {
        
        fetch(`http://localhost:8886/api/cart/paymentresponse/${id}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                    'Accept': '*/*'},
        }).then(response => response.json())
        .then(data => {
            setOrderResume(data);
        })
    }

    useEffect(()=> {
        getResume();
    },[])

    function ParseStatus(value) {
        switch (value){
            case 'approved':
                return 'Aprobada'
                break;
            case 'pending':
                return 'Pendiente'
                break;
            case 'failure':
                return 'Rechazada'
                break;
            default: 
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
                        <Col className="mp-response-title">Estado de la operación</Col>
                        <Col className="mp-response-text" 
                        style={{color: orderResume.collectionStatus === 'approved' ? 'green' : 'orange'}}>
                            {ParseStatus(orderResume.collectionStatus)}
                        </Col>
                    </Row>
                    <Row >
                        <Col className="mp-response-title">Merchant order Id</Col>
                        <Col className="mp-response-text">{orderResume.merchantOrderId}</Col>
                    </Row>
                    <Row>
                        <Col className="mp-response-title">Forma de Pago</Col>
                        <Col className="mp-response-text">{orderResume.paymentType === 'credit_card' ? 'Tarjeta de Crédito' : 'Efectivo'}</Col>
                    </Row>
                    <Row>
                        <Col className="mp-response-title">Id de Preferencia</Col>
                        <Col className="mp-response-text">{orderResume.preferenceId}</Col>
                    </Row>
                </Container>
            </div>
        <FooterComponent/>
        </>
    );
}

export default MercadoPagoResponse;