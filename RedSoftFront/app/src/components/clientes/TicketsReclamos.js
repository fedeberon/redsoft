import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';

const TicketsReclamos = ({newOption}) => {

    const [option, setOption] = useState('nuevoReclamo');

    const asd = () => {
        newOption(option);
    }

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


            <h2>Historial de reclamos</h2>
            <table className="table table-striped table-responsive-sm">
            <thead>
            <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Tipo</th>
                <th scope="col">Detalle</th>
                <th scope="col">Estado</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">06/07/2020</th>
                <td>Soporte técnico</td>
                <td><a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>arrow-right-circle</title><path d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z" /><path d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z" /></svg>
                    Ver detalle</a></td>
                <td><span className="estado pago">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><title>Untitled-1</title><path d="M10,2.5A7.5,7.5,0,1,0,17.5,10,7.5,7.5,0,0,0,10,2.5Zm0,14.42A6.92,6.92,0,1,1,16.92,10,6.92,6.92,0,0,1,10,16.92Z" transform="translate(-2.5 -2.5)"/><path d="M13.53,6.92l-4.43,5L6.43,9.77a.29.29,0,0,0-.36.46L9,12.53a.27.27,0,0,0,.18.07.32.32,0,0,0,.22-.1L14,7.31a.3.3,0,0,0,0-.41A.29.29,0,0,0,13.53,6.92Z" transform="translate(-2.5 -2.5)"/></svg>
                    Cerrado</span></td>
            </tr>
            <tr>
                <th scope="row">06/07/2020</th>
                <td>Soporte técnico</td>
                <td><a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>arrow-right-circle</title><path d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z" /><path d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z" /></svg>
                    Ver detalle</a></td>
                <td><span className="estado impago">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.2 475.2"><title>001-cancel</title><path d="M405.6,69.6a237.59,237.59,0,1,0-336,336,237.59,237.59,0,1,0,336-336ZM386.5,386.5a210.52,210.52,0,0,1-297.8,0C6.6,304.4,6.6,170.8,88.7,88.7a210.52,210.52,0,0,1,297.8,0C468.6,170.8,468.6,304.4,386.5,386.5Z"/><path d="M342.3,132.9a13.46,13.46,0,0,0-19.1,0l-85.6,85.6L152,132.9A13.51,13.51,0,1,0,132.9,152l85.6,85.6-85.6,85.6a13.55,13.55,0,0,0,9.5,23.1,13.17,13.17,0,0,0,9.5-4l85.6-85.6,85.6,85.6a13.59,13.59,0,0,0,9.5,4,13,13,0,0,0,9.5-4,13.46,13.46,0,0,0,0-19.1l-85.4-85.6L342.3,152A13.46,13.46,0,0,0,342.3,132.9Z"/></svg> 
                    Abierto</span></td>
            </tr>
            <tr>
                <th scope="row">06/07/2020</th>
                <td>Soporte técnico</td>
                <td><a href="">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>arrow-right-circle</title><path d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z" /><path d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z" /></svg>
                    Ver detalle</a></td>
                <td><span className="estado pago">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><title>Untitled-1</title><path d="M10,2.5A7.5,7.5,0,1,0,17.5,10,7.5,7.5,0,0,0,10,2.5Zm0,14.42A6.92,6.92,0,1,1,16.92,10,6.92,6.92,0,0,1,10,16.92Z" transform="translate(-2.5 -2.5)"/><path d="M13.53,6.92l-4.43,5L6.43,9.77a.29.29,0,0,0-.36.46L9,12.53a.27.27,0,0,0,.18.07.32.32,0,0,0,.22-.1L14,7.31a.3.3,0,0,0,0-.41A.29.29,0,0,0,13.53,6.92Z" transform="translate(-2.5 -2.5)"/></svg>

                    Cerrado</span></td>
            </tr>
            </tbody>
            </table>
       </>
    );
}

export default TicketsReclamos;