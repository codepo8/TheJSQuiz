import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

// Custom components
import Header from '../components/Header';
import Card from '../components/Card';

@inject("store") @observer
export default class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        return (
            <section className="mdl-layout__content">
                <Header />
                <div className="container">
                    <h1>Resources</h1>
                    <p>
                        I am not affiliated with any of the products or resources below, this is a list of resources I
                        have personally used and found fantastic.
                    </p>

                    <h3>Books</h3>

                    <div className="android-card-container mdl-grid">
                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>

                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>

                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>

                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>

                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>

                        <Card title="You don't know JS" description="My favorite JavaScript book series ever. I learnt more reading the whole book series in a couple of weeks than I have
                    doing anything else! Kyle Simpson (The writer) goes into the deep depths of JavaScript (Prototypes, Inheritance, Scope, Closures and much more!)"
                              link=""/>
                    </div>
                </div>
            </section>
        );
    }
}
