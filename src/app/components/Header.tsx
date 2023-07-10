"use client"
import Link from "next/link";
import { styled } from 'styled-components';


const HeaderStyled = styled.header`
    height: 80px;
    border-bottom: 2px solid orange;
    display: flex;
    align-items: center;

`
const ButtonMenu = styled.button`
    float: right;

`




export default function Header(){
    return (
        <HeaderStyled>
            <div className="container">
                <ButtonMenu>Menu</ButtonMenu>
            </div>
        </HeaderStyled>
    )
}