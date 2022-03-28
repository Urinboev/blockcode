import React from 'react'
import PostCard from '../../components/postCard'
import HeroPost from './heroPost'
import { Categories, CategoryBtn, Container, Headline, PostsRow } from './style'

function Home() {
    return (
        <>
            <HeroPost />

            <Container>

                <Headline color='#2ec96f'>Trending</Headline>
                <PostsRow>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </PostsRow>

                <Headline color='#2ec96f'>Trending</Headline>
                <PostsRow>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </PostsRow>

                <Categories>
                    <h1>Explore Categories</h1>
                    <CategoryBtn href='#' color='#f78f9f'>React <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#f719ff'>JavaScript <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#178f9f'>Sql <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#112f9f'>Solidity <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <br />
                    
                    <CategoryBtn href='#' color='#f78f9f'>React <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#f719ff'>JavaScript <i class="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#178f9f'>Sql <i class="bi bi-arrow-right"></i></CategoryBtn>
                </Categories>

            </Container>
        </>
    )
}

export default Home