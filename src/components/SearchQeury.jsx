import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import MovieCard from "./MovieCard";
import {
  Button,
  Form,
  Row,
  Col,
  FormGroup,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import NavBar from "./Navbar";
import { Search } from "react-bootstrap-icons";
class SearchQeury extends Component {
<<<<<<< HEAD
	breakPoints = [
		{ width: 500, itemsToShow: 2 },
		{ width: 700, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 5 },
		{ width: 1500, itemsToShow: 6 },
	];
	state = {
		// initial value?
		movies: [],
		query: '',
	};
=======
  breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1200, itemsToShow: 4 },
    { width: 1500, itemsToShow: 6 },
  ];
  state = {
    // initial value?
    movies: [],
    query: "",
    buttonClick: this.props.buttonClick,
  };
>>>>>>> f979edd7abb2274dc08ba81be7600f4cf0088243

  handleSubmit = async (e) => {
    // with async/await
    e.preventDefault();

    try {
      // the place for every operation that might fail outside of your control

      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=caa9d684&s=" +
          this.state.query
      );
      let data = await response.json();
      if (data) {
        this.setState({
          ...this.state,
          movies: data.Search,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log("props: ", this.props.buttonClick);
    console.log(this.state.query);
    return (
      <>
        <div className="my-4 text-center">
          (
          {/* <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="header-search"
              placeholder="Search movies"
              name="s"
              value={this.state.query}
              onChange={(e) => this.setState({ query: e.target.value })}
              style={{
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "lightGray",
                marginLeft: "10rem",
              }}
            />
            <button
              type="submit"
              style={{
                borderRadius: "10px",
                padding: "5px",
                backgroundColor: "green",
              }}
            >
              Click here
            </button>
          </form> */}
          {/* <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Button
            </Button>
          </InputGroup> */}
          <form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3 w-50 mx-auto">
              <FormControl
                type="text"
                id="header-search"
                placeholder="Search movies"
                name="s"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
                style={{
                  borderRadius: "10px",
                  padding: "5px",
                  backgroundColor: "lightGray",
                  marginLeft: "10rem",
                }}
              />
              <Button
                type="submit"
                style={{
                  border: "none",
                  marginLeft: "3px",
                  padding: "5px",
                  backgroundColor: "rgba(0, 0, 0, 0.13)",
                }}
              >
                <Search color="#fff" size={24} />
              </Button>
            </InputGroup>
          </form>
          )
          {/* 				
				<Form onSubmit={this.handleSubmit} className='d-flex'>
					<Form.Group>
						<Form.Control
							type='text'
							placeholder='Serach movie'
							value={this.state.query}
							onChange={(e) => this.setState({ query: e.target.value })}
							style={{ width: '250px' }}
						/>
					</Form.Group>
					<Button type='submit'>Search Here</Button>
				</Form> */}
          {this.state.query && (
            <div className="mt-4">
              <Carousel breakPoints={this.breakPoints}>
                {this.state.movies.map((movie) => {
                  return <MovieCard img={movie.Poster} key={movie.imdbID} />;
                })}
              </Carousel>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default SearchQeury;
