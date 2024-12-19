import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./App.css";
import logo from "./images/h2logo.png";
import aboutBackground from "./images/about-background.jpg";
import basicPackage from "./images/basic-package.jpg";
import standardPackage from "./images/standard-package.jpg";
import premiumPackage from "./images/premium-package.jpg";

const Portfolio = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    // Simple validation to ensure all fields are filled
    if (
      !form.current.user_name.value ||
      !form.current.user_email.value ||
      !form.current.message.value
    ) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    emailjs
      .sendForm(
        "service_ym7b3np", // Service ID from EmailJS
        "template_gi4g2cb", // Template ID from EmailJS
        form.current,
        "MNqCsy2SUwhD8R5sy" // Public Key from EmailJS
      )
      .then(
        result => {
          alert("Message Sent! We will get back to you soon.");
          form.current.reset(); // Reset form on successful submission
        },
        error => {
          alert("An error occurred. Please try again later.");
          console.error("EmailJS Error:", error.text); // Log the error for debugging
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
                <h4>Social Media Features</h4>
                <ul>
                  <li>
                    Management of 1-2 platforms (e.g., Facebook, Instagram).
                  </li>
                  <li>8-10 posts/month (basic images/videos).</li>
                  <li>Basic audience engagement strategy.</li>
                  <li>Monitoring/responding to basic messages and comments.</li>
                  <li>Monthly performance report.</li>
                </ul>
                <h4>Website Starter Package</h4>
                <ul>
                  <li>
                    Custom-designed website (up to 5 pages: Home, About,
                    Services, Contact, Blog).
                  </li>
                  <li>Mobile and SEO-friendly design.</li>
                  <li>Basic contact form integration.</li>
                </ul>
                <p>
                  <strong></strong>
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
                    LinkedIn).
                  </li>
                  <li>
                    12-15 posts/month with graphic design and optimized
                    captions.
                  </li>
                  <li>Interactive content (polls, Q&A, stories).</li>
                  <li>Competitor analysis and ad campaign management.</li>
                  <li>Monthly report with actionable insights.</li>
                </ul>
                <h4>Website Growth Package</h4>
                <ul>
                  <li>Everything in Starter Package, plus:</li>
                  <li>E-commerce functionality (up to 20 products).</li>
                  <li>Blog setup with CMS.</li>
                  <li>Social media integration.</li>
                  <li>Enhanced SEO optimization.</li>
                  <li>Delivery: 4-5 weeks.</li>
                </ul>
                <p>
                  <strong></strong>
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
                  <li>Management of up to 4 platforms (e.g., TikTok).</li>
                  <li>
                    20-25 high-quality posts/month (advanced designs/videos).
                  </li>
                  <li>Advanced audience analysis and strategy.</li>
                  <li>Real-time monitoring and responses.</li>
                  <li>Comprehensive performance reporting with key metrics.</li>
                </ul>
                <h4>Comprehensive Solutions</h4>
                <ul>
                  <li>Everything in Growth Package, plus:</li>
                  <li>Unlimited pages and e-commerce catalog.</li>
                  <li>
                    Custom integrations (e.g., booking systems, chatbots).
                  </li>
                  <li>Advanced SEO and analytics.</li>
                  <li>Delivery: 6-8 weeks.</li>
                </ul>
                <p>
                  <strong></strong>
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
