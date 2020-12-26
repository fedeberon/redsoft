import React from 'react';

const Estado = () => {

    return (
        <>
            <h1>Estado del servicio</h1>


            <h2>Aquí podrás verificar el estado del servicio</h2>
            <p>De esta forma podrás verificar si el inconveniente técnico es general, zonal o particular.</p>

            
            {/* Estados:
            s1 - Rojo
            s2 - Verde
            s3 - Naranja  */}
            
            <div class="estado s1">
            <h5>ESTADO</h5>
            <h4>SERVICIO INTERRUMPIDO</h4>
            </div>
            <table class="table table-striped table-responsive-sm">
            <thead>
            <tr>
                <th scope="col">Fecha</th>
                <th scope="col">Hora</th>
                <th scope="col">Zona afectada</th>
                <th scope="col">Tiempo resolución</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">03/04/2020</th>
                <td>22:30</td>
                <td>Planta urbana de Bolívar</td>
                <td>2hs</td>
            </tr>
            </tbody>
            </table>

            <p>Disculpe las molestias ocasionadas.</p>
        </>
    );
}

export default Estado;