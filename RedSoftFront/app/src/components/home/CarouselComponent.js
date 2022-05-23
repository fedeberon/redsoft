import React,{Component} from "react";

class CarouselComponent extends Component {

    

    state = {
        x : 0,
        n : "next",
        p : "prev",
    }

    changeImage(e, value) {
       e.preventDefault();
        // console.log(value)
    }

    componentDidUpdate(prevProps) {
        // si los props cambiaron
        if (prevProps.focus !== this.props.focus) {
          // movemos el carrusel para la izquierda o derecha (-1 izquierda, 1 derecha)
          // ej. está en 2 y antes estaba en 1 entonces se mueve a la derecha
          this.move(this.props.focus - prevProps.focus);
        }
      }

    render (){
        const mystyle = {
            height:"auto",
            width:"110%",
	        position: "relative",
	        right: "5%",
	        height: "auto",
          };
        

        return (
            <div className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {/*<div className="carousel-item active">
                        <img style={{cursor: 'pointer'}} src="img/slider-desktop-01.jpg" alt="img1" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img style={{cursor: 'pointer'}} src="img/slider-desktop-02.png" alt="img2" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img style={{cursor: 'pointer'}} src="img/slider-desktop-03.png" alt="img3" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img style={{cursor: 'pointer'}} src="img/slider-desktop-03.png" alt="img3" className="d-block w-100"/>
                    </div>*/}
                    <div className="carousel-inner">
                        <video  autoPlay loop muted style={mystyle}>
                            <source src="videos/laRed.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>
                {/* <a className="carousel-control-prev" href="" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
            </div>
        );
    }
}
export default CarouselComponent;