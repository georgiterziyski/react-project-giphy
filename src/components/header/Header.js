import React, { Component } from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Container,
    Collapse
}from 'reactstrap'

import { NavLink as RRNavLink } from 'react-router-dom'

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return  <div className="navbar-wrapper sticky-top" id="navbar-container">
                    <Navbar className="navbar navbar-expand-lg navbar-dark sticky-top">
                        <Container>
                            <NavLink
                                tag={RRNavLink}
                                className="navbar-brand"
                                exact to="/">
                                <i className="fa fa-stack-overflow mr-3" aria-hidden="true"></i>
                                <span className="project-name">GIPHY App</span>
                            </NavLink>
                            <NavbarToggler onClick={this.toggleIsOpen}/>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            tag={RRNavLink}
                                            exact to="/"
                                            activeClassName="active">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            tag={RRNavLink}
                                            exact to="/favourites"
                                            activeClassName="active">
                                            Favorites
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            tag={RRNavLink}
                                            exact to="/profile"
                                            activeClassName="active">
                                            Profile
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            tag={RRNavLink}
                                            exact 
                                            to="/login"
                                            activeClassName="active">
                                            Login
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                </div>
    }
}

export default Header;
