import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import UserContext from "../UserContext";
import RenderIfAId from "./RenderIfAId";

import logoName from "./OnTrak.png";

const TopNavbar = () => (

  <UserContext.Consumer>
    {({ user, getUserLogout }) => (
      <Navbar expand="md" bg="primary" variant="dark" className="TopNav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <img src={logoName} style={{width: '5%'}}/>
          <Nav className="mr-auto">
            
            <RenderIfAId aId={1}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                onClick={{SecNav: 'display: block'}}
              >
                Groups
              </NavLink>
            </RenderIfAId>
            <RenderIfAId aId={2}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
                
              >
                Courses
              </NavLink>
            </RenderIfAId>
            <RenderIfAId aId={3}>
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                System Analytics
              </NavLink>
            </RenderIfAId>
            {/* <RenderIfAId aId={3}>
              <NavLink
                exact
                to="/ManageGroups"
                className="nav-link"
                activeClassName="active"
              >
                Manage Groups
              </NavLink>
            </RenderIfAId> */}
            <RenderIfAId aId={3}>
              <NavLink
                exact
                to="/ManageUsers"
                className="nav-link"
                activeClassName="active"
              >
                Manage Users
              </NavLink>
            </RenderIfAId>
            {/* <NavLink exact to="/about" className="nav-link" activeClassName="active">
              About
            </NavLink> */}
            
          </Nav>
        </Navbar.Collapse>
        <ButtonGroup
          size="sm"
          aria-label="Navbar action buttons"
          className="p-0"
        >
          <Button
            disabled
            variant="outline-light"
            className="text-capitalize px-1"
          >
            Welcome {user.username}{" "}
            <Badge pill variant="light" className="p-1">
              {user.type}
            </Badge>
          </Button>
          <Button
            type="submit"
            onClick={e => getUserLogout(e)}
            variant="danger"
          >
            Log-out
          </Button>
        </ButtonGroup>
      </Navbar>
    )}
  </UserContext.Consumer>
);

export default withRouter(TopNavbar);
