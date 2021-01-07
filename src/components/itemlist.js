import React from 'react';
import Card from 'react-bootstrap/card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)`,
    backgroundSize: 'cover'
  };

export class ItemList extends React.Component {

    constructor() { 
        super();

        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.item._id)

        axios.delete("http://localhost:5000/api/items/" + this.props.item._id)
        .then(() => {
            this.props.reloadData();
        })
        .catch()
    }

    render() {
        return (
            <div style={divStyle}>
                <Card>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <Card.Body>
                            <img src={this.props.item.image} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.item.price}
                            </footer>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.item._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.deleteItem}>Delete</Button>
                </Card>
            </div>
        );
    }
}