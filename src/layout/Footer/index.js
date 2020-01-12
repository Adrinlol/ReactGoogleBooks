import React, { Fragment } from "react";
import { Row, Col } from "antd";
import Container from "../../components/Container";

import * as S from "./styles";

const Footer = () => (
  <Fragment>
    <S.Footer>
      <Container>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={12} sm={24} xs={24} align="center">
            <S.NavLink to="/home">Home</S.NavLink>
            <S.NavLink to="/favorites">Favorites</S.NavLink>
            <S.CSite>
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </S.CSite>
          </Col>
          <Col lg={12} md={12} sm={24} xs={24} align="center">
            <S.Paragraph>Follow me on</S.Paragraph>
            <S.Block>
              <S.Social href="https://www.facebook.com" target="_blank">
                <S.StyledIcon src="facebook.svg" />
              </S.Social>
              <S.Social href="https://twitter.com/Adrinlolx" target="_blank">
                <S.StyledIcon src="twitter.svg" />
              </S.Social>
            </S.Block>
          </Col>
        </Row>
      </Container>
    </S.Footer>
  </Fragment>
);

export default Footer;
