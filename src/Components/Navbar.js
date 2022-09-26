import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { RiShoppingCartLine } from "react-icons/ri"
import { FaRegHeart } from "react-icons/fa"
import { useSelector } from "react-redux"
import "./Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbarx = () => {
  // get state from reduer Redux 
  const navbarStateCard = useSelector(state => state.anas)

  console.log(navbarStateCard);

  return (
    <>
      <Navbar className='navbar p-2 bg-primary text-white'>
        <div className='container'>
          <div className='logo d-flex'>

            <Nav className="me-auto text-white">
              <Navbar.Brand className='text-white' href="#home">

                <NavLink className={"nav-link"} to="/">React Bootstrap</NavLink>
              </Navbar.Brand>
              <div className='d-flex jsutify-content-between'>

                <Nav.Link className='text-white'>

                  <NavLink className={"nav-link"} to="/">Home</NavLink>

                </Nav.Link>

                <Nav.Link className='text-white'>
                  <NavLink className={"nav-link"} to="/about">About</NavLink>
                </Nav.Link>

                <Nav.Link className='text-white' >
                  <NavLink className={"nav-link"} to="/counter">counter</NavLink>
                </Nav.Link>


              </div>



            </Nav>


          </div>



          <div className='d-flex'>

            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">

                Anas Arbasha
              </Dropdown.Toggle>

              <Dropdown.Menu className=''>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item className="bg-danger text-white" href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown className="px-3">
              <Dropdown.Toggle variant="danger" id="dropdown-basic">
                <Badge id="Badge" bg="" className={navbarStateCard <= 0 ? "d-none" : 'Badge'}>
                  {/* {navbarStateCard >= 100 ? "100 +" : navbarStateCard} */}
                </Badge>
                <FaRegHeart variant="dark" />
              </Dropdown.Toggle>

              <Dropdown.Menu className=''>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>



            <Dropdown className="px-3">
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <Badge id="Badge" bg="" className={navbarStateCard <= 0 ? "d-none" : 'Badge'}>
                  {navbarStateCard >= 100 ? "100 +" : navbarStateCard}
                </Badge>
                <RiShoppingCartLine variant="dark" />
              </Dropdown.Toggle>

              <Dropdown.Menu className=''>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>









          </div>

        </div>

      </Navbar>
    </>
  )
}

export default Navbarx