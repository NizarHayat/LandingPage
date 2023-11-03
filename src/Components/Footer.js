import React from 'react';

function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">K Dev</h5>
            <p>
            Thank you for considering Karakorum Dev for your digital needs. Contact us today to learn more about our services and how we can help you succeed online.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Link 1</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 2</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 3</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 4</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" className="text-dark">Link 5</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 6</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 7</a>
              </li>
              <li>
                <a href="#!" className="text-dark">Link 8</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3 bg-dark text-white">
        © 2023 Company, All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
