import React from 'react'
import { Author, Body, Category, PostBody, PostContainer, PostImage, Title } from './style'

function PostCard() {
	return (
		<PostContainer>
			<PostImage src='images/image1.jpg' />
			
			<PostBody>
				<Category color='c98b2e' href='#'>React</Category>
				<Title><a href="#">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </a></Title>
				<Body>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto reiciendis enim sapiente obcaecati nulla vel veniam? Assumenda </Body>
				<Author>
					<img src="images/image1.jpg" alt="" />
					<div>
						<h2><a href="#">By: Firdavs</a></h2>
						<p>just now</p>
					</div>
				</Author>
			</PostBody>
        </PostContainer>
	)
}

export default PostCard