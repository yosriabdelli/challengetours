import React, { Component } from "react";
import {Navbar, Nav, Form,FormControl } from 'react-bootstrap';

import { Link } from "react-router-dom";

export default class NavBar extends Component {
//   state = { activeItem: "home" };
//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    // const { activeItem } = this.state;

    return (
    <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
        <Nav.Link>
            {" "}
            <Link to="/"
                name="Home"
                // active={activeItem === "Home"}
                // onClick={this.handleItemClick}
            >
                Home
            </Link>
            
        </Nav.Link>

        <Nav.Link>
            {" "}
            <Link to="/tours"
                name="Tours"
                // active={activeItem === "Tours"}
                // onClick={this.handleItemClick}
            >
                Tours
            </Link>
        </Nav.Link>
        <Nav.Link>
            {" "}
            <Link to="addTour"
                name="Add Tour"
                // active={activeItem === "Add Tour"}
                // onClick={this.handleItemClick}
            >
                Add Tour
            </Link>
        </Nav.Link>
        </Nav>

        <Form inline>
            <FormControl value={this.props.searchByName}
                onChange={(e) => this.props.setSearchByName(e.target.value)}
                icon="search"
                placeholder="Search..."
            />
        </Form>
    </Navbar>
    );
  }
}
