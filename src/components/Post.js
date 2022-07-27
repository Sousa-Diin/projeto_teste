import React from "react";

import Comments from "./Comments";

export default class Post extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            Comments:[ /* {text: 'Bom post!'} array de comentario inicial*/],

            newCommentText: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleSubmit(e){
        // this setState

        this.setState({
            Comments : [
                ...this.state.Comments,
                { text: this.state.newCommentText }
            ]
        });

        this.setState({newCommentText: ''});

        e.preventDafault();
    }

    handleTextChange(e){
        this.setState({ newCommentText: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>{this.props.title }</h2>
                    <form onSubmit={this.handleSubmit}>

                        <input value={this.state.newCommentText}

                        onChange={this.handleTextChange}

                        />
                        <button type="submit"> Comentar </button>
                    </form>
                    {this.state.Comments.map((Comment, index) => {
                        return <Comments key={index} text={Comment.text} />
                    })}
            </div>
        ); 
    }
}