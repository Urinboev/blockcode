import React from 'react'
import { Author, Body, Category, Post, PostBody, PostContainer, PostImage, Title } from './style'

function HeroPost() {
    return (
        <PostContainer>
            <Post>
                <PostImage src='images/image1.jpg' />
                
                <PostBody>
                    <Category color='ff00ff' href='#'>React</Category>
                    <Title><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a></Title>
                    <Body>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto reiciendis enim sapiente obcaecati nulla vel veniam? Assumenda fuga magni minus natus culpa quisquam quo, ab excepturi itaque praesentium atque?</Body>
                    <Author>
                        <img src="images/image1.jpg" alt="" />
                        <div>
                            <h2><a href="#">By: Firdavs</a></h2>
                            <p>just now</p>
                        </div>
                    </Author>
                </PostBody>
            </Post>
        </PostContainer>
    )
}

export default HeroPost