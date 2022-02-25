import React, {useState, useEffect} from 'react';
import TicketsReclamos from './TicketsReclamos';
import Facturas from './Facturas';
import Estado from './Estado';
import NuevosReclamos from './NuevosReclamos';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [option, setOption] = useState('facturas');
    const user = useSelector((state) => state.loginispcube.user);

    useEffect(()=> {
        if(window.innerWidth < 767)
            setShowMenu(true);
    },[]);

    function setOptionNew (object) {
        setOption(object);        
    }

    function SectionCustomer () {
        
        switch (option){
            case "facturas":
                return <Facturas/>
            case "reclamos":
                return <TicketsReclamos newOption={setOptionNew}/>
            case "estado":
                return <Estado/>
            case "nuevoReclamo":
                return <NuevosReclamos/>
            default:
        }
    }

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="d-flex" id="wrapper">
            <div className="sidebar" id="sidebar-wrapper" style={{marginLeft: showMenu ? '-15rem' : '0'}}>
                <div className="sidebar-heading">                    
                    <div className="logotop d-none d-sm-block logo-clientes">
                        <a href="index.php">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 363"><title>logo-02</title><path d="M103.408,160.919l47.927,17.835,6.259,53.716,14.076-44.937,33.588,12.7c9.641,2.764,17.991-2.38,20.608-10.627L262.63,73.912,242.1,65.964l6.387-19.317L153.814,8.127C143.085,4,135.849,3.582,128.006,19.247L91.783,131.558l19.9,7.782Z" fill="#be1d7b" fillRule="evenodd"/><path d="M186.248,111.33c13.034,5.9,21.6,20.753,20.213,37.293l11.006.962c1.554-18.525-6.264-35.46-19.114-45.054,14.261-7.225,24.787-22.557,26.342-41.083l-11.008-.961C212.375,78.122,202.55,90.729,189.8,95.063a17.025,17.025,0,0,1,.676,6.432,16.521,16.521,0,0,1-4.227,9.835Zm-8.694-22.719c5.779.5,10.025,6.139,9.485,12.584s-5.665,11.26-11.444,10.756-10.027-6.14-9.486-12.585,5.665-11.26,11.445-10.755Zm-12.938,3.837c-11.347-6.686-18.531-20.5-17.252-35.755l-11.006-.962c-1.554,18.525,6.264,35.461,19.114,45.053-14.261,7.226-24.787,22.558-26.342,41.083l11.008.962c1.359-16.2,11.856-29.147,25.28-33.012a16.569,16.569,0,0,1-2.745-10.75,16.972,16.972,0,0,1,1.943-6.619Zm-9.8,70.289-10.8-.943,2-23.786c2.264-15.007,11.939-22.964,22.231-25.1a12.769,12.769,0,0,0,15.046.89c9.668,3.377,18.153,12.9,18.059,30.409l-1.882,22.432-10.761-.94,1.956-23.478c.317-8.58-5.6-16.769-15.452-17.571-10.678-1.018-18.154,6.787-18.545,15.557l-1.852,22.531ZM165.148,39.621,163.22,62.146c-1.075,8.71,4.992,17.7,15.684,18.546,9.841.919,17.037-6.125,18.154-14.634l1.984-23.476,10.76.94L207.92,65.954c-2.5,15.3-10.6,23.259-19.43,26.021a13.574,13.574,0,0,0-10.616-7.2,13.358,13.358,0,0,0-11.168,4.669c-8.223-4.6-14.586-13.59-14.349-26.984l2-23.786Z" fill="#fff" fillRule="evenodd"/><path d="M3.687,293.459l.2-62.763,13.126-.057-.186,58.807,55.941-.242c7.23-.173,10.13,5.045,9.646,14.659l-70.592.306.034-10.746-8.168.036Zm241.849-42.984.02-6.125-52.508.227-.186,58.806-13.126.058q.029-9.19.058-18.377t.058-18.377q.03-9.187.058-18.377.018-5.185.033-10.375c.014-4.5,2.935-8,8.939-8.041l61.273-.264-.027,8.926,8.572-.037L258.635,259,233.6,275.225,258.5,303.1l-18.6.08-34.335-38.637,18.421-.08,21.55-13.988Zm15.846,52.613.2-61.753,11.45-.05.037-11.755,67.311-.291-.047,14.7-65.632.285-.047,14.7,52.506-.228-.046,14.7-52.507.227-.047,14.7,65.634-.285c.229,7.322-1.988,12.821-9.019,14.74l-69.789.3Zm81.649-.355.14-44.1,5.976-.025-.026,8.214,7.15-.031-.066,21.189,52.505-.229.141-44.1-55.789.24-9.844.043.046-14.7,72.2-.313L422,236.236l-.171,54.105q-.451,11.563-10.759,12.1l-68.039.294ZM132.2,230.14l31.86,73.368-14.592.065L124.86,246.907l-22.825,52c-1.286,2.935-2.374,5.273-7.348,4.9l-9.385.042,27.435-62.5,10.771-.048.036-11.124Z" fill="#161814" fillRule="evenodd"/><path d="M422,355.425l-2.988,0-.027-13.563-11.951.025.028,13.564-2.988.006-.036-16.955,17.927-.037Zm-23.909-3.341-.021-10.173-11.951.025.021,10.174Zm-14.93,3.422-.036-16.954,17.926-.038.036,16.955Zm-6.012-16.941,2.988-.007.035,16.955-2.987.007Zm-20.913.044,17.926-.039.007,3.392-14.939.031.021,10.173,14.939-.032.007,3.39-17.926.04Zm-10.293.022,7.34,16.938-3.32.008-5.669-13.083L338.678,355.6l-3.321.008,7.27-16.971Zm-24.03,17.005-.028-13.564-7.47.017-.007-3.391,17.927-.038.006,3.391-7.468.016.027,13.563ZM311.42,338.705l.036,16.954-17.927.038-.036-16.954,2.988-.007.03,13.562,11.95-.024-.03-13.564Zm-35.837,7.705,11.952-.025-.01-4.239-11.95.024Zm-3-7.623,17.927-.038.023,11.019-14.939.032.012,5.935-2.987.007Zm-2.952,16.961-2.987,0-.025-11.63-6.826,9.951h-1.245l-6.868-9.921.024,11.632-2.987.007-.037-16.955,3.113-.007,7.367,10.626,7.322-10.657,3.113-.006Zm-26.9-3.334-.021-10.173-11.951.025.021,10.172ZM227.8,355.837l-.035-16.955,17.926-.038.036,16.953Zm-20.951-16.911,17.927-.037.007,3.39-14.938.031.022,10.173,14.939-.032.006,3.392-17.926.038Zm-25.394.055,4.482-.01.01,5.086-4.481.009Zm.026,11.867,4.48-.009.012,5.086-4.482.01ZM173.986,339l4.481-.01.011,5.087-4.482.009Zm.025,11.869,4.481-.01.01,5.086-4.479.01Zm-31.36,5.153-.03-13.564-7.468.016-.008-3.392,17.927-.037.008,3.391-7.471.015.03,13.565Zm-28.383.059-.036-16.954,17.926-.038.007,3.392-14.939.031.009,3.39,11.95-.024.007,3.39-11.951.026.007,3.39,14.939-.031.007,3.391Zm-2.988.007-2.988.007-.028-13.563-11.95.024.027,13.565-2.988,0-.036-16.952,17.927-.04Zm-23.927-12.1,0-1.412L75.4,342.6l.029,13.564-2.987,0q-.006-2.118-.01-4.237t-.009-4.239q0-2.121-.01-4.239t-.008-4.238l17.927-.04.013,6.783-5.678,3.73,5.7,6.442-4.233.01-7.862-8.93,4.193-.01ZM51.526,356.21l-.036-16.954,17.926-.039.009,3.392-14.939.031.006,3.391,11.951-.025.009,3.39-11.952.026.007,3.391,14.939-.032.007,3.39Zm-13.445.029-.028-13.564-7.47.016-.007-3.391,17.927-.039.007,3.392-7.468.015.027,13.564Zm-10.456.021-2.988.007L24.608,342.7l-11.949.025.027,13.564L9.7,356.3l-.036-16.954,17.927-.039Zm-23.938-16.9,2.988,0,.037,16.954-2.988.006Z" fill="#161814"/></svg>
                        </a>
                    </div>
                    <div className="logotop d-block d-sm-none logo-clientes">
                        <a href="index.php">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.48 16.56"><title>iso</title><path d="M4.61,13.06l3.5,1.3.46,3.92L9.6,15l2.45.93a1.18,1.18,0,0,0,1.5-.78L16.24,6.7l-1.5-.58.47-1.41L8.29,1.9c-.78-.3-1.31-.34-1.88.81l-2.65,8.2,1.45.57Z" transform="translate(-3.76 -1.72)" fill="#be1d7b" fillRule="evenodd"/><path d="M10.66,9.43a2.72,2.72,0,0,1,1.48,2.73l.8.07a3.7,3.7,0,0,0-1.4-3.29,3.69,3.69,0,0,0,1.93-3l-.81-.07a2.71,2.71,0,0,1-1.74,2.38,1.42,1.42,0,0,1,.05.47,1.16,1.16,0,0,1-.31.71ZM10,7.77a.86.86,0,0,1-.15,1.71A.86.86,0,0,1,10,7.77Zm-.95.28A2.73,2.73,0,0,1,7.82,5.44L7,5.37A3.67,3.67,0,0,0,8.41,8.66a3.68,3.68,0,0,0-1.92,3l.8.07A2.71,2.71,0,0,1,9.14,9.32a1.15,1.15,0,0,1-.2-.78,1.16,1.16,0,0,1,.14-.49Zm-.72,5.14-.78-.07.14-1.74A2.08,2.08,0,0,1,9.35,9.55a.93.93,0,0,0,.51.21.91.91,0,0,0,.58-.15,2.14,2.14,0,0,1,1.32,2.23l-.13,1.63-.79-.07L11,11.69a1.21,1.21,0,0,0-1.13-1.28A1.19,1.19,0,0,0,8.5,11.54l-.14,1.65Zm.76-9L9,5.84a1.24,1.24,0,0,0,2.47.29l.14-1.72.79.07-.14,1.64A2.16,2.16,0,0,1,10.82,8a.95.95,0,0,0-1.59-.18,2.11,2.11,0,0,1-1-2l.14-1.74Z" transform="translate(-3.76 -1.72)" fill="#fff" fillRule="evenodd"/></svg>
                        </a>
                    </div>
                    </div>
                    <div className="user d-block d-sm-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><title>Bienvenido</title><path d="M19.5,10A9.5,9.5,0,1,0,3.58,17h0l.31.26.06,0q.26.21.51.39l.17.12a5.5,5.5,0,0,0,.57.36l.12.08L6,18.6l0,0a9.8,9.8,0,0,0,2.3.73h.06c.25,0,.51.08.76.1h.1c.25,0,.51,0,.77,0s.51,0,.77,0h.09c.26,0,.51-.06.76-.1h.06A9.82,9.82,0,0,0,14,18.64l.08,0,.62-.32.15-.09.55-.34.19-.14c.15-.11.3-.22.44-.34l.1-.07L16.4,17h0A9.45,9.45,0,0,0,19.5,10ZM1.19,10a8.81,8.81,0,1,1,14.65,6.59,2,2,0,0,0-.31-.19l-2.92-1.46a.78.78,0,0,1-.43-.69v-1L12.4,13a7.37,7.37,0,0,0,.9-1.77A1.26,1.26,0,0,0,14,10V8.81A1.22,1.22,0,0,0,13.71,8V6.38a2.72,2.72,0,0,0-.65-2A3.86,3.86,0,0,0,10,3.26a3.86,3.86,0,0,0-3.06,1.1,2.72,2.72,0,0,0-.65,2V8A1.2,1.2,0,0,0,6,8.81V10a1.25,1.25,0,0,0,.46,1,6.51,6.51,0,0,0,1.07,2.21v1a.78.78,0,0,1-.4.68L4.38,16.39a1.4,1.4,0,0,0-.26.16A8.76,8.76,0,0,1,1.19,10Zm14,7.13-.37.25-.17.11-.5.29-.11.06a9.13,9.13,0,0,1-1.21.51h0c-.22.07-.44.14-.66.19h0c-.23.06-.45.1-.68.14h0c-.21,0-.43.06-.65.08h-.11c-.22,0-.43,0-.65,0s-.44,0-.65,0H9.23c-.22,0-.43,0-.65-.08h0a8.48,8.48,0,0,1-1.34-.34h0l-.65-.25h0l-.59-.28-.08,0-.52-.3-.15-.1-.46-.32,0,0,0,0L7.44,15.5a1.44,1.44,0,0,0,.76-1.28V13l-.08-.1a5.77,5.77,0,0,1-1-2.15l0-.13-.11-.08A.57.57,0,0,1,6.67,10V8.81a.57.57,0,0,1,.19-.42L7,8.29v-2a2.1,2.1,0,0,1,.49-1.51A3.24,3.24,0,0,1,10,4a3.26,3.26,0,0,1,2.54.86A2.14,2.14,0,0,1,13,6.32v2l.12.1a.57.57,0,0,1,.19.42V10a.57.57,0,0,1-.41.54l-.17.06-.06.17a6.28,6.28,0,0,1-.86,1.74l-.25.32-.09.1v1.28a1.45,1.45,0,0,0,.81,1.31L15.22,17l.06,0Z" transform="translate(-0.5 -0.5)"/></svg>
                        <strong>{user.name}</strong>
                    </div>
                    <div className="list-group list-group-flush">
                    <Link to={"/clientes/facturacion"} onClick={function() {
                        setOption('facturas');
                        if(window.innerWidth < 767){
                            toggleMenu();
                        }    
                    }}
                    className={`sideclass ${option === 'facturas' ? 'activecus' : ''} list-items-sidebar list-group-item list-group-item-action`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.63 13.57"><title>facturas</title><path d="M12.83,8.19H7.17A.22.22,0,0,0,7,8.42a.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,8.19Z" transform="translate(-4.68 -3.21)"/><path d="M7.17,6.83H9.43a.23.23,0,1,0,0-.45H7.17A.22.22,0,0,0,7,6.61.22.22,0,0,0,7.17,6.83Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,10H7.17a.22.22,0,0,0-.22.23.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,10Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,11.81H7.17A.22.22,0,0,0,7,12a.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,11.81Z" transform="translate(-4.68 -3.21)"/><path d="M12.83,13.62H7.17a.22.22,0,0,0-.22.23.22.22,0,0,0,.22.22h5.66a.22.22,0,0,0,.22-.22A.22.22,0,0,0,12.83,13.62Z" transform="translate(-4.68 -3.21)"/><path d="M12,3.21H4.68V16.79H15.32V6.51Zm.13.78,2.39,2.39H12.15Zm-7,12.34V3.67H11.7V6.83h3.16v9.5Z" transform="translate(-4.68 -3.21)"/></svg>
                        Mis facturas
                    </Link>
                    <Link to={"/clientes/reclamos"} onClick={function() {
                        setOption('reclamos');
                        if(window.innerWidth < 767){
                            toggleMenu();
                        }                        
                    }}
                    className={`sideclass ${option === 'reclamos' || option === 'nuevoReclamo' ? 'activecus' : ''} list-items-sidebar list-group-item list-group-item-action`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12.6"><title>tickets</title><path d="M14.9,3.7H5.1A2.1,2.1,0,0,0,3,5.8v6.07A2.1,2.1,0,0,0,5.1,14h.65l-.41,2a.23.23,0,0,0,.09.23.23.23,0,0,0,.25,0L10.06,14H14.9a2.1,2.1,0,0,0,2.1-2.1V5.8A2.1,2.1,0,0,0,14.9,3.7Zm1.63,8.17A1.63,1.63,0,0,1,14.9,13.5H10a.2.2,0,0,0-.11,0l-4,2.1.37-1.85a.19.19,0,0,0,0-.19A.21.21,0,0,0,6,13.5H5.1a1.63,1.63,0,0,1-1.63-1.63V5.8A1.63,1.63,0,0,1,5.1,4.17h9.8A1.63,1.63,0,0,1,16.53,5.8Z" transform="translate(-3 -3.7)"/></svg> 
                        Tickets Reclamos
                    </Link>
                    <Link to={"/clientes/estado"} onClick={function() {
                        setOption('estado');
                        if(window.innerWidth < 767){
                            toggleMenu();
                        }    
                    }}
                    className={`sideclass ${option === 'estado' ? 'activecus' : ''} list-items-sidebar list-group-item list-group-item-action`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.5 17.03"><title>estado</title><path d="M15.23,1.48a2,2,0,0,0-2,2,1.93,1.93,0,0,0,.25,1l-1.8,1.8a2.67,2.67,0,0,0-3.3,0L6.27,4.19a1.31,1.31,0,0,0,.19-.68A1.35,1.35,0,1,0,5.11,4.86a1.41,1.41,0,0,0,.68-.19L7.87,6.75a2.67,2.67,0,0,0,0,3.3L6.13,11.79a2,2,0,1,0,.67,1.5,2,2,0,0,0-.25-1l1.8-1.79a2.64,2.64,0,0,0,1.31.54V14.5a2,2,0,1,0,.68,0V11.07a2.64,2.64,0,0,0,1.31-.54l1.24,1.23a1.35,1.35,0,1,0,1.16-.66,1.31,1.31,0,0,0-.68.19l-1.24-1.24a2.67,2.67,0,0,0,0-3.3L13.87,5a2,2,0,0,0,1.36.53,2,2,0,0,0,0-4.05Zm-10.79,2a.67.67,0,1,1,1.34,0,.67.67,0,1,1-1.34,0Zm.33,11.13a1.35,1.35,0,1,1,1.35-1.35A1.36,1.36,0,0,1,4.77,14.64Zm6.58,1.85A1.35,1.35,0,1,1,10,15.14,1.35,1.35,0,0,1,11.35,16.49ZM10,10.42a2,2,0,1,1,2-2A2,2,0,0,1,10,10.42Zm4.72,2a.68.68,0,1,1-.67-.67A.67.67,0,0,1,14.72,12.44Zm.51-7.58a1.35,1.35,0,1,1,1.35-1.35A1.35,1.35,0,0,1,15.23,4.86Z" transform="translate(-2.75 -1.48)"/></svg>
                        Estado del servicio
                    </Link>  
                </div>               
                <div className="list-group list-group-flush"></div>
            </div>
            <div id="page-content-wrapper">
                <nav className="navbarcus navbar-light ">
                    <button onClick={toggleMenu}
                    className="btn" id="menu-toggle"><span>&#9776;</span>
                        <span className="d-sm-none">Menu</span>
                    </button>

                    <a href="/login" className="bt-exit">Salir 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><title>arrow-right-circle</title><path d="M7,13.635A6.635,6.635,0,1,0,.365,7,6.642,6.642,0,0,0,7,13.635ZM7,1.028A5.972,5.972,0,1,1,1.028,7,5.979,5.979,0,0,1,7,1.028Z" /><path d="M4.118,7.333H9.081l-1.3,1.3a.332.332,0,0,0,.471.468l1.864-1.865a.33.33,0,0,0,0-.468L8.253,4.9a.331.331,0,0,0-.468.468l1.3,1.3H4.118a.332.332,0,1,0,0,.663Z" /></svg>
                    </a>
                    <div className="user d-none d-sm-block">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19"><title>Bienvenido</title><path d="M19.5,10A9.5,9.5,0,1,0,3.58,17h0l.31.26.06,0q.26.21.51.39l.17.12a5.5,5.5,0,0,0,.57.36l.12.08L6,18.6l0,0a9.8,9.8,0,0,0,2.3.73h.06c.25,0,.51.08.76.1h.1c.25,0,.51,0,.77,0s.51,0,.77,0h.09c.26,0,.51-.06.76-.1h.06A9.82,9.82,0,0,0,14,18.64l.08,0,.62-.32.15-.09.55-.34.19-.14c.15-.11.3-.22.44-.34l.1-.07L16.4,17h0A9.45,9.45,0,0,0,19.5,10ZM1.19,10a8.81,8.81,0,1,1,14.65,6.59,2,2,0,0,0-.31-.19l-2.92-1.46a.78.78,0,0,1-.43-.69v-1L12.4,13a7.37,7.37,0,0,0,.9-1.77A1.26,1.26,0,0,0,14,10V8.81A1.22,1.22,0,0,0,13.71,8V6.38a2.72,2.72,0,0,0-.65-2A3.86,3.86,0,0,0,10,3.26a3.86,3.86,0,0,0-3.06,1.1,2.72,2.72,0,0,0-.65,2V8A1.2,1.2,0,0,0,6,8.81V10a1.25,1.25,0,0,0,.46,1,6.51,6.51,0,0,0,1.07,2.21v1a.78.78,0,0,1-.4.68L4.38,16.39a1.4,1.4,0,0,0-.26.16A8.76,8.76,0,0,1,1.19,10Zm14,7.13-.37.25-.17.11-.5.29-.11.06a9.13,9.13,0,0,1-1.21.51h0c-.22.07-.44.14-.66.19h0c-.23.06-.45.1-.68.14h0c-.21,0-.43.06-.65.08h-.11c-.22,0-.43,0-.65,0s-.44,0-.65,0H9.23c-.22,0-.43,0-.65-.08h0a8.48,8.48,0,0,1-1.34-.34h0l-.65-.25h0l-.59-.28-.08,0-.52-.3-.15-.1-.46-.32,0,0,0,0L7.44,15.5a1.44,1.44,0,0,0,.76-1.28V13l-.08-.1a5.77,5.77,0,0,1-1-2.15l0-.13-.11-.08A.57.57,0,0,1,6.67,10V8.81a.57.57,0,0,1,.19-.42L7,8.29v-2a2.1,2.1,0,0,1,.49-1.51A3.24,3.24,0,0,1,10,4a3.26,3.26,0,0,1,2.54.86A2.14,2.14,0,0,1,13,6.32v2l.12.1a.57.57,0,0,1,.19.42V10a.57.57,0,0,1-.41.54l-.17.06-.06.17a6.28,6.28,0,0,1-.86,1.74l-.25.32-.09.1v1.28a1.45,1.45,0,0,0,.81,1.31L15.22,17l.06,0Z" transform="translate(-0.5 -0.5)"/></svg>
                        Hola, <strong>{user.name}</strong>
                    </div>
                </nav>
                <div className="bandmobilecus d-block d-sm-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 363"><title>logo-02</title><path d="M103.408,160.919l47.927,17.835,6.259,53.716,14.076-44.937,33.588,12.7c9.641,2.764,17.991-2.38,20.608-10.627L262.63,73.912,242.1,65.964l6.387-19.317L153.814,8.127C143.085,4,135.849,3.582,128.006,19.247L91.783,131.558l19.9,7.782Z" fill="#be1d7b" fillRule="evenodd"/><path d="M186.248,111.33c13.034,5.9,21.6,20.753,20.213,37.293l11.006.962c1.554-18.525-6.264-35.46-19.114-45.054,14.261-7.225,24.787-22.557,26.342-41.083l-11.008-.961C212.375,78.122,202.55,90.729,189.8,95.063a17.025,17.025,0,0,1,.676,6.432,16.521,16.521,0,0,1-4.227,9.835Zm-8.694-22.719c5.779.5,10.025,6.139,9.485,12.584s-5.665,11.26-11.444,10.756-10.027-6.14-9.486-12.585,5.665-11.26,11.445-10.755Zm-12.938,3.837c-11.347-6.686-18.531-20.5-17.252-35.755l-11.006-.962c-1.554,18.525,6.264,35.461,19.114,45.053-14.261,7.226-24.787,22.558-26.342,41.083l11.008.962c1.359-16.2,11.856-29.147,25.28-33.012a16.569,16.569,0,0,1-2.745-10.75,16.972,16.972,0,0,1,1.943-6.619Zm-9.8,70.289-10.8-.943,2-23.786c2.264-15.007,11.939-22.964,22.231-25.1a12.769,12.769,0,0,0,15.046.89c9.668,3.377,18.153,12.9,18.059,30.409l-1.882,22.432-10.761-.94,1.956-23.478c.317-8.58-5.6-16.769-15.452-17.571-10.678-1.018-18.154,6.787-18.545,15.557l-1.852,22.531ZM165.148,39.621,163.22,62.146c-1.075,8.71,4.992,17.7,15.684,18.546,9.841.919,17.037-6.125,18.154-14.634l1.984-23.476,10.76.94L207.92,65.954c-2.5,15.3-10.6,23.259-19.43,26.021a13.574,13.574,0,0,0-10.616-7.2,13.358,13.358,0,0,0-11.168,4.669c-8.223-4.6-14.586-13.59-14.349-26.984l2-23.786Z" fill="#fff" fillRule="evenodd"/><path d="M3.687,293.459l.2-62.763,13.126-.057-.186,58.807,55.941-.242c7.23-.173,10.13,5.045,9.646,14.659l-70.592.306.034-10.746-8.168.036Zm241.849-42.984.02-6.125-52.508.227-.186,58.806-13.126.058q.029-9.19.058-18.377t.058-18.377q.03-9.187.058-18.377.018-5.185.033-10.375c.014-4.5,2.935-8,8.939-8.041l61.273-.264-.027,8.926,8.572-.037L258.635,259,233.6,275.225,258.5,303.1l-18.6.08-34.335-38.637,18.421-.08,21.55-13.988Zm15.846,52.613.2-61.753,11.45-.05.037-11.755,67.311-.291-.047,14.7-65.632.285-.047,14.7,52.506-.228-.046,14.7-52.507.227-.047,14.7,65.634-.285c.229,7.322-1.988,12.821-9.019,14.74l-69.789.3Zm81.649-.355.14-44.1,5.976-.025-.026,8.214,7.15-.031-.066,21.189,52.505-.229.141-44.1-55.789.24-9.844.043.046-14.7,72.2-.313L422,236.236l-.171,54.105q-.451,11.563-10.759,12.1l-68.039.294ZM132.2,230.14l31.86,73.368-14.592.065L124.86,246.907l-22.825,52c-1.286,2.935-2.374,5.273-7.348,4.9l-9.385.042,27.435-62.5,10.771-.048.036-11.124Z" fill="#161814" fillRule="evenodd"/><path d="M422,355.425l-2.988,0-.027-13.563-11.951.025.028,13.564-2.988.006-.036-16.955,17.927-.037Zm-23.909-3.341-.021-10.173-11.951.025.021,10.174Zm-14.93,3.422-.036-16.954,17.926-.038.036,16.955Zm-6.012-16.941,2.988-.007.035,16.955-2.987.007Zm-20.913.044,17.926-.039.007,3.392-14.939.031.021,10.173,14.939-.032.007,3.39-17.926.04Zm-10.293.022,7.34,16.938-3.32.008-5.669-13.083L338.678,355.6l-3.321.008,7.27-16.971Zm-24.03,17.005-.028-13.564-7.47.017-.007-3.391,17.927-.038.006,3.391-7.468.016.027,13.563ZM311.42,338.705l.036,16.954-17.927.038-.036-16.954,2.988-.007.03,13.562,11.95-.024-.03-13.564Zm-35.837,7.705,11.952-.025-.01-4.239-11.95.024Zm-3-7.623,17.927-.038.023,11.019-14.939.032.012,5.935-2.987.007Zm-2.952,16.961-2.987,0-.025-11.63-6.826,9.951h-1.245l-6.868-9.921.024,11.632-2.987.007-.037-16.955,3.113-.007,7.367,10.626,7.322-10.657,3.113-.006Zm-26.9-3.334-.021-10.173-11.951.025.021,10.172ZM227.8,355.837l-.035-16.955,17.926-.038.036,16.953Zm-20.951-16.911,17.927-.037.007,3.39-14.938.031.022,10.173,14.939-.032.006,3.392-17.926.038Zm-25.394.055,4.482-.01.01,5.086-4.481.009Zm.026,11.867,4.48-.009.012,5.086-4.482.01ZM173.986,339l4.481-.01.011,5.087-4.482.009Zm.025,11.869,4.481-.01.01,5.086-4.479.01Zm-31.36,5.153-.03-13.564-7.468.016-.008-3.392,17.927-.037.008,3.391-7.471.015.03,13.565Zm-28.383.059-.036-16.954,17.926-.038.007,3.392-14.939.031.009,3.39,11.95-.024.007,3.39-11.951.026.007,3.39,14.939-.031.007,3.391Zm-2.988.007-2.988.007-.028-13.563-11.95.024.027,13.565-2.988,0-.036-16.952,17.927-.04Zm-23.927-12.1,0-1.412L75.4,342.6l.029,13.564-2.987,0q-.006-2.118-.01-4.237t-.009-4.239q0-2.121-.01-4.239t-.008-4.238l17.927-.04.013,6.783-5.678,3.73,5.7,6.442-4.233.01-7.862-8.93,4.193-.01ZM51.526,356.21l-.036-16.954,17.926-.039.009,3.392-14.939.031.006,3.391,11.951-.025.009,3.39-11.952.026.007,3.391,14.939-.032.007,3.39Zm-13.445.029-.028-13.564-7.47.016-.007-3.391,17.927-.039.007,3.392-7.468.015.027,13.564Zm-10.456.021-2.988.007L24.608,342.7l-11.949.025.027,13.564L9.7,356.3l-.036-16.954,17.927-.039Zm-23.938-16.9,2.988,0,.037,16.954-2.988.006Z" fill="#161814"/></svg>
                </div>
                <div className="container-fluid">
                    <SectionCustomer/>
                </div>
            </div>
        </div>
    );
}

export default Home;