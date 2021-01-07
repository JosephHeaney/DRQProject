import React from 'react';
import { Items } from './items';
import axios from 'axios';

const divStyle = {
    width: '100%',
    backgroundImage: `url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)`
  };

export class List extends React.Component {

    constructor() {
        super();

        this.reloadData = this.reloadData.bind(this);
    }

    state = {
        items: []
    };

    componentDidMount() {
        axios.get('http://localhost:5000/api/items')
            .then((response) => {
                this.setState({ items: response.data })
            })
            .catch((error) => { 
                console.log(error) }
            );
    }

    reloadData() {
        axios.get('http://localhost:5000/api/items')
            .then((response) => {
                this.setState({ items: response.data })
            })
            .catch((error) => { 
                console.log(error) 
            });
    }

    render() {
        return (
            <div style={divStyle}>
                <h1>Shopping List</h1>
                <Items items={this.state.items} reloadData={this.reloadData}></Items>
            </div>
        )
    }
}