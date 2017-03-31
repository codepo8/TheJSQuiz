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
                <div className="container animate">
                    <h1>Resources</h1>
                    <p>
                        I am not affiliated with any of the links below, these are all resources I have used.
                    </p>

                    <h3>Books</h3>
                    <div className="android-card-container mdl-grid">
                        <Card title="You don't know JS"
                              description="This is a series of books diving deep into the core mechanisms of the JavaScript language."
                              link="https://github.com/getify/You-Dont-Know-JS"/>
                        <Card title="Eloquent JavaScript"
                              description="This is a book about JavaScript, programming, and the wonders of the digital."
                              link="http://eloquentjavascript.net/"/>
                        <Card title="JavaScript Allongé"
                              description="Covers everything starting from the basics, through to advanced concepts."
                              link="https://leanpub.com/javascript-allonge/read#leanpub-auto-foreword-by-michael-fogus"/>
                    </div>

                    <div className="android-card-container mdl-grid">
                        <Card title="Learning JavaScript Design Patterns"
                              description="An in depth look at modern design patterns that help us structure our code."
                              link="https://addyosmani.com/resources/essentialjsdesignpatterns/book/"/>
                        <Card title="Functional Programming (in javascript)"
                              description="Start your journey into learning functional programming in JavaScript."
                              link="https://drboolean.gitbooks.io/mostly-adequate-guide/content/"/>
                        <Card title="Functional Programming (in javascript)"
                              description="Start your journey into learning functional programming in JavaScript."
                              link="https://drboolean.gitbooks.io/mostly-adequate-guide/content/"/>
                    </div>

                    <br/>

                    <h3>News</h3>
                    <div className="android-card-container mdl-grid">
                        <Card title="Echo JS"
                              description="Daily posts with the latest tools, frameworks and changes to the language."
                              link="http://www.echojs.com/"/>
                        <Card title="Front End Front" description="Regular updates on all things frontend related."
                              link="https://frontendfront.com/"/>
                        <Card title="JSFeeds" description="All JavaScript news and blogs in one place.."
                              link="http://jsfeeds.com/"/>
                    </div>

                    <br/>

                    <h3>Paid Video Services</h3>
                    <div className="android-card-container mdl-grid">
                        <Card title="TeamTreeHouse"
                              description="Learn a wide variety of programming languages and technologies (beginner)"
                              link="http://teamtreehouse.com"/>
                        <Card title="CodeSchool"
                              description="A well structured learning paths that are comprehensive. (Intermediate)"
                              link="https://www.codeschool.com"/>
                        <Card title="FrontEndMasters"
                              description="In depth lectures from industry leaders, my personal favorite. (Intermediate/Advanced)"
                              link="http://frontendmasters.com"/>
                    </div>
                </div>
            </section>
        );
    }
}
