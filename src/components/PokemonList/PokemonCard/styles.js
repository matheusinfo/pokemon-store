import styled from 'styled-components';
import {darken} from 'polished';

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 200px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    text-align: center;
    cursor: pointer;

    img{
        align-self: center;
        width: 150px;
    }

    >div{
        visibility: ${props => props.active ? 'visible' : 'hidden'};
        height: 50px;
    }

    >strong{
        font-size: 18px;
        line-height: 15px;
        color: #333;
        margin-top: -5px;
    }

    >span{
        color: #666;
        font-size: 14px;
        font-weight: bold;
        margin: 5px auto 7px auto;
    }

    :hover{
        background: rgb(235, 232, 232);

        >div{
            visibility: ${props => props.active ? 'hidden' : 'visible'}
        }
    }
`;

export const Types = styled.p`
    color: #fff;
    background: ${props => props.color};
    width: 130px;
    margin: 0 auto;
    margin-bottom: 2px;
    padding: 1px;
    border-radius: 5px;
`;


export const Button = styled.button`
    background: #cf2233;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;


    :hover{
        background: ${darken(0.03, "#cf2233")};
    }

    div{
        display: flex;
        align-items: center;
        background: rgba(0,0,0,0.1);
        padding: 10px;
        margin: 0 5px 0 -5px;

        svg{
            margin-right: 5px;
        }
    }

    span{
        font-size: 12px;
        letter-spacing: 0.5px;
        text-align: center;
        font-weight: bold;
    }
    
`;
