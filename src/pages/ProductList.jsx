import React from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import ProductItem from '../components/ProductItem';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useLocation } from "react-router";
import { useState } from "react";


const Container = styled.div``;
const Title = styled.h1` 
    margin:20px;
`;
const FiltterContainer = styled.div`
    display: flex;
    justify-content:space-between;`
    ;
const Filtter = styled.div`
    margin:20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };


    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FiltterContainer>
                <Filtter><FilterText>Filtter Products: </FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Option disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters} >
                        <Option disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filtter>
                <Filtter><FilterText><FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option disabled>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select></FilterText></Filtter>
            </FiltterContainer>
            <ProductItem cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>);
};

export default ProductList;
