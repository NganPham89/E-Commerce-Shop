import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'

const Container = styled.div``
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: "10px", flexDirection: "column"})};

`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})};

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "0px 10px"})};

`
const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterContainer = styled.div`
    margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const QuantityContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({width: "100%"})};

`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 10px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.5s ease;

    &:hover {
        background-color: #BD8EB1;
    }
`

const ProductSingle = () => {
    return (
        <Container>
            <Annoucement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/1252812/pexels-photo-1252812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        Tinto Rose
                    </Title>
                    <Description>
                        Each flower has a large, cup-shaped bloom, velvet petals, with a dark red hue makes for a sensual style.
                    </Description>
                    <Price>$39.99</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>Small</FilterSizeOption>
                                <FilterSizeOption>Medium</FilterSizeOption>
                                <FilterSizeOption>Large</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <QuantityContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </QuantityContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductSingle