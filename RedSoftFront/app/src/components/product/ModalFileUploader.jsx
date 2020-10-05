import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FileUploader from "./FileUploader";
import {Link} from "react-router-dom";


export default function ModalFileUploader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        handleClick();
    }

    function handleClick() {
        const elemento = document.getElementById("fileupload")
        if (elemento) {
            elemento.click()
        }
    }

    return (
        <>
            <Link className="btn-sm"  style={{marginLeft: '750px'}} onClick={handleShow}>
                Subir Imagen
            </Link>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton style={{backgroundColor: '#f5e8e8'}}>
                    <Modal.Title>Cargar imagen de producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FileUploader/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Volver
                    </Button>
                    <Button type="submit" variant="success" onClick={handleClose} formenctype="multipart/form-data">
                        Subir imagen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
