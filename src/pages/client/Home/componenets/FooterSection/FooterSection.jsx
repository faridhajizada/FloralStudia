import "./FooterSection.scss";
function FooterSection() {
  return (
    <footer>
      <div className="container">
        <div className="inputdiv">
          <p>Mary Byrd</p>
          <div className="inputbox">
            <input placeholder="Your Email" type="text" />
            <button>Send</button>
          </div>
        </div>
        <div className="aboutdiv">
          <ul>
            <li>About</li>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
          <ul>
            <li>Contact</li>
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>About Me</li>
          </ul>
          <ul>
            <li>Follow Us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
