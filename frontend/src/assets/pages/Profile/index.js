import React, { useEffect, useState } from 'react';
import api from '../../../services/api';

import './styles.css';


export default function Profile() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    api.get('/', {}).then(response => {
      setContacts(response.data);
    })
  }, [])

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

            {contacts.map(contact => (
              <div className="contact" key={contact.id}>
              <section className="infos">
                <img src={contact.image} alt="foto contato" className="foto"/>
                <article className="textos">
                <h1 className="title">{contact.name}</h1>
                <p className="description">{contact.description}</p>
                </article> 
              </section>
              <article  className="btns">
                <button className="all" id="btn">Enviar mensagem</button>
                <button className="all" id="btn">Ver contato</button>
              </article>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}