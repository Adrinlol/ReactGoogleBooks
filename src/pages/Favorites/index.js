import React, { Fragment } from "react";
import { connect } from "react-redux";
import * as S from "./styles";

import CardListing from "../../components/CardListing";

const Favorites = props => {
  const { favoriteBooks } = props;

  return (
    <S.Background>
      <S.Container>
        {favoriteBooks.length > 0 ? (
          <Fragment>
            {favoriteBooks.map(val => (
              <Fragment key={val.id}>
                <S.MCol lg={8} md={12} sm={24} xs={24}>
                  <S.Margin />
                  <CardListing book={val} />
                </S.MCol>
              </Fragment>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <S.MCol lg={24} md={24} sm={24} xs={24}>
              <S.Margin />
              <S.Text>Your favorite list is empty.</S.Text>
            </S.MCol>
          </Fragment>
        )}
      </S.Container>
    </S.Background>
  );
};

const mapStateToProps = state => {
  return {
    favoriteBooks: Object.values(state.books.favoriteBooks)
  };
};

export default connect(mapStateToProps)(Favorites);
