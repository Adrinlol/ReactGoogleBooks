import React from "react";
import { Row, Col } from "antd";

import * as S from "./styles";

const Error404 = () => (
  <S.Container>
    <Row type="flex" align="middle" justify="center">
      <S.Content>
        <Row type="flex" align="middle" justify="center">
          <Col span={24}>
            <S.Back>
            <S.Page>Page not found</S.Page>
              <S.Text>The page you are looking for doesn't exist or another error occured.</S.Text>
              <S.NavLink to="/">Go back </S.NavLink>
            </S.Back>
          </Col>
        </Row>
      </S.Content>
      
    </Row>
  </S.Container>
);

export default Error404;

