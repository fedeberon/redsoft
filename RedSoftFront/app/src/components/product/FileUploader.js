import React, {useState} from 'react';
import Header from '../header/Header';
import FooterComponent from '../home/FooterComponent';


const FileUploader = () =>  {

    const [file, setFile]  = useState();
    const [message, setMessage] = useState('Archivo cargado correctamente!');
    const [showingMessage, setShowingMessage] = useState(false);
    const [imageUrl, setImageUrl] = useState('');

    const handlePost = async() => {

        let formData = new FormData();
        formData.append("file", file[0]);

        setImageUrl(`http://179.43.120.136:8080/products/images/${file[0].name}`);

        console.log(imageUrl);
        if(imageUrl.endsWith(file[0].name)){
            alert('Archivo subido recientemente')
        } else {
        await fetch(`http://localhost:8886/file/uploadFile`, {
            method: 'POST',
            headers: {
                'Accept': '*/*'},
            body: formData,
            }).then(response => {
                if(response.status === 200){
                    setMessage('Archivo cargado correctamente!');
                    setShowingMessage(true);
                    setTimeout(() => {
                        setShowingMessage(false)
                    },10000)
                } else {
                    setMessage('Ocurrió un error al cargar el archivo');
                    setShowingMessage(true);
                    setTimeout(() => {
                        setShowingMessage(false)
                    },10000)
                }
            });
        }
    }

        return (
            <>
            <Header/>

            <div>
                <form 
                    method="POST" 
                    enctype="multipart/form-data" 
                    id="image-form"
                >
                        <h3>Subir imágenes de productos</h3> <br/>
                        <p>Sólo imágenes en formato jpg</p>
                        <input onChange={(event) => setFile(event.target.files)} type="file" name="file" class="file" id="file-object" accept="image/*"/>
                        <button id="button-upload-file"
                            disabled={!file}
                            onClick={handlePost}className="btn btn-primary" 
                            type="button">
                            Guardar
                        </button>
                        <h5 style={{display: showingMessage ? 'block' : 'none'}}>{message}</h5>
                        <input id="link-url" type="text" disabled value={imageUrl}/>
                </form>
            </div>
            <FooterComponent/>
            </>
    );
}


export default FileUploader;