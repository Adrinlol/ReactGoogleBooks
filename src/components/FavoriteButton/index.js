import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "../../components/Icon";
import { addToFavorites, removeFromFavorites } from "../../store/actions";

import * as S from "./styles";

class FavoritesBtn extends Component {
  state = { isFavorite: false };

  componentDidMount() {
    const bookId = this.props.book.id;
    const isFavorite = this.props.favoriteBooks.hasOwnProperty(bookId);
    if (isFavorite) {
      this.setState({ isFavorite: true });
    } else {
      this.setState({ isFavorite: false });
    }
  }

  onFavoriteClick = () => {
    this.setState({ isFavorite: !this.state.isFavorite });
    if (this.state.isFavorite) {
      this.props.removeFromFavorites(this.props.book.id);
    } else {
      this.props.addToFavorites(this.props.book);
    }
  };

  render() {
    return (
      <S.Button onClick={this.onFavoriteClick}>
        {!this.state.isFavorite ? (
          <Icon src="heart.svg" />
        ) : (
          <Icon src="heart-hover.svg" />
        )}
      </S.Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteBooks: state.books.favoriteBooks
  };
};

export default connect(mapStateToProps, {
  addToFavorites,
  removeFromFavorites
})(FavoritesBtn);
