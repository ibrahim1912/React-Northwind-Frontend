import React, { useState } from "react";
import { useHistory } from "react-router";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Link, NavLink } from 'react-router-dom';

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true); //destructing 
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as="a" as={NavLink} to="/" name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated?<SignedIn signOut={handleSignOut} />: <SignedOut signIn={handleSignIn} />} 
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
