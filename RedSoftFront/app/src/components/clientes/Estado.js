import React, { useState } from 'react';

const Estado = () => {

    const [state, setState] = useState('s2');

    function ServiceState() {
        switch (state) {
            case "s1":
                return <h4>SERVICIO INTERRUMPIDO</h4>
                break;
            case "s2":
                return <h4>SERVICIO SIN INCONVENIENTES</h4>
                break;
            case "s3":
                return <h4>CON ALGUNOS INCONVENIENTES</h4>
                break;
            default:
                break;
        }
    }

    return (
        <>
            <h1 className="titlesh1">Estado del servicio</h1>

            <h2 className="titlesh2">Aquí podrás verificar el estado del servicio</h2>
            <p>De esta forma podrás verificar si existen inconvenientes a nivel general.</p>

            {/* Estados:
            s1 - Rojo
            s2 - Verde
            s3 - Naranja  */}

            <div className={`estado ${state}`}>
                <h5>ESTADO</h5>
                <ServiceState/>
            </div>
            <table className="table table-striped table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Hora</th>
                        <th scope="col">Zona afectada</th>
                        <th scope="col">Tiempo resolución</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <th scope="row">03/04/2020</th>
                        <td>22:30</td>
                        <td>Planta urbana de Bolívar</td>
                        <td>2hs</td>
                    </tr> */}
                </tbody>
            </table>

            {/* <p>Disculpe las molestias ocasionadas.</p> */}
        </>
    );
}

export default Estado;