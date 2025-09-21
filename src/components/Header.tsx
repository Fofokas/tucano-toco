import { useState } from 'react'


function Header() {

  return (
    <>
        <header className='header'>
          <div className='row'>
            <div className='col-2'>
              <img src="src/assets/tucano icon.png" alt="Tucano-Toco" className="logo" />
            </div>
            <div className="col-10">
              <div className="titulo">Tucano-Toco</div>
            </div>
          </div>
        </header>
    </>
  )
}

export default Header
