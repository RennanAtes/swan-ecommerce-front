"use client"
import Link from "next/link";
import { styled } from 'styled-components';


const HeaderStyled = styled.header`
    height: 80px;
    border-bottom: 2px solid #ffa200;
    display: flex;
    align-items: center;
    padding: 1rem;

`
const ButtonMenu = styled.button`
    float: right;

`




export default function Header(){
    return (
        <HeaderStyled>
            <div className="container justify-between flex">
                <div className="inline">
                    <span>Logo</span>
                </div>
                <div className="inline-flex gap-5">
                    <ButtonMenu>Menu</ButtonMenu>
                    <Link className="border-2 border-orange-400 p-2 text-white bg-orange-400 rounded-xl no-underline" href='/login'>Login</Link>

                </div>
            </div>
        </HeaderStyled>
    )
}