import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon";

export const Footer = styled.div`
  background: #fff;
  padding: 3rem 0;

  @media only screen and (max-width: 768px) {
      padding: 30px 0;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  display: inline-block;
  color: rgba(22, 25, 102, 0.7);

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  color: rgba(22, 25, 102, 0.7);
  margin-bottom: 10px;
  margin: 0 1rem;
  transition: color 0.2s ease-in;

  &:hover,
  &:focus,
  &:active {
    color: rgba(22, 25, 102, 1);
  }
`;

export const StyledIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 12px;
`;

export const Block = styled.div``;

export const Social = styled.a``;

export const CSite = styled.div`
  font-size: 14px;
  margin-top: 10px;
  color: rgba(22, 25, 102, 0.7);
`;
