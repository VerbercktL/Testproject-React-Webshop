import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { logDOM } from "@testing-library/react";

export default class Details extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {(value) => {
            const {
              id,
              company,
              img,
              info,
              price,
              title,
              inCart,
            } = value.detailProduct;
            return (
              <div className="container py-5">
                {/* title */}
                <div className="row">
                  <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                {/* end title */}
                {/* Product info */}
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={img} className="image-fluid" alt="product" />
                  </div>
                  {/* Product text */}
                  <div className="col-10 mx-auto col-md-6 my-3 text-captialize">
                    <h2>model:{title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      Ontwikkeld door:{" "}
                      <span className="text-uppercase">{company}</span>
                    </h4>
                    <h4 className="text-blue">
                      <strong>
                        prijs: <span>€</span>
                        {price}
                      </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bbold mt-3 mb-0">
                      Productinformatie:
                    </p>
                    <p className="text-muted lead">{info}</p>
                    {/* buttons */}
                    <div>
                      <Link to="/">
                        <ButtonContainer back>
                          terug naar producten
                        </ButtonContainer>
                      </Link>
                      <ButtonContainer
                        cart
                        disabled={inCart ? true : false}
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        {inCart ? "inCart" : "add to cart"}
                      </ButtonContainer>
                    </div>
                  </div>
                </div>
                {/* end Product info */}
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
