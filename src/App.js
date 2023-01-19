
import React, { useState } from "react";
import {Approuter, MApprouter} from "./Approuter";
import { Mobile, PC } from "./MediaQuery"
import './reset.css'
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)
  return (
    <>
    <div>
      <Mobile>
        <div className="mobile_container">
          <MApprouter isLoggedin={isLoggedin} />
        </div>
      </Mobile>
    </div>

    <div className="pc_container">
      <PC >
        <Approuter isLoggedin={isLoggedin} />
      </PC>
    </div>
  </>
  );
}

export default App;
