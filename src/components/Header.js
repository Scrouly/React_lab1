import React from 'react'
// import Button from './Button'

class Header extends React.Component {
  render() {
    return (
    <header className='header'>{this.props.title}
    {/* <Button text="Нажми на меня"></Button> */}
    </header>
    )
  }
}


export default Header