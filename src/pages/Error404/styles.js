import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(43, 57, 144, 1);
`;

export const Back = styled.div`
  font-size: 1rem;
`;

export const NavLink = styled(Link)`
  color: rgba(43, 57, 144, 1);
  display: inline-block;
  font-weight: bold;
  margin-top: 1rem;
  text-decoration-color: #161966;
`;

export const Text = styled.div`
  display: inline-block;
  font-size: 1rem;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  background: #f0f1f3 ;
  background-image: url("/svg/error.svg") ;
  background-repeat: no-repeat;
  background-position: 50% 20%;

  @media only screen and (max-width:676px) {
    background-position: 50% 10%;
    background-size: 80% 80%;
    
  }
`

export const Content = styled.div`
  text-align: center;
  color: rgba(43, 57, 144, 1);
  max-width: 400px;
  width: 100%;
  max-height: 100%;
  margin-top: 400px;
`;