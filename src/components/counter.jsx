import React, {Component} from "react";

export default class Counter extends Component {
    getBadgesClasses = (value) => {
        return `badge badge-${value <= 0 ? 'warning' : 'primary'}`
    }


    render() {
        const {value} = this.props;

        const styles = {
            fontSize: '16px'
        };

        return (
            <React.Fragment>
                <div className="border-primary border p-2 m-3">
                    {this.props.children}
                    <h4 style={{color: "blue"}}>Counter component</h4>
                    <p style={styles} className={this.getBadgesClasses(value)}>{value}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <button onClick={(e) => this.props.onDecrement(e, this.props.id)}
                                    className="btn btn-sm btn-danger m-2">Decrement
                            </button>
                            <button onClick={(e) => this.props.onIncrement(e, this.props.id)}
                                    className="btn btn-sm btn-primary m-2">Increment
                            </button>
                        </div>
                        <div>
                            <button onClick={() => this.props.onDelete(this.props.id)}
                                    className="btn btn-sm btn-danger m-2">Delete
                            </button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
