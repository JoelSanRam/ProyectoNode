import React from 'react';
function CheckoutSteps(props) {
  return <div className="checkout-steps">
    <div className={props.step1 ? 'active' : ''} >Login</div>
    
    
    <div className={props.step4 ? 'active' : ''} >Finalizar compra</div>
  </div>
}

export default CheckoutSteps;