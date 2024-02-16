import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
// import axios from 'axios'
import { publicRequest } from '../requestMethods'

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
    width: 50%;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
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

    const location = useLocation();
    const productId = location.pathname.split("/")[2];

    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");


    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/find/${productId}`)
                setProduct(res.data)
            } catch (err) {
                console.log("GET PRODUCT ERROR", err)
            }
        }
        getProduct();
    }, [productId])

    const handleQuantity = (type) => {
        if (type === "decrease") {
            quantity > 1 && setQuantity(quantity -1)
        } else if (type === "increase") {
            setQuantity(quantity + 1)
        }
    }

    const handleClick = () => {
        console.log("Add to cart clicked")
    }

    return (
        <Container>
            <Annoucement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>
                        {product.title}
                    </Title>
                    <Description>
                       {product.description}
                    </Description>
                    <Price>${product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((eachColor) => (
                                <FilterColor color={eachColor} key={eachColor}/>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(event)=> setSize(event.target.value)}>
                                {product.size?.map((eachSize) => (
                                    <FilterSizeOption key={eachSize}>{eachSize}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <QuantityContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={() => handleQuantity("decrease")} />
                            <Amount>{quantity}</Amount>
                            <AddIcon onClick={() => handleQuantity("increase")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADD TO CART</Button>
                    </QuantityContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductSingle