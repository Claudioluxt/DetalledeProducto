import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
const NavBarReact = () => {

    return ( 
        <>
        <Navbar>
            <h2>
            NEGUMI <span>E-COMMERCE </span> 
            </h2>
            <div>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </div>
            <div>
               <Cart/>
            </div>
        </Navbar>
        </>

     );
}
 
export default NavBarReact;

const Navbar = styled.div`
h2{
    color: #f4f4f4;
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
    padding: .4rem;
    background-color: #000000;
    display:flex;
    align-items: center;
    justify-content: space-between;
a{
    color: #f9f9f9;
    text-decoration: none;
    margin-right: 1rem;  
 }
 
`