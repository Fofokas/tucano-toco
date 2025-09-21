import { useState } from 'react'


function Header() {

  return (
    <>
        <header className='header'>
          <div className='row'>
            <div className='col-2'>
              <img
                src="https://i.postimg.cc/2yHW6LcX/tucano-icon.png"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'src/assets/tucano icon.png'; }}
                alt="Tucano Icon"
              />
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
