import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: ${props => (props.details ? "520px" : "320px")};
  background: #ffffff;
  box-shadow: 0px 2px 16px rgba(22, 25, 102, 0.06);
  border-radius: 1rem;
  transition: box-shadow 0.2s ease-in;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 2px 30px rgba(22, 25, 102, 0.1);
  }

  @media only screen and (max-width: 575px) {
    width: auto;
    margin-top: 1.2rem;
  }
`;

export const Ratio = styled.div`
    position: relative;
    height: 0;
    overflow: hidden;
    padding-top: 62.5%;
    border-top-left-radius: 0.6rem;
    border-top-right-radius: 0.6rem;
    background-image: url('${props => props.image || ""}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    transition: transform .2s ease-in;

    :hover {
        transform: scale(1.04);
    }

`;

export const Thumbnail = styled.div`
  position: absolute;
  top: 0;
`;

export const Meta = styled.div`
  padding: 1.2rem;
`;

export const Date = styled.h4`
  font-size: 1rem;
  color: rgba(33, 33, 33, 0.4);
`;

export const Title = styled.h4`
  font-size: 0.9rem;
  color: #212121;
  margin-top: 8px;
  height: 2.4rem;
  line-height: 1.3rem;
  overflow: hidden;
`;

export const Donor = styled.div`
  display: inline-block;
  font-size: 14px;
  color: rgba(33, 33, 33, 0.6);
  letter-spacing: -0.14px;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  font-size: 12px;
  letter-spacing: -0.12px;
  color: rgba(33, 33, 33, 0.6);
  line-height: 1.3rem;
  height: ${props => (props.details ? "100%" : "62px")};
  overflow: hidden;
  margin-bottom: 2rem;
`;

export const ReadMore = styled(NavLink)`
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: -0.12px;
  color: #212121;
  position: relative;
  left: 1rem;
`;
