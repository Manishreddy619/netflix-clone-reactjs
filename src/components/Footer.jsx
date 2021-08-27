import { Container, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col sm={6} md={3}>
            <ul>
              <div className="break-line icons">
                <a href="#">
                  <Facebook
                    size={30}
                    style={{ color: "white" }}
                    className="mr-2"
                  />
                </a>
                <a href="#">
                  <Instagram
                    size={30}
                    style={{ color: "white" }}
                    className="mr-2"
                  />
                </a>
                <a href="#">
                  <Twitter
                    size={30}
                    style={{ color: "white" }}
                    className="mr-2"
                  />
                </a>
                <a href="#">
                  <Youtube
                    size={30}
                    style={{ color: "white" }}
                    className="mr-2"
                  />
                </a>
              </div>
              <li>
                <a href="#">Audio and Subtitles</a>
              </li>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <Button variant="light">Service Code</Button>
            <p className="mt-3 copyright">&copy; 2021 Strive School</p>
          </Col>
          <Col sm={6} md={3}>
            <ul>
              <div className="break-line"></div>
              <li>
                <a href="#">Audio Description</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <ul>
              <div className="break-line"></div>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
            </ul>
          </Col>
          <Col sm={6} md={3}>
            <ul>
              <div className="break-line"></div>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
