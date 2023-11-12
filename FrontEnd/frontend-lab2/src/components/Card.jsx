import "./Card.css"
import {Link} from "react-router-dom";


function Card(props){
    return (
    <div className="Card">
        <Link to={props.path}><h2>{props.titulo}</h2></Link>
        <p>{props.descripcion}</p>
    </div>
    );
}
export default Card;