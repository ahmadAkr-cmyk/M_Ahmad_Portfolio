import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance MERN Developer</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built full-stack web apps for real clients including a visa
              consultancy website, social media platform, and POS systems
              using the MERN stack.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>University Award Winner</h4>
                <h5>University of Lahore</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Awarded for building a secure encrypted file management system
              with AES encryption, admin panel, audit logs, and zero
              plaintext storage.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>University of Lahore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently in 4th semester studying DSA, OOP, DBMS, Information
              Security, Assembly Language, and Software Engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
