import "./navbar.css";
import styled, { keyframes, css } from "styled-components";
import { useContext, useState } from "react";
import { DarkContext } from "../context/DarkContext";

const NavContainer = styled.div((props) => ({
  backgroundColor: props.toggle ? "white" : "black",
  height: "60px",
  position: "sticky",
  top: "0",
  color: props.toggle ? "black" : "white",
  boxShadow: `0px 16px 14px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 16px 14px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 16px 14px -2px rgba(0,0,0,0.75)`,
  zIndex: "9999",
}));

const ToggleWrapper = styled.div((props) => ({
  backgroundColor: props.toggle ? "black" : "white",
  border: "3px solid blue",
  padding: "5px 10px",
  width: "30px",
  height: "10px",
  borderRadius: "25%",
  top: "0",
  bottom: "0",
  margin: "auto 10px",
  position: "relative",
}));

const ToggleBtn = styled.div((props) => ({
  width: "40%",
  height: "100%",
  backgroundColor: props.toggle ? "white" : "black",
  position: "absolute",
  borderRadius: "50%",
  top: "0",
  cursor: "pointer",
  left: props.toggle && "5px",
  right: !props.toggle && "5px",
}));

const Navbar = () => {
  const toggle = useContext(DarkContext).toggle;
  const toggleHandler = useContext(DarkContext).toggleHandler;

  const [drawer, setDrawer] = useState(false);
  return (
    <NavContainer toggle={toggle}>
      <div className="nav_wrapper">
        <div className="nav_left">
          <h4
            className="nav_left_title"
            onClick={() => setDrawer((prev) => !prev)}
          >
            My Perfolio
          </h4>
        </div>

        <div className="nav_right">
          <ul className="nav_right_items">
            <li className="nav_right_item">
              <a href="#about">About Me</a>
            </li>
            <li className="nav_right_item">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>

          {drawer && (
            <ul className="nav_drawer_items">
              <li className="nav_drawer_item">
                <a href="#about">About Me</a>
              </li>
              <li className="nav_drawer_item">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          )}

          <ToggleWrapper toggle={toggle}>
            <ToggleBtn
              toggle={toggle}
              onClick={() => {
                toggleHandler();
              }}
            ></ToggleBtn>
          </ToggleWrapper>
        </div>
      </div>
    </NavContainer>
  );
};

export default Navbar;
