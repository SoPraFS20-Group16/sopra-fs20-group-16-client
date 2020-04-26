import React, { Component } from 'react';
import axios from 'axios';
import {Button} from "../../views/design/Button";

export default class FactBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }
  }



  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

    axios.get(url)
      .then(res => {
        let data = res.data.quotes;
        let quoteNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNum];

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        });
      })
  }


  getNewQuote = () => { //will be called on clicking the New Quote button
    this.getQuote()
  };

  render() {
    const { quote, author } = this.state;
    return (
      <div>
        <h5 className='title'>Random Quote</h5>

        <div>
            <div style={{width: '100%', whiteSpace:'pre-wrap'}}>
              <p>{quote}</p>
            </div>
            <div>
              <p>{author}</p>
            </div>

          <Button onClick={this.getNewQuote}>
            New Quote
          </Button>

        </div>
      </div>
    )
  }
}