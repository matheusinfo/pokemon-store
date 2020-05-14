import styled from 'styled-components';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 50px;
    width: 80%;
    margin: 10px auto 80px;
    list-style: none;


    @media(max-width: 1680px){
        grid-template-columns: repeat(4, 1fr);
    }

    @media(max-width: 1024px){
        grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
    }
`;