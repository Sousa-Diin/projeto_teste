import React, { Component } from "react";

import Post from './Post';

export default class App extends React.Component {
    render() {  

        return (

            <div>
                <h1>Hello World</h1>

                <Post title="Aprendendo ReactJS com a RocketSeat"/> 
                <Post title="ReactJS é feito em JavaScript!"/> 
                <Post title="Em breve mais projetos em reactjs"/> 
            </div>
          
        );
    }
}