import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBook } from "../../store/actions";
import CardListing from "../../components/CardListing";
import { Row } from "antd";
import * as S from "./styles";

class Details extends Component {
  componentDidMount() {
    const bookId = this.props.location.pathname.split("/").pop();
    this.props.fetchBook(bookId);
  }
  render() {
    const { book } = this.props;
    return (
      <S.Background>
        <S.Container>
          <Row type="flex" align="middle" justify="center" gutter={20}>
            <S.Margin>
              {book ? (
                <S.MCol lg={24} md={12} sm={24} xs={24} key={book.id}>
                  <CardListing book={book} details={true}/>
                </S.MCol>
              ) : null}
            </S.Margin>
          </Row>
        </S.Container>
      </S.Background>
    );
  }
}

const mapStateToProps = state => {
  return {
    book: state.books.currentBook
  };
};

export default connect(mapStateToProps, { fetchBook })(Details);
