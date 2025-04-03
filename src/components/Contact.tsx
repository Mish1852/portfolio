import '../styles/Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Here you would normally process the form data
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-container">
      <div className="container">
        <h2 className="contact-title" data-text="Get In Touch">Get In Touch</h2>
        <p className="contact-subtitle">
          Ready to collaborate on your next digital project? Drop me a message and let's create something extraordinary together.
        </p>
        
        <div className="row">
          <div className="col-md-6">
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts or project ideas..."
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-info-item">
                <FaEnvelope className="contact-info-icon" />
                <div>
                  <h3>Email</h3>
                  <p><a href="mailto:mr.mishti.95@gmail.com">mr.mishti.95@gmail.com</a></p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-info-icon" />
                <div>
                  <h3>Location</h3>
                  <p>Ghaziabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 