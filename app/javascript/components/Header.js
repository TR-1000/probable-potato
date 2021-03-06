// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Header extends React.Component {
  render () {
    return (
      <header>
        <h1>What Are You Watching Tonight?  <img src="https://raw.githubusercontent.com/TR-1000/probable-potato/master/app/assets/images/popcorn.png" alt="popcorn" height="42" width="42" className="flicker-in-1"/></h1>
      </header>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Header
