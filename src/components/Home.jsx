<<<<<<< HEAD
import React, { useState } from "react";
import Coupons from "./Coupons";
export default function Home(props) {

  return (
    <div>

      {/* <div>
        <select id="dropdown">
          <option value="ALL">ALL</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronis">Electronis</option>
        </select>
              {console.log( document.getElementById('dropdown').value)}
      </div> */}
      <h1>Welcome Dear {props.name}</h1>
      <div className="d-flex justify-content-center"><Coupons data={props.data} /></div>
    </div>
  );
}

// category={props.category}
=======
import React, { useState } from "react";
import Coupons from "./Coupons";
export default function Home(props) {

  return (
    <div>

      {/* <div>
        <select id="dropdown">
          <option value="ALL">ALL</option>
          <option value="Mobiles">Mobiles</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronis">Electronis</option>
        </select>
              {console.log( document.getElementById('dropdown').value)}
      </div> */}
      <h1>Welcome Dear {props.name}</h1>
      <div className="d-flex justify-content-center"><Coupons data={props.data} /></div>
    </div>
  );
}

// category={props.category}
>>>>>>> 8a5e369931205b534b2db22ddad9e9e45d5730b1
