import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 30px;
    background: #fff;
    border-radius: 4px;
`;

export const ProductTable = styled.table`
    width: 100%;

    thead th{
        color: #999;
        text-align: left;
        padding: 12px;
    }

    tbody td{
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img{
        height: 130px;
    }

    strong{
        color: #333;
        display: block;
    }

    span{
        display: block;
        margin-top: 5px;
        font-size: 14px;
        font-weight: bold;
        color: #999;
    }

    div{
        display: flex;
        align-items: center;

        input{
            border: 1px solid #ddd;
            background: #fff;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
        }
    }

    button{
        background: none;
        border: 0;
        padding: 6px;
    }
`;

export const Total = styled.div`
    strong{
        font-size: 18px;
        margin-left: 5px;
    }

    span{
        color: #666;
        font-size: 12px;
        font-weight: bold;
    }
`;

export const Footer = styled.footer`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        background: #cf2233;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 12px 20px;
        font-weight: bold;

        :hover{
            background: ${darken(0.03, '#cf2233')}
        }
    }
`;