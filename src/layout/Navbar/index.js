import React from "react";
import { Row, Col } from "antd";
import Container from "../../components/Container";

import * as S from "./styles";

import items from "./config";

const NavBar = props => (
  <S.Navbar>
    <Container>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={24}>
          {items.map((item, index) => (
            <S.CustomNavLink
              key={index}
              to={item.path}
              activeClassName="active"
            >
              {item.title}
            </S.CustomNavLink>
          ))}
        </Col>
      </Row>
    </Container>
  </S.Navbar>
);

export default NavBar;
