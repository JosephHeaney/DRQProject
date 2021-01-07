import React from 'react';
import axios from 'axios';

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)`,
    backgroundSize: 'cover'
  };

export class Create extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);

        this.state = {
            Name: '',
            Price: '',
            Image: ''
        }
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Item: " + this.state.Name +
            " " + this.state.Price +
            " " + this.state.Image
        );

        const newItem = {
            name: this.state.Name,
            price: this.state.Price,
            image: this.state.Image
        }

        axios.post('http://localhost:5000/api/items', newItem)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangePrice(e) {
        this.setState({
            Price: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            Image: e.target.value
        });
    }

    render() {
        return (
            <div className='App' style={divStyle}>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Add Item: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Add Item Price: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Price}
                            onChange={this.onChangePrice}>
                        </input>
                    </div>
                    <div className='form-group'>
                        <label>Item Image: </label>
                        <textarea type='text'
                            className='form-control'
                            value={this.state.Image}
                            onChange={this.onChangeImage}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Add Item'
                            className='btn btn-primary'>
                        </input>
                    </div>
                </form>
            </div>

        );
    }
}