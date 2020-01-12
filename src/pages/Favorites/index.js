import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as S from "./styles";

import CardListing from "../../components/CardListing";

const Favorites = props => {
  const { favorites } = props;
  return (
    <S.Background>
      <S.Container>
          {favorites.length > 0 ? (
            <Fragment>
              {favorites.map(val => (
                <S.MCol lg={8} md={12} sm={24} xs={24} key={val.id}>
                <S.Margin>
                <CardListing key={val.id} book={val} />
                </S.Margin>
                </S.MCol>
              ))}
              </Fragment>
          ) : (
              <S.Text>Your favorite list is empty.</S.Text>
          )}
      </S.Container>
    </S.Background>
  );
};

const mapStateToProps = state => {
  return {
    favorites: Object.values(state.books.favoriteBooks)
  };
};

export default connect(mapStateToProps)(Favorites);
