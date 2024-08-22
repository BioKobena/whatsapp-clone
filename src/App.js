import styled from "styled-components";
import Conversation from "./components/Conversation";
import ContactList from "./components/ContactList";
import React from "react";


const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100vw;
background: #f8f9fb;
`;

function App() {
  return (
    <Container>
      <ContactList />
      <Conversation />
    </Container>
  )
}

export default App;
