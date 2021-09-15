import React from 'react'
import { connect } from 'react-redux';
import { fetchProduct } from '../../actions';


class ProductDetail extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id);
    console.log(this.props.product);
  }

  renderDetails() {
    return (
      <div className="boxi">
        <div className="pic">
            <img style={{width:  '100%', maxWidth: '400px',height:'auto'}} src={this.props.product.media.source}/>
        </div>
        <div className="content-product">
            <h2 className="title">{this.props.product.name}</h2>
            <span>{this.props.product.description}</span>
            <button class="my-btn">Add to cart</button>
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.product) {
      return (<div>Loading</div>);
    }
    else {
      return (
        <div>
          {this.renderDetails()}
        </div>
      );
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return { product: state.shop[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);