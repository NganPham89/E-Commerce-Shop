import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
`

const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
        <Annoucement />
        <Navbar />
        <Title>Roses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Pink</Option>
                    <Option>Orange</Option>
                </Select>
                <Select>
                    <Option disabled selected>Plant Size</Option>
                    <Option>Small (1-2')</Option>
                    <Option>Medium (3-4')</Option>
                    <Option>Large (4-5')</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList