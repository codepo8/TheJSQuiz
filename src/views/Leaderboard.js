import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';

@inject("store") @observer
export default class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }

  render() {
    return (
      <section className="home">
        <Header />
        <h1>leaderboard</h1>
      </section>
    );
  }
}
