import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './WhereToFind.scss';

function WhereToFind() {
  return (
    <div className="where-to-find">
      <div className="container">
        <div className="row">
          <div className='where'>
          <p className="text-center">Contacts</p>
          <h3 className="sectionTeam text-center">Where to Find</h3>
          </div>
        </div>
        <div className="row">
        <div className='where'>
          <div className="col-md-4 bg-first p-4 toronto">
            <p className="text-center pb-3">Toronto</p>
            <div className='pb-3'>
              <p>Say hello</p>
              <a href="mailto:email@site.com">email@site.com</a>
            </div>
            <div className='pb-3'>
              <p>Phone</p>
              <a href="tel:+3693535623544">+369 35 353562 3544</a>
            </div>
            <div className='pb-3'>
              <p>Address</p>
              <a href="#">4th Avenue 4856, New York</a>
            </div>
          </div>

          <div className="col-md-4 bg-second p-4 paris">
            <p className="text-center pb-3">Paris</p>
            <div className='pb-3'>
              <p>Say hello</p>
              <a href="mailto:email@site.com">email@site.com</a>
            </div>
            <div className='pb-3'>
              <p>Phone</p>
              <a href="tel:+3693535623544">+369 35 353562 3544</a>
            </div>
            <div className='pb-3'>
              <p>Address</p>
              <a href="#">4th Avenue 4856, New York</a>
            </div>
          </div>

          <div className="col-md-4 bg-third p-4 barcelona">
            <p className="text-center pb-3">Barcelona</p>
            <div className='pb-3'>
              <p>Say hello</p>
              <a href="mailto:email@site.com">email@site.com</a>
            </div>
            <div className='pb-3'>
              <p>Phone</p>
              <a href="tel:+3693535623544">+369 35 353562 3544</a>
            </div>
            <div className='pb-3'>
              <p>Address</p>
              <a href="#">4th Avenue 4856, New York</a>
            </div>
          </div>
        </div>
        </div>
        <div className="subscribe">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center main-text">
            <h2>Subscribe to Us</h2>
            <p>
              Interactively utilize leveraged interfaces vis-a-vis state of the art human capital. Interactively parallel task focused content via low-risk high-yield internal or "organic" sources.
            </p>
            <div className="subscribe-form d-flex justify-content-center">
              <input type="email" placeholder="Your email" className="email-input" />
              <button className="send-button">Send</button>
            </div>
          </div>
        </div>
        </div>

        </div>
      </div>
  );
}

export default WhereToFind;
