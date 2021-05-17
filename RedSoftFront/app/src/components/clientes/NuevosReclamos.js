import React, {useState} from 'react';
import { useSelector } from 'react-redux';

const NuevosReclamos = () => {

    const user = useSelector((state) => state.loginispcube.user);
    const [subject, setSubject] = useState('');
    const [category, setCategory] = useState(0);
    const [priority, setPriority] = useState(0);
    const [mensaje, setMensaje] = useState('');
    const [msgSent, setMsgSent] = useState(true);
    let object = document.getElementById('infomsg');

    const categories = {
        102: 'Cambio de domicilio. (MUDANZA)',
        105: 'Reclamos por problema de conectividad/otros (especifique)',
        108: 'Problema con el Ancho de Banda',
        109: 'Cambio de RJ 45',
        110: 'Cambio de instalación',
        111: 'Cableado averiado',
        112: 'Problemas con el Router',
        116: 'Ampliación de red interna (conectar play o televisores por cable)',
        117: 'Colocación de router secundario',
        118: 'Antena caída',
        121: 'Cambio de contraseña de Wifi',
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        let json = {};
        json.idcustomer = user.idcustomer;
        json.details = `Asunto: ${subject} >> Mensaje: ${mensaje}`;
        json.idcategory = category;
        json.idpriority = priority;     

        await fetch(`https://apilared.ispcube.com/index.php/tickets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*',
                'api-key': 'P2MvAryA0zqvoH4ZsKkEHVgYkFZCMmh7gE058gj5zRLAnfwDV4401Am',
                'api-token': 'dkC0iHHHQwjfIiEyLo3RVeUDQo1SZKgv'},
            body: JSON.stringify(json)
        }).then(response => {
            if(response.ok) {
                object.innerHTML = "Mensaje enviado exitosamente!";
                object.style.color = "green";
                setMsgSent(true);
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
        });
        setSubject('');
        setCategory('');
        setPriority('');
        setMensaje('');
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
                                    value={subject} 
                                    type="text" 
                                    className="form-control"
                                    onChange={(e) => setSubject(e.target.value)}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="">Categoría</label>
                                    <select 
                                    value={category} 
                                    className="form-control" 
                                    id=""
                                    onChange={(e) => setCategory(e.target.value)}
                                    >
                                            <option key='none' value={0}>Seleccionar Categoría</option>
                                        {Object.entries(categories).map(([key, value]) => (
                                            <option key={key} value={key}>{value}</option>
                                        ))}
                                    </select>
                                </div><br/>
                                <div className="col-sm-6">
                                    <label htmlFor="">Prioridad</label>
                                    <select 
                                    value={priority} 
                                    className="form-control" 
                                    id=""
                                    onChange={(e) => setPriority(e.target.value)}
                                    >
                                            <option key='none' value={0}>Seleccionar Prioridad</option>
                                            <option key={1} value={1}>Baja</option>
                                            <option key={2} value={2}>Alta</option>
                                            <option key={3} value={3}>Normal</option>
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
                                    disabled={!mensaje || !subject || category < 1 || priority < 1}
                                    type="submit" 
                                    className="btn-clientes btn btn-primary"
                                    >
                                        Enviar
                                    </button>
                                    <p id="infomsg" 
                                    style={{
                                        marginLeft: '25px', 
                                        display: msgSent ? 'inline' : 'none',
                                        color: msgSent ? 'green' : 'red'
                                    }}>
                                        {object}
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