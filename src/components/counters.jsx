import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {

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

    onDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id);
        this.setState({
            counters
        });
    }

    reset = () => {
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
        return (
            <div>
                <button className="btn btn-danger btn-sm m-2" onClick={this.reset}>Reset</button>
                {this.state.counters.map((counter) => (
                    <Counter key={counter.id} value={counter.value} selected={true}
                             id={counter.id}
                             onDelete={this.onDelete}
                             onIncrement={this.onIncrement}
                             onDecrement={this.onDecrement}>
                        <h3>{counter.title}</h3>
                    </Counter>
                ))}
            </div>
        )
    }
}
