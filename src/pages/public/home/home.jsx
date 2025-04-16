import React from "react";
import imgs from "../../../assets/dentalimage.webp";
import doctor from "../../../assets/doctor.jpg";
import head from "../../../assets/head_neurone.jpg";
import service from "../../../assets/service.jpg";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import "./home.scss";

const Home = () => {
  const doctors = [
    {
      image: doctor,
      title: "DOCTOR #1",
      quote: "SEEKING ROLES IN BUFORD CUMMING AND SURROUNDING AREAS",
      meta: "DR. R - 1/8/2025",
    },
    {
      image: doctor,
      title: "DOCTOR #2",
      quote: "SEEKING BUCKHEAD AND SURROUNDING AREAS",
      meta: "DR. A - 1/8/2025",
    },
    {
      image: doctor,
      title: "DOCTOR #3",
      quote: "SEEKING BUCKHEAD AND SURROUNDING AREAS",
      meta: "DR. C - 1/8/2025",
    },
  ];

  const postData = [
    {
      title: "POST YOUR RESUME",
      price: 20.0,
      image: service,
    },
    {
      title: "POST YOUR ASSOCIATE JOB DESCRIPTION",
      price: 750.0,
      image: service,
    },
    {
      title: "POST YOUR BROKERAGE LISTING",
      price: 300.0,
      image: service,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      {/* <header className="bg-black py-4 px-6 flex justify-between items-center">
        <Header />
      </header> */}

      {/* Hero Section */}
      <section class="hero-section">
        <h1>Growing Dentistry Through Technology and Innovation</h1>
        <h2>DENTAL PRACTICE GENERAL</h2>
        <p>
          We specialize in promoting dental professionals by leveraging
          technology-driven memberships for brokerage and placements for private
          dental practices
        </p>
        <button>Learn More</button>
      </section>

      {/* Large Logo Section */}
      <section className="hero-logo-section">
        <div className="logo-container">
          <img src={imgs} alt="Dental X Large Logo" />
        </div>
      </section>

      <section className="hero-logo-section">
        <h3>(404) 858-6253</h3>
      </section>

      <section className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome to Dental X</h2>
          <p>
            <strong>Empowering Dentists since 2009</strong> general dental
            dental surgery dental practice
          </p>
          <button className="welcome-btn">Find out more</button>
        </div>
      </section>

      <section className="video-section">
        <div className="video-content">
          <h2>Video</h2>
          <hr />
          <p>Check out this great video</p>
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/873192077?badge=0&byline=0&portrait=0&title=0&autoplay=0&loop=0&muted=0&controls=1"
              width="100%"
              height="400"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="The Vail"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="growth-section">
        <div className="growth-container">
          <div className="growth-text">
            <h3>CHANGING DENTAL GROWTH</h3>
            <hr />
            <h2>
              Highly Trained Dental Professionals Are Excited For This New
              Approach!
            </h2>
            <p>
              <strong>
                Streamline Your Dental Practice with Ease and Efficiency
              </strong>
            </p>
            <p>
              Connect with top candidates, manage your business seamlessly, and
              buy or sell dental offices without the hassle. <br />
              At <strong>DENTAL X</strong>, WE HAVE THE DX! <br />
              <br />
              We’re committed to reducing costs and eliminating the need to
              sacrifice your profits in inefficient partnerships. We are the
              future of dentistry, dedicated to supporting your growth and
              success. <br />
              <br />
              With our innovative membership plans and exclusive database
              access, you can bypass traditional brokers and recruitment
              agencies. Our terms allow you to save up to <strong>
                67%
              </strong>{" "}
              on typical market fees for these services. <br />
              <br />
              Take control of your practice and let us help you thrive.
            </p>
          </div>
          <div className="growth-image">
            <img src={head} alt="Digital Dental Growth" />
          </div>
        </div>
        <div className="growth-cta">
          <hr />
          <p>SPEAK TO US TODAY TO LEARN MORE</p>
        </div>
      </section>

      <section className="doctors-section">
        <h2 className="section-title">MEET OUR DOCTORS</h2>
        <div className="doctors-container">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} className="doctor-img" />
              <div className="stars">★★★★★</div>
              <h3 className="doctor-name">{doc.title}</h3>
              <p className="doctor-quote">"{doc.quote}"</p>
              <p className="doctor-meta">
                <strong>{doc.meta}</strong>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section">
        <h2 className="contact-heading">CONTACT US FOR A DEMO</h2>
        <hr className="divider" />

        <div className="contact-content">
          <h3 className="contact-subheading">
            ALLOW US TO SHARE MORE INFO WITH YOU
          </h3>
          <p className="contact-text">WE ARE HERE TO SUPPORT YOUR GROWTH</p>

          <div className="contact-info">
            <h4>Dental X</h4>
            <p>Cumming, Georgia, United States</p>
            <p>(404) 858-6253</p>

            <h4>Hours</h4>
            <p>
              Open today <strong>09:00 am – 05:00 pm</strong>
            </p>

            <button className="upload-btn">Attach Your CV Here!</button>
          </div>
        </div>
      </section>

      <div className="subscribe-container">
        <h2 className="subscribe-title">SUBSCRIBE</h2>
        <div className="subscribe-form">
          <input type="email" placeholder="Email" className="subscribe-input" />
          <button className="subscribe-button">Sign up</button>
        </div>
      </div>

      <div className="post-list">
        {postData.map((post, index) => (
          <div className="post-item" key={index}>
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-content">
              <p className="post-subtitle">
                Post resumes, post openings, post brokerage opportunities
              </p>
              <hr />
              <h3 className="post-title">{post.title}</h3>
              <p className="post-price">${post.price.toFixed(2)}</p>

              {/* PayPal Button Mock */}
              <div className="paypal-button">
                <button>
                  <img
                    src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png"
                    alt="Sign up with PayPal"
                  />
                </button>
                <div className="card-icons">
                  <img
                    src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                    alt="Cards"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
