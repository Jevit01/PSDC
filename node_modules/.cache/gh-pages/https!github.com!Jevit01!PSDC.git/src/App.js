import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";
import logo from "./images/h2logo.png"; // Import logo from src/images
import aboutBackground from "./images/about-background.jpg"; // Import background image
import basicPackage from "./images/basic-package.jpg"; // Import basic package image
import standardPackage from "./images/standard-package.jpg"; // Import standard package image
import premiumPackage from "./images/premium-package.jpg"; // Import premium package image

const Portfolio = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oe918jh",
        "template_bkf3wtp",
        form.current,
        "MNqCsy2SUwhD8R5sy"
      )
      .then(
        result => {
          alert("Message Sent! We will get back to you soon.");
          e.target.reset();
        },
        error => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="container content-align--center">
          <img src={logo} alt="P.S Digital Collectives Logo" className="logo" />
        </div>
      </header>

      {/* About Section */}
      <section
        className="about"
        style={{ backgroundImage: `url(${aboutBackground})` }}
      >
        <div className="container">
          <div className="about-content-box">
            <h2>Strategize, Craft, Elevate</h2>
            <p>
              At <strong>P.S Digital Collectives</strong>, we empower businesses
              to thrive in the digital age. Our mission is to deliver
              innovative, tailored solutions that transform your online presence
              into a powerful growth engine. From strategic social media
              management to cutting-edge web development, we specialize in
              creating digital experiences that connect, engage, and inspire.
              With a team of tech-savvy creative thinkers, we partner with
              businesses to craft strategies that resonate with their audience
              and drive measurable results. Whether you're starting your journey
              or looking to elevate your brand to new heights, P.S Digital
              Collectives is here to help you succeed. Let us take your digital
              footprint to the next level – together, we make it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages">
        <div className="container">
          <h2 className="text-center">Our Packages</h2>
          <div className="app-container">
            <div
              className="card basic-package"
              style={{ backgroundImage: `url(${basicPackage})` }}
            >
              <div className="card-content">
                <h3>Basic Package</h3>
                <h4>
                  Ideal for businesses starting their social media journey.
                </h4>
                <ul>
                  <li>
                    Management of 1-2 platforms (e.g., Facebook, Instagram)
                  </li>
                  <li>8-10 posts/month (basic images/videos)</li>
                  <li>Basic audience engagement strategy</li>
                  <li>Monitoring/responding to basic messages and comments</li>
                  <li>Monthly performance report</li>
                </ul>
                <p>
                  <strong>Price: $1,500.00 USD/month</strong>
                </p>
              </div>
            </div>

            <div
              className="card standard-package"
              style={{ backgroundImage: `url(${standardPackage})` }}
            >
              <div className="card-content">
                <h3>Standard Package</h3>
                <h4>
                  For businesses seeking steady growth and active engagement.
                </h4>
                <ul>
                  <li>
                    Management of 2-3 platforms (e.g., Facebook, Instagram,
                    LinkedIn)
                  </li>
                  <li>
                    12-15 posts/month with graphic design and optimized captions
                  </li>
                  <li>Interactive content (polls, Q&A, stories)</li>
                  <li>Competitor analysis and ad campaign management</li>
                  <li>Monthly report with actionable insights</li>
                </ul>
                <p>
                  <strong>Price: $1,900.00 USD/month</strong>
                </p>
              </div>
            </div>

            <div
              className="card premium-package"
              style={{ backgroundImage: `url(${premiumPackage})` }}
            >
              <div className="card-content">
                <h3>Premium Package</h3>
                <h4>Designed for brands seeking significant results.</h4>
                <ul>
                  <li>Management of up to 4 platforms (e.g., TikTok)</li>
                  <li>
                    20-25 high-quality posts/month (advanced designs/videos)
                  </li>
                  <li>Advanced audience analysis and strategy</li>
                  <li>Real-time monitoring and responses</li>
                  <li>Comprehensive performance reporting with key metrics</li>
                </ul>
                <p>
                  <strong>Price: $2,500.00 USD/month</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button className="button" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 P.S Digital Collectives. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
