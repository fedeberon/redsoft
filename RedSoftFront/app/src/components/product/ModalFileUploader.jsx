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

            <a onClick={handleShow}>
                Subir Imagen
            </a>
            <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton style={{backgroundColor: '#f5e8e8'}}>
                    <Modal.Title>Cargar imagen de producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <form id="form" enctype="multipart/form-data" method="post" >
                            <input type="file" id="fileupload" name="file" required/><br/>
                            <div class="preview-image">
                                <img id="image"/>
                            </div>
                            <input type="submit" value="Cargar"/>
                        </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light" onClick={handleClose}>
                        Volver
                    </Button>
                    <Button type="submit" variant="success" onClick={handleClose}>
                        Subir imagen
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
