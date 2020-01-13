import React, { Fragment } from "react";
import * as S from "./styles";
import Icon from "../../components/Icon";
import Container from "../../components/Container";
import FavoriteButton from "../../components/FavoriteButton";
import ReactHtmlParser from "react-html-parser";
import { Row, Col } from "antd";

const CardListing = props => {
  const { book } = props;
  const { volumeInfo } = book;
  const thumbnail = volumeInfo.imageLinks.thumbnail.split('zoom')[0]

  return (
    <Container>
      <S.Card details={props.details ? true : false}>
        <S.Ratio
          image={volumeInfo.imageLinks.large || thumbnail}
        >
          <S.Thumbnail />
          <FavoriteButton book={book} />
        </S.Ratio>
        <S.Meta>
          <S.Title>
            {volumeInfo.title.length > 45
              ? `${volumeInfo.title.slice(0, 40)}...`
              : volumeInfo.title}
          </S.Title>
          <Fragment>
            {!props.details ? (
              <S.Content>
                {volumeInfo.description
                  ? `${volumeInfo.description.slice(0, 200)}...`
                  : null}
              </S.Content>
            ) : (
              <S.Content details={true}>
                {ReactHtmlParser(volumeInfo.description)}
              </S.Content>
            )}
            {!props.details ? (
              <Row type="flex">
                <Col>
                  <Icon src="arrow-right.svg" />
                </Col>
                <Col>
                  <S.ReadMore to={`detail/${book.id}`}>Read More</S.ReadMore>
                </Col>
              </Row>
            ) : (
              <Row type="flex">
                <Col></Col>
                <Col span={12}>
                  <S.Title>Published In: {volumeInfo.publishedDate}</S.Title>
                </Col>
                <Col span={12}>
                  <S.Title>Publisher: {volumeInfo.publisher}</S.Title>
                </Col>
              </Row>
            )}
          </Fragment>
        </S.Meta>
      </S.Card>
    </Container>
  );
};

export default CardListing;
