import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import * as S from "./styles";
import Icon from "../../components/Icon";
import { Row, Col } from "antd";

const CardListing = ({ book }) => {
  const data = book.volumeInfo;
  return (
    <S.Card>
      <S.Ratio image={data.imageLinks.thumbnail}>
          <S.Thumbnail />
      </S.Ratio>
      <S.Meta>
        <Link>
          <S.Title>
            {data.title.length > 45
              ? `${data.title.slice(0, 40)}...`
              : data.title}
          </S.Title>
        </Link>
        <Fragment>
          <S.Content>
            {" "}
            {data.description
              ? `${data.description.slice(0, 200)}...`
              : data.description || null}
          </S.Content>
          <Row type="flex">
            <Col>
              <Icon src="arrow-right.svg" />
            </Col>
            <Col>
              <S.ReadMore to={`/${book.id}`}>Read More</S.ReadMore>
            </Col>
          </Row>
        </Fragment>
      </S.Meta>
    </S.Card>
  );
};

export default CardListing;
