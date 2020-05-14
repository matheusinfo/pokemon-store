import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {darken} from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 70px;
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;

    :hover{
        color: ${darken(0.3, "#fff")}
    }

    div{
        display: flex;
        flex-direction: column;
        text-align: right;
        margin-right: 10px;

        strong{
            font-size: 22px;
            letter-spacing: .4px;
        }

        span{
            color: #ccc;
            font-size: 18px;
        }
    }
`;