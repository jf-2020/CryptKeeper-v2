import React, { Component } from 'react';
import fetch from 'node-fetch';

import RowBadge from './RowBadge';
import RowItem from './RowItem';


import '../../styles/Row.css';

class WatchIndexRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            rendered: false
        };
    }

    componentDidMount() {
        const proxy = "https://cors-anywhere.herokuapp.com/",
            base_url = "https://api.coincap.io/v2/",
            resource = "assets/",
            id = "bitcoin",
            history = "/history?interval=d1";
        const request_url = proxy + base_url + resource + id + history;

        fetch(request_url)
            .then(resp => resp.json())
            .then(data => data.priceUsd)
            .then(data_object => {
                this.setState({
                    ...data_object,
                    rendered: !this.state.rendered
                });
            });
    };

    render() {
        if (this.state.rendered) {
            const data = {};

            for (const property in this.state) {
                if (property === "price" || property === "percent_change") {
                    data[property] = this.state[property];
                }
            }

            return (
                <div className="row-div"  >
                    <RowBadge
                        name={this.state.name}
                        ticker={this.state.ticker}
                    />
                    <RowItem data={data} />
                </div>

            )
        } else {
            return (
                <div>
                    <h1>Name: {this.state.name}</h1>
                    <h1>Ticker: {this.state.ticker}</h1>
                </div>
            )
        }
    }
}

export default WatchIndexRow;