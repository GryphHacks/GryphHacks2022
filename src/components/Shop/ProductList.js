import React from 'react';
import { fetchProducts, fetchProduct } from '../../actions';
import { connect } from 'react-redux';
import Product from './Product';

class ProductList extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  renderProducts() {
    return this.props.products.map(product => {
      return (
          <Product
            id={product.id}
            name={product.name}
            image={product.media.source}
            price={product.price.formatted_with_symbol}
            description={product.description}           
          />          
      );
    })
  }

  render() {
    return (
      <div className="row">
        {this.renderProducts()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: Object.values(state.shop) }
}

export default connect(mapStateToProps, { fetchProducts, fetchProduct })(ProductList);
