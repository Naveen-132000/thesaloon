import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";
import "../../css/footer.css";  // Adjusted path based on the folder structure
 // Make sure to create a corresponding CSS file

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="footer-container">
        {/* Salon Info Section */}
        <div className="footer-part salon-info">
          <h2>
            <span className="highlight">S</span>aloon
          </h2>
          <p>
            Welcome to our premium salon, where we offer world-class grooming and
            beauty services. Our skilled professionals ensure you get the best service
            in a luxurious environment.
          </p>
        </div>

        {/* Contact Info Section */}
        <div className="footer-part contact-info">
          <h3>Contact Info</h3>
          {footerContact.map((val, index) => (
            <p className="mb-2" key={index}>
              {val.icon} {val.name}
            </p>
          ))}
          <div className="d-flex pt-2">
            {socialIcons.slice(0, 4).map((val, index) => (
              <a className="btn btn-outline-light btn-social" href="" key={index}>
                {val.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-part services">
          <h3>Services</h3>
          <ul>
            <li><i className="fas fa-check-circle"></i> Haircut</li>
            <li><i className="fas fa-check-circle"></i> Manicure</li>
            <li><i className="fas fa-check-circle"></i> Pedicure</li>
            <li><i className="fas fa-check-circle"></i> Facial</li>
            <li><i className="fas fa-check-circle"></i> Hair Color</li>
            <li><i className="fas fa-check-circle"></i> Makeup</li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="footer-part business-hours">
          <h3>Business Hours</h3>
          <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
          <p>Sat-Sun: 10:00 AM - 5:00 PM</p>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>&copy; 2024 The Saloon. All Rights Reserved.</p>
          <p>Powered by <a href="https://magnuscopo.com/" target="_blank">Magnuscopo</a></p>
        </div>
      </footer>
    </>
  );
}
