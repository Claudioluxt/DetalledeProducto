import React from "react";
import ItemCounts from "../componets/ItemCounts"
import styled from "styled-components";


const ItemDetail= ({item})=> {


  return(
    <>
      <Cards>
    <div id="container">
      <div class="product-details">
        <h1> {item.name} </h1>
            <span class="hint-star star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half-o" aria-hidden="true"></i>
          <i class="fa fa-star-o" aria-hidden="true"></i>
        </span>
        <p class="information"></p>
        <div class="control">
          <button class="btn">
            <span class="price">{item.price} </span>
            <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
            <span class="buy">Buy Now</span>
          </button>
          <div>
            <ItemCounts stock={item.stock} min = {item.min} />
          </div> 
        </div>
      </div>
      <div class="product-image">
        <img src= {item.imige} alt="Omar Dsoky"/>
        <div class="info">
          <h2>Descripciones</h2>
          <ul>
            <p>Bonaqua es una marca comprometida con el ambiente ya que sus envases utilizan menos plástico y su envase Eco-Flex de 500 mililitros es ultraliviano, flexible y fácil para reciclar”.</p>
          
          </ul>
        </div>
      </div>
     </div>
    </Cards>
    </>
    )
  }
  


export default ItemDetail



const Cards = styled.div`
body {
background: #DFC2F2;
	background-image: linear-gradient( 135deg, #CE9FFC 10%, #7367F0 100%);
	background-attachment: fixed;	
	background-size: cover;
	}
#container{
	box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
	background: rgba(255, 255, 255, 0.90);
	text-align: center;
	border-radius: 5px;
	overflow: hidden;
	margin: 5em auto;
	height: 350px;
	width: 700px;
	
}
/* 	Product details  */
.product-details {
	position: relative;
	text-align: left;
	overflow: hidden;
	padding: 30px;
	height: 100%;
	float: left;
	width: 40%;
}

p{
  font-family: 'Old Standard TT', serif;
  font-size: small;
}
/* 	Product Name */
#container .product-details h1{
	font-family: 'Old Standard TT', serif;
	display: inline-block;
	position: relative;
	font-size: 34px;
	color: #344055;
	margin: 0;
	
}


/*Product Rating  */
.hint-star {
	display: inline-block;
	margin-left: 0.5em;
	color: gold;
	width: 50%;
}
/* The most important information about the product */
#container .product-details > p {
	font-family: 'Farsan', cursive;
	text-align: center;
	font-size: 20px;
	color: #7d7d7d;
	
}
/* control */
.control{
	position: absolute;
	bottom: 20%;
	left: 22.8%;
	
}
/* the Button */
.btn {
	transform: translateY(0px);
	transition: 0.3s linear;
	background: #7c7c7b;
	border-radius: 5px;
  position: relative;
  overflow: hidden;
	cursor: pointer;
	outline: none;
	border: none;
	color: #eee;
	padding: 0;
	margin: 0;
	
}
.btn:hover{transform: translateY(-4px);}
.btn span {
	font-family: 'Farsan', cursive;
	transition: transform 0.3s;
	display: inline-block;
  padding: 10px 20px;
	font-size: 1.2em;
	margin:0;
	
}
/* shopping cart icon */
.btn .price, .shopping-cart{
	background: #333;
	border: 0;
	margin: 0;
}
.btn .price {
	transform: translateX(-10%); padding-right: 15px;
}
/* the Icon */
.btn .shopping-cart {
	transform: translateX(-100%);
  position: absolute;
	background: #333;
	z-index: 1;
  left: 0;
  top: 0;
}
/* buy */
.btn .buy {z-index: 3; font-weight: bolder;}
.btn:hover .price {transform: translateX(-110%);}
.btn:hover .shopping-cart {transform: translateX(0%);}
/* product image  */
.product-image {
	transition: all 0.3s ease-out;
	display: inline-block;
	position: relative;
	overflow: hidden;
	height: 100%;
	
	width: 50%;
	display: inline-block;
}
#container img {width: 100%;height: 100%;}
.info {
    background: rgba(27, 26, 26, 0.9);
    font-family: 'Farsan', cursive;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
    position: absolute;
    line-height: 1.9;
    text-align: left;
    font-size: 120%;
    cursor: no-drop;
    color: #FFF;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
}
.info h2 {text-align: center}
.product-image:hover .info{transform: translateX(0);}
.info ul {transition: 0.3s ease;}
.info ul :hover{transform: translateX(50px) scale(1.3);}
.product-image:hover img {transition: all 0.3s ease-out;}
.product-image:hover img {transform: scale(1.2, 1.2);}
`
