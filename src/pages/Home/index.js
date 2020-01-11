import React, { Component } from "react";
import CardListing from "../../components/CardListing";
import { connect } from "react-redux";
import { Row, Col } from "antd";

import { fetchBooks } from "../../store/actions";
import * as S from "./styles";

// const Home = props => {
//   return <CardListing />;
// };

class Home extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books } = this.props;
    console.log(this.props);

    return (
      <S.Container>
        <Row type="flex" align="middle" gutter={20}>
      <S.Margin>
          {books &&
            books.map(book => (
              <S.MCol lg={8} md={12} sm={24} xs={24} key={book.id}>
                <CardListing key={book.id} book={book} />
              </S.MCol>
            ))}
        </S.Margin>
        </Row>
      </S.Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: Object.values(state.books.allBooks)
  };
};

export default connect(mapStateToProps, { fetchBooks })(Home);
