import React, { Component } from 'react';

class Counter extends Component { 
    state = {
        value: this.props.value

        /* dodatki niepotrzebne do dzialania aplikacji
        
            imageUrl: "https://picsum.photos/200",
             <img src={this.state.imageUrl} alt=""></img>


            tags : ['tag1', 'tag2', 'tag3']
            <div>
                {this.state.tags.length === 0 && 'please create a new tag!'}
                {this.renderTags()}
            </div>
        */
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
        this.setState({ value: this.state.value + 1 });
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
       
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    };

    render() {
        return ( 
        <React.Fragment>
            <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>

            <button 
                className="btn btn-secondary btn-sm" 
                onClick={ () => this.handleIncrement({id : 1}) }>Increment
            </button>
        </React.Fragment>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value: count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;