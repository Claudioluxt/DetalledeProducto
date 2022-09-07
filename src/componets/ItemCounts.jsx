import { useState } from "react"
import Swal from 'sweetalert2'



const ItemCounts = (props) => {
    const [count, setCount] = useState(props.min);

    function decrement() {
        if(count !== props.min) {
          setCount(count-1)
        } else {
          Swal.fire(`¡No puedes agregar menos de ${props.min} unidad!`);
        }
      };
    
      function increment() {
        if(count !== props.stock) {
          setCount(count+1)
        } else {
          Swal.fire(`¡No puedes agregar más de ${props.stock} unidades!`);
        }
      };
    
      function addToCart() {
        Swal.fire(`¡Se agregaron al carrito ${count} unidades!`);
      } 
  return (

    <div>
           <p class="count">{count}</p>
           <button class="btn" onClick={increment}> 
           <span class = ""></span>
            <span class="buy">+</span> </button>
           <button class="btn" onClick={decrement}>
            <span ></span>
            <span class="buy">-</span> </button>
            <button class="btn" onClick={addToCart}>
            <span >agregar</span>
            <span class="buy"></span> </button>
    </div>
  )

}       
export default ItemCounts