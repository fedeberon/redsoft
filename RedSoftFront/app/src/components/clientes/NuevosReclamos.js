import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const NuevosReclamos = () => {

    const user = useSelector((state) => state.loginispcube.user);
    const [asunto, setAsunto] = useState('');
    const [area, setArea] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [msgSent, setMsgSent] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        let object = document.getElementById('infomsg');
        let json = {};
        json.idcustomer = user.idcustomer;
        json.details = `Asunto: ${asunto} >> Mensaje: ${mensaje}`;
        json.idcategory = area;

        let response = await fetch(`http://online3.ispcube.com:8080/index.php/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
                'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
            body: JSON.stringify(json)
        }).then(response => response)
        .then(data => console.log(data))

        if(response.ok) {
            object.innerHTML = "Mensaje enviado exitosamente!";
            object.style.color = "green";
            setMsgSent(true)
            setTimeout(()=> {
                setMsgSent(false)
            },10000);
        } else {
            object.innerHTML = "Error al enviar. Completá todos los campos";
            object.style.color = "red";
            setMsgSent(true)
            setTimeout(()=> {
                setMsgSent(false)
            },10000);
        }
    }

    return (
        <>
            <h1 className="titlesh1">Tickets reclamos</h1>


            <h2 className="titlesh2">Nuevo Ticket</h2>
            <div className="container-fluid box">
                <div className="row">
                    <div className="col-sm">
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <label htmlFor="">Asunto</label>
                                    <input 
                                    value={asunto} 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setAsunto(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">Area</label>
                                    <select 
                                    value={area} 
                                    className="form-control" 
                                    id=""
                                    onChange={(e) => setArea(e.target.value)}
                                    >
                                    <option value="soporte">Soporte técnico</option>
                                    <option value="cobranzas">Cobranzas</option>
                                    <option value="admin">Administración</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="col">
                                    <label htmlFor="">Mensaje</label>
                                    <textarea 
                                    value={mensaje} 
                                    onChange={(e)=> setMensaje(e.target.value)}
                                    className="form-control" 
                                    id="" 
                                    rows="5"></textarea>
                                    <button 
                                    disabled
                                    onClick={(e) => onSubmit(e)} 
                                    disabled={!mensaje && !asunto && area}
                                    type="submit" 
                                    className="btn-clientes btn btn-primary"
                                    >
                                        Enviar
                                    </button>
                                    <p id="infomsg" style={{marginLeft: '25px', color: 'green', display: msgSent ? 'inline' : 'none'}}>
                                        Mensaje enviado exitosamente!
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NuevosReclamos;