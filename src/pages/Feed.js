import React, { Component } from 'react';

import api from '../services/api'

import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'

class Feed extends Component {

    state = {
        feed: [],
    }

    async componentDidMount() {
        const response = await api.get('?results=5');
        this.setState({ feed: response.data.results})
    }

    render() {

        return (
            <section id="post-list">
                {this.state.feed.map(post => (
                    <article key={post.id.value}>
                        <header>
                            <div className="user-info">
                                <span>Hi, My name is <b>{post.name.first}</b></span>
                                <span className="place">Email: <b>{post.email}</b></span>
                            </div>
                            <img src={more} alt="Mais"></img>
                        </header>
                        <img src={post.picture.large} />
                        <footer>
                            <div className="actions">
                                <img src={like} alt="Mais"></img>
                                <img src={comment} alt="Mais"></img>
                                <img src={send} alt="Mais"></img>
                            </div>
                            <strong>{post.gender}</strong>
                            <p>
                            {post.location.street}
                                            <span>{post.phone} </span>
                            </p>
                        </footer>
                    </article>
                ))}
            </section>
        )
    }
}

export default Feed;