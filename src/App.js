import React, {Component} from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

export default class App extends Component {
    state = {
        counters: [
            {
                id: 1,
                value: 1,
                title: 'Shubham counter'
            },
            {
                id: 2,
                value: -12,
                title: 'Harshit counter'
            },
            {
                id: 3,
                value: 100,
                title: 'Gautam counter'
            }
        ]
    }


    // Lifecyle hooks

    constructor(props) {
        super(props);
        console.log('App - constructor');
    }

    componentDidMount() {
        console.log('App - componentDidMount');
    }

    onDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({
            counters
        });
    }

    onReset = () => {
        const counters = this.state.counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({
            counters
        });
    }

    onIncrement = (e, id) => {
        // console.log(e, e.nativeEvent);
        const counterIndex = this.state.counters.findIndex(counter => counter.id === id);
        this.state.counters[counterIndex].value++;
        this.setState({
            counters: this.state.counters
        });
    }

    onDecrement = (e, id) => {
        // console.log(e, e.nativeEvent);
        const counterIndex = this.state.counters.findIndex(counter => counter.id === id);
        this.state.counters[counterIndex].value--;
        this.setState({
            counters: this.state.counters
        });
    }

    render() {
        console.log('App - render');
        return (
            <React.Fragment>
                <Navbar/>
                <main className="container mt-2">
                    <Counters
                        counters={this.state.counters}
                        onDecrement={this.onDecrement}
                        onIncrement={this.onIncrement}
                        onReset={this.onReset}
                        onDelete={this.onDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}


