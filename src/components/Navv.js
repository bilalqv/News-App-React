import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Icon } from "semantic-ui-react";

const Navv = ({ setCountry, setSource, query, setQuery, setUrl }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleClick1 = (event) => {
    setCountry(event.currentTarget.getAttribute('value'))
    setSource("")
  };
  const handleClick2 = (event) => {
    setSource(event.currentTarget.getAttribute('value'))
  };

  

  const handleSubmit =() =>{
    setUrl(`https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${apiKey}`)
    setQuery("");
  }

    return ( 
        
            <Navbar id="nav-bar" bg="dark" expand="lg" variant="dark"  >
              <Container fluid>
                <Navbar.Brand href="#"> <Icon name="world"  /> News App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                  >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <NavDropdown title="Country" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3" value="in" onClick={handleClick1}  >India</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" value="us" onClick={handleClick1}  >USA</NavDropdown.Item>
                      <NavDropdown.Item href="#action5" value="ca" onClick={handleClick1}  >
                        Canada
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Source" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3" value="abc-news" onClick={handleClick2} >ABC News</NavDropdown.Item>
                      <NavDropdown.Item href="#action4" value="ary-news" onClick={handleClick2} >ARY News</NavDropdown.Item>
                      <NavDropdown.Item href="#action5" value="bbc-news" onClick={handleClick2} >
                        BBC News
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      value={query}
                      onChange= {(e) => {setQuery(e.target.value)}}

                    />
                    <Button variant="secondary" onClick={handleSubmit} >Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
        
     );
}
 
export default Navv;