import React from 'react'
import PostCard from '../../components/postCard'
import HeroPost from './heroPost'
import { Categories, CategoryBtn, Container, Headline, PostsRow, ReadMoreBtn } from './style'

function Home() {
    return (
        <>
            <HeroPost />

            <Container>

                <Headline color='#2ec96f'><i className="bi bi-grid"></i> Trending</Headline>
                <PostsRow>
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <ReadMoreBtn color='#2ec96f' href='#'>Read more <i className="bi bi-arrow-right"></i></ReadMoreBtn>
                </PostsRow>

                <Headline color='#2ec96f'><i className="bi bi-grid"></i> News</Headline>

                <Categories>
                    <h1>Explore Categories</h1>
                    <CategoryBtn href='#' color='#f78f9f'>React <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#f719ff'>JavaScript <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#178f9f'>Sql <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#112f9f'>Solidity <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <br />
                    
                    <CategoryBtn href='#' color='#f78f9f'>React <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#f719ff'>JavaScript <i className="bi bi-arrow-right"></i></CategoryBtn>
                    <CategoryBtn href='#' color='#178f9f'>Sql <i className="bi bi-arrow-right"></i></CategoryBtn>
                </Categories>

            </Container>
        </>
    )
}

export default Home