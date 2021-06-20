import React, { Component } from 'react'

import './Index.css';

export default class Index extends Component {
  render() {
    return (
      <div className="d-flex">
        <section className="esquerda p-2">
          Flex item
          <div className="rede-social">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
        </section>
        <section className="direita p-2 flex-grow-1 ">
          Flex item
        </section>
      </div>
    )
  }
}
