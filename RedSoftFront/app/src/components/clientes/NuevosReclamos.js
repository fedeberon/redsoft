import React from 'react';

const NuevosReclamos = () => {

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
                                    <label for="">Asunto</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                <div className="col-sm-6">
                                    <label for="">Area</label>
                                    <select className="form-control" id="">
                                    <option>Soporte técnico</option>
                                    <option>Cobranzas</option>
                                    <option>Administración</option>
                                    </select>
                                </div>
                                </div>
                                <div className="form-row">
                                <div className="col">
                                    <label for="">Mensaje</label>
                                    <textarea className="form-control" id="" rows="5"></textarea>
                                    <button type="submit" className="btn-clientes btn btn-primary">Enviar</button>
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