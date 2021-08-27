import {
<<<<<<< HEAD
	Nav,
	Form,
	FormControl,
	Button,
	Navbar,
	SplitButton,
	Dropdown,
} from 'react-bootstrap';
import { Search, ArrowRight } from 'react-bootstrap-icons';

import './Navbar.css';
import SearchQeury from './SearchQeury';
const NavBar = () => {
	return (
		<Navbar expand='lg' className='nav-change'>
			<Navbar.Brand href='#home'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'
					alt=''
					style={{ width: 100 }}
				/>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='me-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>TV Shows</Nav.Link>
					<Nav.Link href='#link'>Movies</Nav.Link>
					<Nav.Link href='#link'>Recently Added</Nav.Link>
					<Nav.Link href='#link'>My List</Nav.Link>
				</Nav>
				<Nav className='ml-auto'>
					<Nav.Link href='#deets'></Nav.Link>
					<div className='mt-2'>
						<SplitButton
							align={{ lg: 'start' }}
							title='USER'
							id='dropdown-menu-align-responsive-2'>
							<Dropdown.Item eventKey='1'>Action 1</Dropdown.Item>
							<Dropdown.Item eventKey='2'>Action 2</Dropdown.Item>
						</SplitButton>
					</div>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
=======
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  SplitButton,
  Dropdown,
} from "react-bootstrap";
import { Search, ArrowRight } from "react-bootstrap-icons";
import SearchQeury from "./SearchQeury";
import { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  state = {
    buttonClick: false,
  };
  render() {
    return (
      <>
        <Navbar expand="lg" className="nav-change">
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
              alt=""
              style={{ width: 100 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">TV Shows</Nav.Link>
              <Nav.Link href="#link">Movies</Nav.Link>
              <Nav.Link href="#link">Recently Added</Nav.Link>
              <Nav.Link href="#link">My List</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#deets">
                <Form className="d-flex">
                  <Button
                    onClick={(e) =>
                      this.setState({ buttonClick: !this.state.buttonClick })
                    }
                    variant="outline-success"
                  >
                    <Search color="white" size={24} />
                  </Button>
                </Form>
                {/* <SearchQeury /> */}
              </Nav.Link>
              <div className="mt-2">
                <SplitButton
                  align={{ lg: "start" }}
                  title="USER"
                  id="dropdown-menu-align-responsive-2"
                >
                  <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                </SplitButton>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.state.buttonClick && <SearchQeury />}
      </>
    );
  }
}
>>>>>>> f979edd7abb2274dc08ba81be7600f4cf0088243

export default NavBar;
