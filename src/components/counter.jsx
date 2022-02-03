import React, { Component } from 'react';

class Counter extends Component { 

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);

        if(prevProps.counter.value != this.props.counter.value) {
            // call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log("Counter unmount");
    }

    state = {
        // value: this.props.counter.value

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


    /*
    metoda sluzyla do pokazania jak wyswietlac tablice
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>
       
        return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>
    };
    */

    render() {
        return ( 
        <React.Fragment>

            <span 
            style={this.props.counter.styles} 
            className={this.getBadgeClasses()}>
                {this.formatCount()}
            </span>

            <button 
                className="btn btn-secondary btn-sm" 
                onClick={() => this.props.onIncrement(this.props.counter) }
                >Increment
            </button>

           <button 
                onClick={() => this.props.onDelete(this.props.counter.id) }
                className="btn btn-danger btn-sm m-2"
            >Delete
           </button>

        </React.Fragment>
            );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}
 
export default Counter;