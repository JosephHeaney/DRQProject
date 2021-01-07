import React from 'react';
import { ItemList } from './itemlist';

export class Items extends React.Component {

    render() {
        return this.props.items.map((item) => {
            return <ItemList item={item} reloadData={this.props.reloadData}></ItemList>
        })
    }
}