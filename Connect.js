import React from 'react'

  function Connect() {
    require('./Connect.css');
  return (
      <div className='container-xxl '>
    <div className='card' style={{border:'1px'}}>

          <h1 class='h1'>Connect your wallet.</h1>
          <br></br>
          <h1 class='h2'>
              Connect with one of our available wallet providers or create a new one.
         </h1>
         <br></br>
         <div class='wallat-button'>
        <button > metamask</button>
        <button>coinbase wallat</button>
        <button>Fortmatic</button>
        </div>
    </div>
    </div>
  )
}
export default Connect;