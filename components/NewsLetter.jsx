import React from "react";

const NewsLetter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="cta">
            <h4>Fique atualizado, saiba antes.</h4>
            <p>
              Assine gratuitamente nossa newsletter para receber notícias do mercado imobiliário direto em seu e-mail.
            </p>
            <form action="GET" className="flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu melhor e-mail"
              />
              <button className="btn d-block d-md-inline-block w-md-auto w-100">
                Assinar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
