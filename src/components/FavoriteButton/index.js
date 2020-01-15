import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Icon from "../../components/Icon";
import { addToFavorites, removeFromFavorites } from "../../store/actions";

import * as S from "./styles";

const FavoritesBtn = props => {
  const [isFavorite, setFavorite] = useState(false);
  
  useEffect(() => {
    const bookId = props.book.id;
    const isFavorite = props.favoriteBooks.hasOwnProperty(bookId);
    if (!isFavorite) {
      setFavorite(false);
    } else {
      setFavorite(true);
    }
  }, []);

  const onFavoriteClick = () => {
    setFavorite(!isFavorite);
    if (isFavorite) {
      props.removeFromFavorites(props.book.id);
    } else {
      props.addToFavorites(props.book);
    }
  };

  return (
    <S.Button onClick={onFavoriteClick}>
      {!isFavorite ? <Icon src="heart.svg" /> : <Icon src="heart-hover.svg" />}
    </S.Button>
  );
};

const mapStateToProps = state => {
  return {
    favoriteBooks: state.books.favoriteBooks
  };
};

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites
})(FavoritesBtn);
