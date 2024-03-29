import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
// import Recaptcha from 'react-google-invisible-recaptcha';
import dataIds from "./customersIds.json";
import dataPass from "./customersPass.json";
import { loginispcubeActions } from "../../store";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    // const recaptchaRef = React.createRef();
    let bg = document.body;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkLogin, setCheckLogin] = useState(true);
    const [userChecked, setUserChecked] = useState(false);
    // const [recap, setRecap] = useState('');
    const [showSpinner, setShowSpinner] = useState(false);
    let elem = document.getElementById('inputusername');


    
    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    useEffect(() => {
        if(dataIds.customerId.includes(username)){
            if(elem){
                elem.style = 'border: 2px solid #9fec7e !important;'
                elem.style = 'box-shadow: 0 0 0 0.2rem #60ea7b !important;'
            }
            setUserChecked(true);
        } else {
            if(elem){
                elem.style.border = "";
                elem.style.boxShadow = "";
            }
        }
    // eslint-disable-next-line
    },[username])

    const handleLogin = async () => {
            let user = dataIds.customerId.includes(username);
            let pass = dataPass.customerPass.includes(password);
            setShowSpinner(true);        
            bg.style.opacity = 0.5;  
            if(user && pass){
                await fetch(`https://apilared.ispcube.com/index.php/customers?page=1&limit=1&q=${username}`,{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
                        'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
                    }).then(response => response.json())
                    .then(data => {
                        if(data && data.data.length > 0 && data.data[0].webpass === password){
                            dispatch(loginispcubeActions.authenticated(true));
                            dispatch(loginispcubeActions.setUser(data.data[0]));
                            setTimeout(()=> {
                                history.push('/clientes/facturas');
                            },1500);
                        } else {
                            setCheckLogin(false);
                            
                        }
                    })
            } else {
                setCheckLogin(false);
                setPassword('');
            }      
            setShowSpinner(false);                     
            bg.style.opacity = "";         
    };

    // const onSubmit = () => {
    //     recaptchaRef.current.execute();
    // }

    // const onResolved = () => {    
    //     console.log(recaptchaRef.current.getResponse())
    //     setRecap(recaptchaRef.current.getResponse());     
    // }  
     

    return (

        <div className="login">
            <div className="bandtop"></div>
            <div className="container">
                <div className="logo"><Link to={"/"}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 427 363"><title>logo-02</title><path d="M103.408,160.919l47.927,17.835,6.259,53.716,14.076-44.937,33.588,12.7c9.641,2.764,17.991-2.38,20.608-10.627L262.63,73.912,242.1,65.964l6.387-19.317L153.814,8.127C143.085,4,135.849,3.582,128.006,19.247L91.783,131.558l19.9,7.782Z" fill="#be1d7b" fillRule="evenodd"/><path d="M186.248,111.33c13.034,5.9,21.6,20.753,20.213,37.293l11.006.962c1.554-18.525-6.264-35.46-19.114-45.054,14.261-7.225,24.787-22.557,26.342-41.083l-11.008-.961C212.375,78.122,202.55,90.729,189.8,95.063a17.025,17.025,0,0,1,.676,6.432,16.521,16.521,0,0,1-4.227,9.835Zm-8.694-22.719c5.779.5,10.025,6.139,9.485,12.584s-5.665,11.26-11.444,10.756-10.027-6.14-9.486-12.585,5.665-11.26,11.445-10.755Zm-12.938,3.837c-11.347-6.686-18.531-20.5-17.252-35.755l-11.006-.962c-1.554,18.525,6.264,35.461,19.114,45.053-14.261,7.226-24.787,22.558-26.342,41.083l11.008.962c1.359-16.2,11.856-29.147,25.28-33.012a16.569,16.569,0,0,1-2.745-10.75,16.972,16.972,0,0,1,1.943-6.619Zm-9.8,70.289-10.8-.943,2-23.786c2.264-15.007,11.939-22.964,22.231-25.1a12.769,12.769,0,0,0,15.046.89c9.668,3.377,18.153,12.9,18.059,30.409l-1.882,22.432-10.761-.94,1.956-23.478c.317-8.58-5.6-16.769-15.452-17.571-10.678-1.018-18.154,6.787-18.545,15.557l-1.852,22.531ZM165.148,39.621,163.22,62.146c-1.075,8.71,4.992,17.7,15.684,18.546,9.841.919,17.037-6.125,18.154-14.634l1.984-23.476,10.76.94L207.92,65.954c-2.5,15.3-10.6,23.259-19.43,26.021a13.574,13.574,0,0,0-10.616-7.2,13.358,13.358,0,0,0-11.168,4.669c-8.223-4.6-14.586-13.59-14.349-26.984l2-23.786Z" fill="#fff" fillRule="evenodd"/><path d="M3.687,293.459l.2-62.763,13.126-.057-.186,58.807,55.941-.242c7.23-.173,10.13,5.045,9.646,14.659l-70.592.306.034-10.746-8.168.036Zm241.849-42.984.02-6.125-52.508.227-.186,58.806-13.126.058q.029-9.19.058-18.377t.058-18.377q.03-9.187.058-18.377.018-5.185.033-10.375c.014-4.5,2.935-8,8.939-8.041l61.273-.264-.027,8.926,8.572-.037L258.635,259,233.6,275.225,258.5,303.1l-18.6.08-34.335-38.637,18.421-.08,21.55-13.988Zm15.846,52.613.2-61.753,11.45-.05.037-11.755,67.311-.291-.047,14.7-65.632.285-.047,14.7,52.506-.228-.046,14.7-52.507.227-.047,14.7,65.634-.285c.229,7.322-1.988,12.821-9.019,14.74l-69.789.3Zm81.649-.355.14-44.1,5.976-.025-.026,8.214,7.15-.031-.066,21.189,52.505-.229.141-44.1-55.789.24-9.844.043.046-14.7,72.2-.313L422,236.236l-.171,54.105q-.451,11.563-10.759,12.1l-68.039.294ZM132.2,230.14l31.86,73.368-14.592.065L124.86,246.907l-22.825,52c-1.286,2.935-2.374,5.273-7.348,4.9l-9.385.042,27.435-62.5,10.771-.048.036-11.124Z" fill="#161814" fillRule="evenodd"/><path d="M422,355.425l-2.988,0-.027-13.563-11.951.025.028,13.564-2.988.006-.036-16.955,17.927-.037Zm-23.909-3.341-.021-10.173-11.951.025.021,10.174Zm-14.93,3.422-.036-16.954,17.926-.038.036,16.955Zm-6.012-16.941,2.988-.007.035,16.955-2.987.007Zm-20.913.044,17.926-.039.007,3.392-14.939.031.021,10.173,14.939-.032.007,3.39-17.926.04Zm-10.293.022,7.34,16.938-3.32.008-5.669-13.083L338.678,355.6l-3.321.008,7.27-16.971Zm-24.03,17.005-.028-13.564-7.47.017-.007-3.391,17.927-.038.006,3.391-7.468.016.027,13.563ZM311.42,338.705l.036,16.954-17.927.038-.036-16.954,2.988-.007.03,13.562,11.95-.024-.03-13.564Zm-35.837,7.705,11.952-.025-.01-4.239-11.95.024Zm-3-7.623,17.927-.038.023,11.019-14.939.032.012,5.935-2.987.007Zm-2.952,16.961-2.987,0-.025-11.63-6.826,9.951h-1.245l-6.868-9.921.024,11.632-2.987.007-.037-16.955,3.113-.007,7.367,10.626,7.322-10.657,3.113-.006Zm-26.9-3.334-.021-10.173-11.951.025.021,10.172ZM227.8,355.837l-.035-16.955,17.926-.038.036,16.953Zm-20.951-16.911,17.927-.037.007,3.39-14.938.031.022,10.173,14.939-.032.006,3.392-17.926.038Zm-25.394.055,4.482-.01.01,5.086-4.481.009Zm.026,11.867,4.48-.009.012,5.086-4.482.01ZM173.986,339l4.481-.01.011,5.087-4.482.009Zm.025,11.869,4.481-.01.01,5.086-4.479.01Zm-31.36,5.153-.03-13.564-7.468.016-.008-3.392,17.927-.037.008,3.391-7.471.015.03,13.565Zm-28.383.059-.036-16.954,17.926-.038.007,3.392-14.939.031.009,3.39,11.95-.024.007,3.39-11.951.026.007,3.39,14.939-.031.007,3.391Zm-2.988.007-2.988.007-.028-13.563-11.95.024.027,13.565-2.988,0-.036-16.952,17.927-.04Zm-23.927-12.1,0-1.412L75.4,342.6l.029,13.564-2.987,0q-.006-2.118-.01-4.237t-.009-4.239q0-2.121-.01-4.239t-.008-4.238l17.927-.04.013,6.783-5.678,3.73,5.7,6.442-4.233.01-7.862-8.93,4.193-.01ZM51.526,356.21l-.036-16.954,17.926-.039.009,3.392-14.939.031.006,3.391,11.951-.025.009,3.39-11.952.026.007,3.391,14.939-.032.007,3.39Zm-13.445.029-.028-13.564-7.47.016-.007-3.391,17.927-.039.007,3.392-7.468.015.027,13.564Zm-10.456.021-2.988.007L24.608,342.7l-11.949.025.027,13.564L9.7,356.3l-.036-16.954,17.927-.039Zm-23.938-16.9,2.988,0,.037,16.954-2.988.006Z" fill="#161814"/></svg>
                    </Link>
                </div>
            </div>
            <div className="container welcome">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="titlesh1">Hola,<br/>
                        Bienvenido a <br/>
                        La Red</h1>
			        </div>
                    <div className="col-sm">
                        <form>
                            <h2 className="titlesh2">Acceso a clientes</h2>

                            <label htmlFor="">DNI/CUIL/CUIT</label>
                            <input 
                                id="inputusername"
                                placeholder="DNI/CUIL/CUIT"
                                required
                                type="text" 
                                className="form-control"
                                autocomplete="off"
                                value={username}   
                                style={{borderColor: checkLogin ? "" : "red"}}                             
                                onChange={handleChange}
                            />
                            <label htmlFor="">Contraseña</label>
                            <input
                                placeholder="********"
                                required
                                type="password" 
                                autocomplete="off"
                                className="form-control"
                                value={password}
                                style={{borderColor: checkLogin ? "" : "red"}}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {/* <label htmlFor="">RECAPTCHA</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={recap}
                                // readOnly={true}
                                onChange={(e) => setRecap(e.target.value)}
                            /> */}


                            {/* <Recaptcha
                                ref={recaptchaRef}
                                sitekey="6LcFviAaAAAAADLbOMXmLy1GzdOBYRufPxMRYLuB"
                                onResolved={onResolved}
                            /> */}

                            <Button 
                            disabled={!userChecked && !password}
                            className="btn-clientes" 
                            onClick={handleLogin}
                            >
                                Ingreso
                            </Button><br/>  

                            <p>Olvidaste tu contraseña? <a style={{color: 'black'}} href="https://wa.me/542314404320">
                                Comunicate con nosotros.</a></p>
                            
                        </form>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-legal">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md copyfooter">
                                LA RED. Todos los derechos reservados.
                            </div>
                        </div>
                    </div>
                </div>
            </footer> 
            <Spinner 
            style={{display: showSpinner ? 'flex' : 'none',           
                    position: 'absolute',
                    left: '45%',
                    top: '35%'}} animation="border" role="status">
                             <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    );
}

export default Login;