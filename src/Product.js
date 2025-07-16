import { Link } from "react-router-dom";

function Product(props){
    return(<>
          
    <div className="card" style={{width:400}} id="product">
  <img className="card-img-top" src={props.img1} alt="img"/>
  <div className="card-body">
    <h4 className="card-title">{props.id}</h4>
    <p className="card-text">{props.name}</p>
    <p className="card-text">{props.category}</p>
    <p className="card-text">{props.description}</p>
    <p className="card-text">{props.price}</p>
    <Link to={`/product/${props.id}`} className="btn btn-primary">ReadMore</Link>
  </div> //to send id to url
</div>
    </>
    );
}
export default Product;