import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const TicketsReclamos = ({newOption}) => {

    const [option, setOption] = useState('nuevoReclamo');
    const [dataTickets, setDataTickets] = useState([]);
    const user = useSelector((state) => state.loginispcube.user);

    const asd = () => {
        newOption(option);
    }    

    const getTickets = async () => {

        let response = 
        await fetch(`http://online3.ispcube.com:8080/index.php/tickets?limit=50&q=${user.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
                'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
        }).then(response => response.json())
        .then(data => {
            if(data){
                Object.entries(data).map(([key, value]) => {
                    if(key==='data'){
                        setDataTickets(value);
                    }
                });
            }
        })
    }

    useEffect(()=> {
        getTickets();
    },[])

    return (
        <>
            <h1 className="titlesh1">Tickets reclamos</h1>


            <h2 className="titlesh2">Abrir ticket</h2>
            <div className="container-fluid box">
                <div className="row">
                    <div className="col-12 col-sm">
                    Necesitas ayuda o información? generá un nuevo ticket.
                    </div>
                    <div className="col-12 col-sm">
                    <Button  onClick={asd}
                    className="btn btn-primary btn-clientes">
                       <Link id="nuevoticket" to={"/clientes/nuevo-reclamo"}>Iniciar Ticket</Link></Button>
                    </div>
                    <div className="col-12 col-sm d-none d-sm-block">
                    <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12.6"><title>tickets</title><path d="M14.9,3.7H5.1A2.1,2.1,0,0,0,3,5.8v6.07A2.1,2.1,0,0,0,5.1,14h.65l-.41,2a.23.23,0,0,0,.09.23.23.23,0,0,0,.25,0L10.06,14H14.9a2.1,2.1,0,0,0,2.1-2.1V5.8A2.1,2.1,0,0,0,14.9,3.7Zm1.63,8.17A1.63,1.63,0,0,1,14.9,13.5H10a.2.2,0,0,0-.11,0l-4,2.1.37-1.85a.19.19,0,0,0,0-.19A.21.21,0,0,0,6,13.5H5.1a1.63,1.63,0,0,1-1.63-1.63V5.8A1.63,1.63,0,0,1,5.1,4.17h9.8A1.63,1.63,0,0,1,16.53,5.8Z" transform="translate(-3 -3.7)"/></svg>
                        </span>
                    </div>
                </div>
            </div>


            <h2 className="titlesh2">Historial de reclamos</h2>
            <table className="table table-striped table-responsive-sm">
            <thead>
            <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Asunto</th>
                <th scope="col">Detalle</th>
                <th scope="col">Estado</th>
            </tr>
            </thead>
            <tbody>
                {dataTickets.map((ticket, index) => (
                    <tr key={index}>
                    <th scope="row">{ticket.date}</th>
                    <td>{ticket.namearea}</td>
                    <td>{ticket.namecategory}</td>
                    <td>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>arrow-right-circle</title><path d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z" /><path d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z" /></svg>
                        Ver detalle <strong>(No disponible)</strong></td>
                    <td><span className={ticket.namestatus === 'Cerrado' ? 'estado impago' : 'estado pago'}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><title>Untitled-1</title><path d="M10,2.5A7.5,7.5,0,1,0,17.5,10,7.5,7.5,0,0,0,10,2.5Zm0,14.42A6.92,6.92,0,1,1,16.92,10,6.92,6.92,0,0,1,10,16.92Z" transform="translate(-2.5 -2.5)"/><path d="M13.53,6.92l-4.43,5L6.43,9.77a.29.29,0,0,0-.36.46L9,12.53a.27.27,0,0,0,.18.07.32.32,0,0,0,.22-.1L14,7.31a.3.3,0,0,0,0-.41A.29.29,0,0,0,13.53,6.92Z" transform="translate(-2.5 -2.5)"/></svg>
                        {ticket.namestatus}</span></td>
                </tr>
                ))}
            </tbody>
            </table>
       </>
    );
}

export default TicketsReclamos;