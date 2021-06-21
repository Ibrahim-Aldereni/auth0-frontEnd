import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import "./BestBooks.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class BestBooks extends React.Component {
  state = {
    data: [],
    err: "",
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    // get data from express server (get mongodb data)
    let serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/books`;

    let obj = {
      email: this.props.userEmail,
    };

    axios
      .get(url, { params: obj })
      .then((data) => {
        this.setState({ data: data.data });
        console.log(this.state.data);
      })
      .catch((err) => {
        this.setState({ err: "There is no books" });
      });
  };

  render() {
    return (
      <>
        {this.state.err ? (
          <p>{this.state.err}</p>
        ) : (
          <Carousel
            style={{
              width: 400,
              height: 600,
              margin: "0 auto",
              marginTop: 30,
              marginBottom: 30,
              backgroundColor: "black",
              borderRadius: 20,
            }}
          >
            {this.state.data.map((book, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={book.img}
                    alt="First slide"
                  />
                  <Carousel.Caption
                    style={{
                      backgroundColor: "black",
                      opacity: 0.8,
                      borderRadius: 10,
                    }}
                  >
                    <h3>{book.name}</h3>
                    <p>{book.desc}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        )}
      </>
    );
  }
}

export default BestBooks;
