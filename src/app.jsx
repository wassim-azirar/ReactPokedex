import React from 'react';
import ReactDOM from 'react-dom';
import template from './app.rt';
// import $ from 'jquery';

export default class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {pokemons: []};
    // }
    //
    // componentDidMount() {
    //     this.App();
    // }
    //
    // App() {
    //     return $.getJSON('http://pokeapi.co/api/v2/pokemon/')
    //         .then((data) => {
    //             this.setState({pokemons: data.results});
    //         });
    // }

    add() {
        console.log("hello");
    };

    render() {

        // const pokemon = this.state.pokemons.map((item) => {
        //     return <div>
        //         <h1>{item.name}</h1>
        //         <span>{item.url}</span>
        //     </div>
        // });
        //
        // return <div>{ pokemon }</div>

        return template()
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);