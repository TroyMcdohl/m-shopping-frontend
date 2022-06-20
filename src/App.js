import React, { useContext } from "react";
import PerfoMain from "./perfoMain/pages/PerfoMain";
import { DarkContext } from "./shared/context/DarkContext";
import Navbar from "./shared/navbar/Navbar";
import styled from "styled-components";
import Contact from "./shared/contact/Contact";
import PerfoBot from "./perfoMain/components/PerfoBot";

const Container = styled.div((props) => ({
  backgroundColor: props.toggle ? "white" : "black",
  color: props.toggle ? "black" : "white",
}));

const App = () => {
  const darkModeToggle = useContext(DarkContext).toggle;

  return (
    <Container toggle={darkModeToggle}>
      <Navbar />
      <PerfoMain />
      <PerfoBot />
      <Contact />
    </Container>
  );
};

export default App;
