import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, info } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details" className="noStyle">
                  <img src={img} alt="productimage" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0 disabled"> in cart</p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/*product footer*/}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">€</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparrent;
    transition: all 0.2s linear;
    height: 100%;
  }
  .card-footer {
    background: transparrent;
    border-top: transparrent;
    transition: all 0.2s linear;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    text-align: center;
  }
  .card-img-top {
    height: auto;
    width: 100%;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
    transition: all 0.2s linear;
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainGreen);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 5px 0 0 0;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--lightGreen);
    cursor: pointer;
    transition: all 0.2s linear;
  }
`;
