import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navbar = styled.div`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.03);
  padding: 2rem 0;
  display: flex;
  flex-flow: row wrap;

  @media all and (max-width: 960px) {
    flex-direction: column;
    display: flex;
    position: static;
    padding: 1rem 0;
  }
`;

export const CustomNavLink = styled(NavLink)`
  font-size: 1rem;
  color: #212121;
  transition: color 0.2s ease-in;
  margin: 0 1.5rem;
  position: realtive;

  &:hover,
  &:active,
  &:focus {
    color: #ff7600;
  }

  &.active {
    color: #ff7600;

    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 1rem;
      height: 3px;
      border-radius: 20%;
      background: #ff7600;
      animation: widthAnimation 0.3s;
    }
  }

  &:hover {
    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      width: 1rem;
      height: 3px;
      border-radius: 20%;
      background: #ff7600;
      animation: widthAnimation 0.3s;
    }
  }

  @keyframes widthAnimation {
    0% {
      width: 9px;
    }
    100% {
      width: 1rem;
    }
  }

  @media only screen and (max-width: 960px) {
    :before {
      display: none;
    }
  }
`;

