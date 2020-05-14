import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    position: static;
    width: 100%;
    bottom: 0;

    button{
        background: #cf2233;
        color: #fff;
        padding: 8px;
        border-radius: 4px;
    }

    input{
        width: 60px;
        padding: 5px;
        border-radius: 4px;
        margin: 0 10px;
        text-align: center;
    }
`;