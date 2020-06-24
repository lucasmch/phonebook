import React from 'react';

import './styles.css';


export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">

        <div className="col col-2">
          <div className="center">

            <img src={require('../../images/logo.png')} alt="logomarca" className="logo"/>
            <h1 className="sobre">
            Guarde todos os seus contatos com segurança. É útil para ter um backup
            dos seus números de telefones mais importantes e além disso é uma
            excelente opção para pequenas empresas ou comércios administrarem seus clientes.
            </h1>
            <button className="all" id="top">
              Contatos
            </button>
            <button className="all" id="top">
              Adicionar contato
            </button>

          </div>
        </div>


        <div className="col col-2">
          <div className="contacts">

            <div className="contact">
              <section className="infos">
                <img src={require('../../images/bombeiro.png')} alt="bombeiro" className="foto"/>
                <article className="textos">
                <h1 className="title">Bombeiro Carlos</h1>
                <p className="description">
                Contrary to popular belief, Lorem Ipsum is not simply random text,
                 It has roots in a piece of classical Latin literature from 45.
                </p>
                </article>
              </section>
              <article  className="btns">
                <button className="all" id="btn">Enviar mensagem</button>
                <button className="all" id="btn">Ver contato</button>
              </article>
            </div>


            <div className="contact">
              <section className="infos">
                <img src={require('../../images/medica.png')} alt="medica" className="foto"/>
                <article className="textos">
                <h1 className="title">Médica Gabriela</h1>
                <p className="description">
                Contrary to popular belief, Lorem Ipsum is not simply random text,
                 It has roots in a piece of classical Latin literature from 45.
                </p>
                </article>
              </section>
              <article  className="btns">
                <button className="all" id="btn">Enviar mensagem</button>
                <button className="all" id="btn">Ver contato</button>
              </article>
            </div>


            <div className="contact">
              <section className="infos">
                <img src={require('../../images/policial.png')} alt="policial" className="foto"/>
                <article className="textos">
                <h1 className="title">Polical Vale</h1>
                <p className="description">
                Contrary to popular belief, Lorem Ipsum is not simply random text,
                 It has roots in a piece of classical Latin literature from 45.
                </p>
                </article>
              </section>
              <article  className="btns">
                <button className="all" id="btn">Enviar mensagem</button>
                <button className="all" id="btn">Ver contato</button>
              </article>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}