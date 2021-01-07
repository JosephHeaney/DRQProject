import React from 'react'

const divStyle = {
    width: '100%',
    height: '800px',
    backgroundImage: `url(https://img.freepik.com/free-photo/background-crumpled-paper-sheet_1194-7545.jpg?size=626&ext=jpg)`,
    backgroundSize: 'cover'
  };

export class HomePage extends React.Component {
    render() {
        return (
            <div style={divStyle}>
                <h1>Welcome to your shopping Assist!</h1><br></br>
                <h2>Navigate the menu on top to create your shopping List and to see your shopping list.</h2>
            </div>
        )
    }
}