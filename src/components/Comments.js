import React from "react";

export default class Comments extends React.Component {
    render(){
        return (
            <p>{this.props.text} </p>
        );
    }
}