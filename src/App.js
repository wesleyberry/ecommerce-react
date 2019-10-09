import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import uuid from 'uuid';
import guitar from './images/guitar_1.jpg';
import bass from './images/bass_1.png';
import amp from './images/amp_1.jpg';
import './App.css';

class App extends Component {
  state = {
    cardInfo: [
      {
        id: uuid.v4(),
        title: 'Acoustic Guitar 400CC',
        was: '$199.00',
        price: '$149.00',
        image: guitar
      },
      {
        id: uuid.v4(),
        title: 'Fender Bass Guitar V1.0',
        was: '$399.00',
        price: '$299.00',
        image: bass
      },
      {
        id: uuid.v4(),
        title: 'Marshal Amp 50W',
        was: '$249.00',
        price: '$199.00',
        image: amp
      },
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={ props => (
                <React.Fragment>
                  <Carousel />
                  <div className='row' style={{ marginTop: '100px' }}>
                    { this.state.cardInfo.map( cardInfo_1=> (
                      <div className="col-xs-12 col-md-6 col-lg-4">
                        <Card 
                          key = { cardInfo_1.id }
                          title = { cardInfo_1.title }
                          was = { cardInfo_1.was }
                          price = { cardInfo_1.price }
                          image = { cardInfo_1.image }
                        />
                      </div>
                    ))}

                  </div>
                </React.Fragment>
              ) } />
        </div>
      </Router>
    );
  }
}

export default App;
