import React from 'react';
import axios from 'axios';

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)`,
    backgroundSize: 'cover'
  };

export class Edit extends React.Component {

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

    componentDidMount() {
        console.log(this.props.match.params.id)

        axios.get('http://localhost:5000/api/items/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                Name:response.data.name,
                Price:response.data.price,
                Image:response.data.image
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Item: " + this.state.Item +
            " " + this.state.Price +
            " " + this.state.Image
        );

        const newItem = {
            name: this.state.Name,
            price: this.state.Price,
            image: this.state.Image,
            _id: this.state._id
        }

        axios.put('http://localhost:5000/api/items/' + this.state._id, newItem)
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
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
                            value='Edit Item'
                            className='btn btn-primary'>
                        </input>
                    </div>
                </form>
            </div>

        );
    }
}