import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import currencyFormatter from "currency-formatter";
import {BsDash, BsPlus} from 'react-icons/bs';
import { BsBackspaceReverse } from "react-icons/bs";

const Cart = () => {
    const {products,totalQuantities,totalPrice} = useSelector(state=>state.CartReducer);
    const dispatch = useDispatch();
    
    return (
        <div className="cart">
            <div className="container">
                <h3>Your cart</h3>
                {products.length>0?<>
                <div className="row">
                    <div className="col-9">
                        <div className="cart_heading">
                            <div className="row">
                            <div className="col-2">Picture</div>
                            <div className="col-2">Name</div>
                            <div className="col-2">Price</div>
                            <div className="col-2">Inc/Dec</div>
                            <div className="col-2">Total Price</div>
                            <div className="col-2">Remove</div>
                        </div>
                        </div>
                        {products.map(product=>(
                            <div className="row verticalAlign" key={product.id}>
                                 <div className="col-2">
                                     <div className="cart_image">
                                         <img src={`/images/${product.image}`} alt="" />
                                     </div>
                                 </div>
                                 <div className="col-2">
                                     <div className="cart_name">
                                         {product.name}
                                     </div>
                                 </div>
                                 <div className="col-2">
                                     <div className="cart_price">
                                         {currencyFormatter.format(product.discountPrice,{code:'USD'})}
                                     </div>
                                 </div>
                                 <div className="col-2">
                                 <div className="details_info cart_incDec">
                                    <div className="deatils_incDec">
                                        <span className="dec" onClick={()=>dispatch({type:'DEC',payload:product.id})}><BsDash/></span>
                                        <span className="quantity">{product.quantity}</span>
                                        <span className="inc" onClick={()=>dispatch({type:'INC',payload:product.id})}><BsPlus/></span>
                                    </div>
                                    </div>
                                 </div>
                                 <div className="col-2">
                                     <div className="cart_total text_center">
                                         {currencyFormatter.format(product.discountPrice*product.quantity,
                                          {code:'USD'})}
                                     </div>
                                 </div>
                                 <div className="col-2">
                                     <div className="cart_remove" onClick={()=>dispatch({type:'REMOVE',payload:product.id})}>
                                         <BsBackspaceReverse/>
                                     </div>
                                 </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-3 summary-col">
                        <div className="summary">
                            <div className="summary_heading">Summary</div>
                            <div className="summary_details">
                                <div className="row mb-10">
                                    <div className="col-6">
                                        Total Items:
                                    </div>
                                    <div className="col-6">
                                        {totalQuantities}
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price
                                        </div>
                                        <div className="col-6">
                                            {currencyFormatter.format(totalPrice,{code:'USD'})}
                                        </div>
                                    </div>
                                    <button type="button" className="checkout" onClick={()=>alert("Thank You for Shopping")}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </>:'Your cart is empty!'}
            </div>
        </div>
    )
}

export default Cart
