import React from 'react'

const Nav = () => {
  return (
    <header>
      <nav className="nav-link">
        <a id="logo" href="/">
          Where in the world?
        </a>
        <p className="mode-toggle">
          <i class="far fa-moon"></i>Dark Mode
        </p>
      </nav>
    </header>
  )
}

export default Nav
