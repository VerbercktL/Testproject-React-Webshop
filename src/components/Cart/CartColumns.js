import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">producten</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">productnaam</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">prijs</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">hoeveelheid</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">verwijder</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Totaal</p>
        </div>
      </div>
    </div>
  );
}
