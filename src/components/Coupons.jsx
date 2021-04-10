<<<<<<< HEAD
import React from "react";
import Coupon from "./Coupon";
import "./Coupon.css"
export default function Coupons(props) {
    
    return (
        <div  id="cardgroup">
            {props.data.map(r => {
                return <Coupon data={r}/>
            })}
    </div>
  );
}
=======
import React from "react";
import Coupon from "./Coupon";
import "./Coupon.css"
export default function Coupons(props) {
    
    return (
        <div  id="cardgroup">
            {props.data.map(r => {
                return <Coupon data={r}/>
            })}
    </div>
  );
}
>>>>>>> 8a5e369931205b534b2db22ddad9e9e45d5730b1
