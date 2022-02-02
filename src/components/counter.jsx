import React, { Component } from 'react';

class Counter extends Component { 
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags : ['tag1', 'tag2', 'tag3']
    };

    styles = {
        fontWeight: "bold",
        fontSize: 60,
        color: "black"
    };

    /*
    mozna go pominac jesli sie zrobi lamdbe
    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    */

    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
       
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    };

    render() { 

        return ( 
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""></img>

            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button 
                className="btn btn-secondary btn-sm" 
                onClick={ () => this.handleIncrement({id : 1}) }>Increment
            </button>

            <div>
                {this.state.tags.length === 0 && 'please create a new tag!'}
                {this.renderTags()}
            </div>

        </React.Fragment>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;