import React, { Component } from "react";
import {Navbar, Nav, Form,FormControl } from 'react-bootstrap';

import { Link } from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
    <Navbar bg="light" variant="light" fixed="top">
        <Nav>
        <Nav.Item>
            <Link to="/">
            {" "}
            <Nav.Link
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
            />
            </Link>
            
        </Nav.Item>

        <Nav.Item>
            <Link to="/tours">
            {" "}
            <Nav.Link
                name="Tours"
                active={activeItem === "Tours"}
                onClick={this.handleItemClick}
            />
            </Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="addTour">
            {" "}
            <Nav.Link
                name="add Tour"
                active={activeItem === "add Tour"}
                onClick={this.handleItemClick}
            />
            </Link>
        </Nav.Item>
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
