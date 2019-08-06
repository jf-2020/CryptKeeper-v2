import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LineChart from '../Charts/LineChart';

export default class WatchExpansionPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coinData: []
        }
    }

    render() {
        // capitalize coin name
        let coin = this.props.id;
        coin = coin.substr(0, 1).toUpperCase() + coin.substr(1);

        return (
            <div onClick={() => { this._fetchHistoricalData(this.props.id) }}>
                <div style={{ width: '100%' }} >
                    <ExpansionPanel >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{ fontSize: '1rem', fontWeight: '600' }}>{coin}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <LineChart data={this.state.coinData} coinName={coin} />
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </div>
            </div>
        );
    }

    _fetchHistoricalData = async (id) => {
        const proxy = "https://cors-anywhere.herokuapp.com/",
            base_url = "https://api.coincap.io/v2/",
            resource = "assets/",
            history = "/history?interval=d1";
        const request_url = proxy + base_url + resource + id + history;

        const response = await fetch(request_url)
        const responseJSON = await response.json()
        const { data } = responseJSON;

        this.setState({
            coinData: data
        });
    }
}