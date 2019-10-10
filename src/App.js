import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Card2 from './components/Card2';
import uuid from 'uuid';
import guitar from './images/guitar_1.jpg';
import bass from './images/bass_1.png';
import amp from './images/amp_1.jpg';
import guitar_club from './images/guitar_club.jpg';
import lesson from './images/lesson.jpg';
import rentals from './images/rentals.jpeg';
import repair from './images/repair.jpg';
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
    ],
    servicesInfo: [
      {
        id: uuid.v4(),
        title: 'Lessons',
        description: 'Spend time mastering your craft with a professional musician!',
        image: lesson
      },
      {
        id: uuid.v4(),
        title: 'Repairs',
        description: 'Make sure your instrument plays well before hitting the stage or rehearsal',
        image: repair
      },
      {
        id: uuid.v4(),
        title: 'Rentals',
        description: 'Not sure which instrument you want to purchase? Take it for a test run',
        image: rentals
      },
      {
        id: uuid.v4(),
        title: 'Guitar Club',
        description: 'Learn with other aspiring musicians',
        image: guitar_club
      },
    ]
  }

  render() {  
    const footerColumns = {
      fontSize: '20px',
      textAlign: 'center',
      cursor: 'pointer'
    }
    const footerHeaders = {
      textAlign: 'center', 
      display: 'block', 
      width: '100%', 
      paddingTop: '0', 
      marginTop: '50px', 
      marginBottom: '30px',
      fontWeight: '700',
      color: 'black'
    }
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" render={ props => (
                <React.Fragment>
                  <Carousel />
                  <div className='row' style={{ marginTop: '50px' }}>
                    { this.state.cardInfo.map( cardInfo_1=> (
                      <div className="col-xs-12 col-md-6 col-lg-4" key = { cardInfo_1.id }>
                        <Card 
                          title = { cardInfo_1.title }
                          was = { cardInfo_1.was }
                          price = { cardInfo_1.price }
                          image = { cardInfo_1.image }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="row" style={{ marginTop: '50px' }}>
                      <h1 style={{ textAlign: 'center', display: 'block', width: '100%', paddingTop: '0' }}>Services</h1>
                      <h2 style={{ textAlign: 'center', display: 'block', width: '100%', paddingTop: '0' }}>Explore ways we can help you with your passion!</h2>
                  </div>
                  <div className='row' style={{ marginTop: '50px' }}>
                    { this.state.servicesInfo.map( serviceInfo_1=> (
                      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3" key = { serviceInfo_1.id }>
                        <Card2 
                          title = { serviceInfo_1.title }
                          description = { serviceInfo_1.description }
                          image = { serviceInfo_1.image }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="row justify-content-center" style={{ backgroundColor: 'white', paddingBottom: '50px' }}>
                    <div className="col-xs-12 col-md-6">
                      <h2 style={{ textAlign: 'center', display: 'block', width: '100%', paddingTop: '0', marginTop: '50px', marginBottom: '30px' }}>Subscribe to learn more about exclusive offers, tips, and more!</h2>
                      <form>
                        <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Recipient's Email Address" aria-label="Recipient's Email Address" aria-describedby="basic-addon2" />
                          <div class="input-group-append">
                            <button class="btn btn-outline-secondary" style={{ backgroundColor: 'red', color: 'white' }} type="button">Button</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row justify-content-center" style={{ paddingBottom: '50px' }}>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                      <h2 style={ footerHeaders }>
                        Your Account
                      </h2>
                      <div style={ footerColumns }>
                        <p>Order History</p>
                        <p>Returns</p>
                        <p>Wish List</p>
                        <p>Email Preferences</p>
                        <p>BusinessAccounts</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                      <h2 style={ footerHeaders }>
                        Features
                      </h2>
                      <div style={ footerColumns }>
                        <p>Rebates</p>
                        <p>Layaway</p>
                        <p>Donations</p>
                        <p>Pro Coverage</p>
                        <p>Affiliate Program</p>
                        <p>Press Room</p>
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-4">
                      <h2 style={ footerHeaders }>
                        Support
                      </h2>
                      <div style={ footerColumns }>
                        <p>Service & Support</p>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Site Map</p>
                        <p>Locations</p>
                        <p>Accessibility Statement</p>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ) } />
        </div>
      </Router>
    );
  }
}

export default App;
