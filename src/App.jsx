import React, { useState } from 'react';
import profileImg from "./assets/profile.png";


function App() {
  const [activeView, setActiveView] = useState('home');

  const renderContent = () => {
    switch (activeView) {
      case 'home':
        return <HomeSection setActiveView={setActiveView} />;
      case 'bio':
        return <AboutSection />;
      case 'work':
        return <WorkSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo" onClick={() => setActiveView('home')}>my portfolio</h1>
        <ul className="nav-links">
          <li className={activeView === 'home' ? 'active' : ''} onClick={() => setActiveView('home')}>Home</li>
          <li className={activeView === 'bio' ? 'active' : ''} onClick={() => setActiveView('bio')}>Bio</li>
          <li className={activeView === 'work' ? 'active' : ''} onClick={() => setActiveView('work')}>My Work</li>
          <li className={activeView === 'contact' ? 'active' : ''} onClick={() => setActiveView('contact')}>Contact</li>
        </ul>
      </nav>

      <main className="main-content">
        {renderContent()}
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Drishti Jha. Turning ideas into digital experiences.
        </p>


      </footer>
    </div>
  );
}

// --- Sub-Components ---

function HomeSection({ setActiveView }) {
  return (
    <section className="hero-section fade-in">
      <div className="hero-grid">
        <div className="hero-image-side">
          <div className="image-wrapper glow-effect">
            <div className="placeholder-image">
              <img
                src={profileImg}
                alt="Drishti Jha"
                className="profile-image"
              />
            </div>

          </div>
        </div>
        <div className="hero-text-side">
          <h2 className="role-tag">Web Developer | AI Enthusiast</h2>
          <h1 className="main-title">Drishti Jha</h1>
          <p className="hero-description">
            Hello! I'm a passionate developer focused on creating elegant, user-friendly websites
            and smart AI systems. I am also aiming to become a DSA expert, training daily in Python
            with a strict, energetic approach. Eager learner and exploring furthermore languages.
            <br /><br />
            Currently in second year pursuing Computer Science & Artificial Intelligence.
          </p>


          {/* Social Links Moved to Home */}
          <div className="social-links-hero" style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
            <a href="https://www.linkedin.com/in/drishti-jha-39725a326/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', padding: '12px 30px' }}>
              Connect on LinkedIn
            </a>
            <a href="https://github.com/drishtijha18" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', padding: '12px 30px' }}>
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="content-section fade-in">
      <h2 className="section-title">Bio & Skills</h2>
      <div className="card-container">
        <div className="info-card">
          <h3>The Journey</h3>
          <p>
            I started my journey exploring the basics of HTML/CSS and quickly fell in love with
            the logic of JavaScript and Python. My goal is to build applications that solve
            real-world problems.
          </p>
        </div>
        <div className="info-card">
          <h3>Technical Skills</h3>
          <ul className="skill-list">
            <li>React</li>
            <li>Python</li>
            <li>Data Structures (DSA)</li>

            <li>javascript</li>
            <li>css</li>
            <li>html</li>
            <li>nodejs</li>
            <li>expressjs</li>
            <li>mysql</li>
            <li>mongodb</li>

          </ul>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="content-section fade-in">
      <h2 className="section-title">My Work</h2>
      <div className="projects-grid">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Krishi Seva</h3>
            <p>
              Designed an integrated agriculture platform that addresses multiple challenges—market access, buyer trust, crop guidance, and contract farming—within a single system, unlike existing fragmented solutions. Built a React-based interface with MongoDB to manage farmer data, crop details, and contract records, along with weather forecast API integration for informed farming decisions. The platform enables direct connections between farmers and verified buyers, reducing middlemen, ensuring transparency, building trust, and supporting sustainable income growth.
            </p>
            <a href="https://krishi-seva-six.vercel.app/login" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Blogify</h3>
            <p>
              Designed and developed a MERN-stack blogging platform with structured content management, featuring an admin dashboard, draft handling, comment moderation, and publish controls. Implemented RESTful APIs, JWT authentication, and full CRUD operations, delivering personalized dashboards that enhance clarity, transparency, and user confidence in managing content and engagement.
            </p>
            <a href="https://blogify-ivk9.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Coffee Finder</h3>
            <p>
              Developed a Coffee Finder platform that helps users discover nearby coffee shops and cafés using location-based search. Built with a clean, user-friendly interface, it provides quick and accurate recommendations, simplifies café discovery, supports local businesses, and enhances the overall coffee-finding experience
            </p>
            <a href="https://coffee-finder-flax.vercel.app/" className="project-link" target="_blank" rel="noopener noreferrer">Visit Project &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error', or ''

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      alert('Please fill in all fields');
      return;
    }

    setStatus('sending');

    // EmailJS configuration
    const serviceID = 'service_x9j4ubg';
    const templateID = 'template_4y3odgb';
    const publicKey = 'VaFvKHU0yOinK43wK';

    // Send email using EmailJS
    window.emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Drishti Jha' // Your name
    }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('success');
        // Clear form
        setFormData({ name: '', email: '', message: '' });
        alert('Message sent successfully! I\'ll get back to you soon.');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setStatus('error');
        alert('Failed to send message. Please try again or email me directly at drishtijha.tech@gmail.com');
      });
  };

  return (
    <section className="content-section fade-in">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-direct">
          <h3>Contact Info</h3>
          <p>Email: drishtijha.tech@gmail.com</p>


        </div>
      </div>
    </section>
  );
}

export default App;
