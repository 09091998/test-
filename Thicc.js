import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Contract from './Contract'
import Bitcoin from './Bitcoin'
import Yorker from './Yorker'
// import { BsSearch } from "react-icons/bs";

function Thicc() {
const Walletconnect= async()=>{
  let Walletconnect =  await Contract.owner();
    console.log("wallet",Walletconnect)
  }




  const navigate = useNavigate()
  const token = useNavigate()
  const dog = useNavigate()
  const bitcoin = useNavigate()
  const yorker = useNavigate()
  require('./thicc.css');

  const Navigate = () => {
    navigate('/connect')
  };

  const Token = () => {
    token('/token')
  };
  const Dog = () => {
    dog('/dog')
  };
  const Bitcoin = () => {
   bitcoin ('/bitcoin')
  };
  const Yorker= () => {
    yorker ('/yorker')
   }

  return (
  <>
      <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Thicc</a>
    {/* <Link to='/connect' className='nav-link'>navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Link</a> */}
           <Link to='/connect' className='nav-link'>Create</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">All-Nft</a></li>
            <li><a class="dropdown-item" href="#">Collection</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Domain-Name</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resources
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Help Center</a></li>
            <li><a class="dropdown-item" href="#">Platform Status</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Gas-Free MarketPlace</a></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <button class="btn btn-outline-success" type="submit" onClick={Walletconnect}>Connect</button>
      </form>
    </div>
  </div>
</nav>


        <div className='container-fluid mainSection' >
          <div className='row'>
            <div className='col-md-8'>

              <div class='header'>
                <div class='thought'>
                  <h1> Discover, collect, and sell extraordinary NFTs</h1>
                </div>
                <div class='button'>
                  <button class='btn' >Explore</button>
                  <button class='btn' onClick={Navigate}>Create</button>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" style={{maxWidth:"18.6rem"}} size={50}>
                <img src="../assets/thicc.jpeg" class="card-img-top  img-fluid" alt="..." onClick={Token} />
                <div class="card-body">
                  <div className='d-flex justify-content-around'>
                  <h6>Price  :</h6> 
                  <h6>0.11 eth</h6>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </>
      <>
        <div className='row'>
          <div className='col-md-4'>
            <div className="card" style={{maxWidth:"18.6rem"}}>
              <img src="../assets/dog1.gif" class="card-img-top  img-fluid" alt="..." onClick={Dog} />
              <div class="card-body">
                  <div className='d-flex justify-content-around'>
                  <h6>Price  :</h6> 
                  <h6>0.11 eth</h6>
                  </div>
                </div>
            </div>
          </div>
       
        
          <div className='col-md-4'>
            <div className="card" style={{maxWidth:"18.6rem"}}>
              <img src="../assets/bitcoin.gif" class="card-img-top  img-fluid" alt="..." onClick={Bitcoin} />
              <div class="card-body">
                  <div className='d-flex justify-content-around'>
                  <h6>Price  :</h6> 
                  <h6>0.11 eth</h6>
                  </div>
                </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card"  style={{maxWidth:"18.6rem"}}>
              <img src="../assets/yorker.gif" class="card-img-top  img-fluid" alt="..." onClick={Yorker} />
              <div class="card-body">
                  <div className='d-flex justify-content-around'>
                  <h6>Price  :</h6> 
                  <h6>0.11 eth</h6>
                  </div>
                </div>
            </div>
          </div>
          
        
       
        
      </div>
    
      </>
      
    </>
  )
      
}
export default Thicc;