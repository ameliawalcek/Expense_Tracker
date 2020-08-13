import React, { Component } from 'react';
import Transaction from './Transaction';
//import '../style/JS_FILE'

class Transactions extends Component {

    getTransactions = () => this.props.data.map(d => <Transaction key={d._id} transaction={d} removeTransaction={this.props.removeTransaction}/>)

    render() {

        return (
            <div className='transactions-container'>
                <div className='sub-header'>SUMMARY</div>
                {this.getTransactions()}
            </div>
        )
    }
}

export default Transactions;