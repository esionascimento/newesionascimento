import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './Index.css';

export default class Index extends Component {
  render() {
    return (
      <div className="d-flex">
        <section className="esquerda p-2">
          <section>
            <Link to="/about">
              About
            </Link>
          </section>
          <section className="rede-social">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </section>
        </section>
        <section className="direita p-2 flex-grow-1 ">
          Flex item
        </section>
      </div>
    )
  }
}
