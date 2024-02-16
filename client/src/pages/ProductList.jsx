import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'

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
    ${mobile({width: "0px 20px", display: "flex", flexDirection: "column"})};

`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${mobile({margin: "10px 0px"})};

`

const Option = styled.option``

const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2]

    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value
        })
    }
  return (
    <Container>
        <Annoucement />
        <Navbar />
        <Title>{category}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters} defaultValue={"Color"}>
                    <Option disabled>Color</Option>
                    <Option value={"White"}>White</Option>
                    <Option value={"Red"}>Red</Option>
                    <Option value={"Yellow"}>Yellow</Option>
                    <Option value={"Pink"}>Pink</Option>
                    <Option value={"Orange"}>Orange</Option>
                </Select>
                <Select name='size' onChange={handleFilters} defaultValue={"Plant Size"}>
                    <Option disabled>Plant Size</Option>
                    <Option value={"Small"}>Small (1-2')</Option>
                    <Option value={"Medium"}>Medium (3-4')</Option>
                    <Option value={"Large"}>Large (4-5')</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option value={"newest"}>Newest</Option>
                    <Option value={"asc"}>Price (asc)</Option>
                    <Option value={"dsc"}>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList