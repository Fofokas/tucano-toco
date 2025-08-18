import { useState } from 'react'


function Header() {

  return (
    <>
        <header className='bg-secondary' style={{position:"fixed", top: 0, width: '100%', zIndex: 1000}}>
            <h1>tudo de bom para o tu cano</h1>
            <a href="#teste">teste</a>
            <a href="#teste2">teste2</a>
        </header>
    </>
  )
}

export default Header
