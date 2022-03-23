import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer,ServicesIcon, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';
import Icon1 from '../../images/logo.jpg'

const Navbar = ({rightButtonName,rightButtonPath,toggle,navBarLink}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
        <ServicesIcon to='/' onClick={toggleHome} src={Icon1}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {navBarLink.map(link=> <NavItem>
              <NavLinks to={link}
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >{link}</NavLinks>
            </NavItem>)}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to={rightButtonPath}>{rightButtonName}</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
