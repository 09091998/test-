import React from 'react'
import { BsFillArrowDownCircleFill} from "react-icons/bs";




 function BridgeFront() {
    require('./bridge.css');
    
      return (
        <>
        

        <nav className='navbar'>
             <h1>Thicc Bridge</h1>
             <div className='btns'>
              <button className='r-btn connect-btn'>Connect Wallet</button>
             </div>
        </nav>

    <div className='container1'>
       <div class='taxtfield'>
<div class ='alltext'>
  <form >
    <label for="account">Amount</label>
 
    <div class='newbox'>
      <input type="text" id="acc" name="account" placeholder=" 0.00"></input>
      <div class='dropdown'>
      <label for="token">  </label>
      <select className="token">
        <option value="ethereum">eth</option>
        <option value="bitcoin">btc</option>
        <option value="binance">bsc</option>
      </select>
      </div>
    </div>
  
    <div class='swapIcon'>
      <BsFillArrowDownCircleFill className='icon' size={35}/>
    </div>
     <label for="lname">Reciever</label>
    <div class ='newbox2'>
    <input type="text" id="acc" name="reciever" placeholder="   "></input>
    </div>
  

             <div className='Dbutton'>
             <button class='btn'>Deposit</button>
             </div>

              <div className='inputs'>
             <label className='text-fieldname'>Transaction Hash:</label>
            
            <div class ='newbox3'>
             <input type="text" id="acc" name="hash" placeholder="  "></input>
             </div>
             </div>
             <div className='Claimbutton'>
             <button class='btn'>Claim Tokens</button>
             </div>
            
          
    
 </form>
 </div>
</div>
</div>
</>





      )
}
export default BridgeFront 
