import React, {Component} from "react";
import Counter from "./counter";

export default class Counters extends Component {
    render() {
        console.log('Counters - render');
        return (
            <div>
                <button className="btn btn-danger btn-sm m-2" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map((counter) => (
                    <Counter key={counter.id} value={counter.value} selected={true}
                             id={counter.id}
                             onDelete={this.props.onDelete}
                             onIncrement={this.props.onIncrement}
                             onDecrement={this.props.onDecrement}>
                        <h3>{counter.title}</h3>
                    </Counter>
                ))}
            </div>
        )
    }
}
