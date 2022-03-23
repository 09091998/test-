import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {FaEthereum} from  "react-icons/fa"
import { AiFillHeart } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { ImPriceTags } from "react-icons/im";
// import './TokenDetails.css'
import './Demo.css'

 function TokenDetails() {
    require('./TokenDetails.css');
     const[open,setOpen]=useState(false)
const[toggle,settoggle]=useState(false)

     const toggleState=()=>{
         setOpen(true)
     }
  return (
    <>
    <div className='container-fluid bg-light'>
    <div className='row'>
            <div className="col-md-4" style={{border: "1px "}}>
                <div class='icon'>
                <h1> <FaEthereum size={25}/> </h1>
                <h1><AiFillHeart size={25}/></h1>
            </div>

                 <div className='card'>
                       <img src="../assets/dog1.gif" class="card-img-top  img-fluid" alt="..."  /> 
                       </div>
                       <div className='card'>
                       <div className='card'>
                <h5 className='dropdown' onClick={()=>settoggle(!toggle)}>Details
                
                    </h5>
                </div>
                {toggle===true?

                <div>
                    <p> contaract address  - </p>
                    <p> Token Details  - </p>
                    <p> Mata data  - </p>
                    <p> Token Standerd - </p>
                    <p> Blockchain  - </p>
                </div>:''}
            
            <div className='card'>
            <h5 className='dropdown'>Discrption </h5>
                        
                               <p> The Billionaire Doge Club is 10,000 unique Doge NFT’s. How’d they earn their fortunes? Does it really matter? No one cares…that’s why we are in disguise. Just know that once you’re in the club we go hard.

                                </p>
           
            </div>
            </div>
          
                 </div>
            
            <div className='col-md-8' style={{border: "1px "}}>
                <h1>Grouchy Tiger Social Club</h1>
                <br></br>
                <p class='price text-center'>Owned by - owener name</p>
         <div className='card'> 
         
         <div className='card'>
         <h5 class='price'>sales End</h5>
         <div className='card'>
<div className='d-flex justify-content-around'>
        <div className='d-flex'> Hour</div>
        <div className='d-flex'>Minute</div>
<        div className='d-flex'>second</div>
</div>


             </div>
         </div>
         <br></br>
           <div className='card'>
            
             <h5 class='price'> current price</h5>
             <h6 > <FaEthereum size={20}/>1.5 </h6>
             
            </div>
            <br></br>
             <div className='btn_containers d-flex justify-content-evenly'>
             <button class='btn btn-primary btn-lg'>Buy Now</button>
             <button class='btn btn-primary btn-lg'>Make Offer</button>
             </div>
          </div>
          <br></br>
          <div className='card'>
          <h5 className='dropdown'><ImStatsDots/> price history
                        <ul className='dropdown-content'>
                                {/* <li>contract Address</li>
                                <li>token id</li>
                                <li>blockchain</li> */}
                            </ul>
            </h5>

          </div>
          <br></br>
          <div className='card'>
          <h5 className='dropdown'> <ImPriceTags/> Listing
                        <ul className='dropdown-content'>
                                {/* <li>contract Address</li>
                                <li>token id</li>
                                <li>blockchain</li> */}
                            </ul>
            </h5>

          </div>
          <br></br>
          <div className='card'>
          <h5 className='dropdown'>  Offer
                        <ul className='dropdown-content'>
                                {/* <li>contract Address</li>
                                <li>token id</li>
                                <li>blockchain</li> */}
                            </ul>
            </h5>

          </div>

    </div>
    </div>
    </div>      
    </>
          
        
  )
}
export default TokenDetails;