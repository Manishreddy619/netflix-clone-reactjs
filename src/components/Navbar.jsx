import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavDropdown,
  SplitButton,
  Dropdown,
  Container,
} from "react-bootstrap";
import { Search, ArrowRight } from "react-bootstrap-icons";
const NavBar = () => {
  return (
    <Navbar expand="lg">
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
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <Search color="white" size={24} />
              </Button>
            </Form>
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
  );
};

export default NavBar;