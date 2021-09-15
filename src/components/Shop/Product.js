import React from "react";
import { Link } from 'react-router-dom';

class Product extends React.Component {

  render() {
    const { id, name, image, price, desciption } = this.props;
    return (

      <div className="col-6 col-sm-4" key={id} style={{ padding: '25px 25px' }}>
        <div className="card" style={{ padding: '25px 25px' }}>
          <img className="card-img-top" src={image} />
          <div className="card-content">
            <div className="card-body">
              <p
                className="card-title"
                style={{ fontSize: '20px' }}
              >
                {name.substring(0, 18) + (name.length > 18 ? '...' : '')}
              </p>
              <span className="tag is-info is-light" style={{ fontSize: '15px' }}>{price}</span>
              <Link style={{marginLeft: "20px"}} to={`/productDetail/${id}`} className="btn-info float-end"><button className="btn btn-info">View</button></Link>
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Product;