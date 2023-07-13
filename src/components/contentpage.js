import React, { useState } from 'react';
import './styles.css';

const PortfolioBuilder = () => {
  const [portfolioData, setPortfolioData] = useState({
    name: '',
    photo: '',
    achievements: '',
    socialMedia: '',
    honors: '',
    about: '',
    skills: '',
    projects: '',
    contact: '',
    showPreview: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPortfolioData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPortfolioData((prevData) => ({
      ...prevData,
      showPreview: true,
    }));
  };

  const handleDownload = () => {
    generatePortfolio(portfolioData);
  };

  const generatePortfolio = (data) => {
    const portfolioContent = `
      <div class="portfolio">
        <h1 class="name">${data.name}</h1>
        <div class="photo">
          <img src="${data.photo}" alt="Profile Photo" />
        </div>
        <div class="section">
          <h3 class="section-title">Achievements</h3>
          <p>${data.achievements}</p>
        </div>
        <div class="section">
          <h3 class="section-title">Social Media Handles</h3>
          <p>${data.socialMedia}</p>
        </div>
        <div class="section">
          <h3 class="section-title">Honors</h3>
          <p>${data.honors}</p>
        </div>
        <div class="section">
          <h3 class="section-title">About</h3>
          <p>${data.about}</p>
        </div>
        <div class="section">
          <h3 class="section-title">Skills</h3>
          <p>${data.skills}</p>
        </div>
        <div class="section">
          <h3 class="section-title">Projects</h3>
          <p>${data.projects}</p>
        </div>
        <div class="section">
          <h3 class="section-title">Contact</h3>
          <p>${data.contact}</p>
        </div>
      </div>
    `;

    const portfolioContainer = document.getElementById('portfolio-container');
    portfolioContainer.innerHTML = portfolioContent;
  };

  return (
    <div className="portfolio-builder-container">
      <h1 className="form-title">Portfolio Builder</h1>
      {!portfolioData.showPreview && (
        <form onSubmit={handleSubmit} className="portfolio-form">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={portfolioData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            &nbsp;
            &nbsp;

            <div className="form-column">
              <label htmlFor="photo" className="form-label">
                Photo URL:
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                value={portfolioData.photo}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="achievements" className="form-label">
                Achievements:
              </label>
              <textarea
                id="achievements"
                name="achievements"
                value={portfolioData.achievements}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
            &nbsp;
            &nbsp;

            <div className="form-column">
              <label htmlFor="socialMedia" className="form-label">
                Social Media Handles:
              </label>
              <textarea
                id="socialMedia"
                name="socialMedia"
                value={portfolioData.socialMedia}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="honors" className="form-label">
                Honors:
              </label>
              <textarea
                id="honors"
                name="honors"
                value={portfolioData.honors}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="about" className="form-label">
                About:
              </label>
              <textarea
                id="about"
                name="about"
                value={portfolioData.about}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
            &nbsp;
            &nbsp;

            <div className="form-column">
              <label htmlFor="skills" className="form-label">
                Skills:
              </label>
              <textarea
                id="skills"
                name="skills"
                value={portfolioData.skills}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-column">
              <label htmlFor="projects" className="form-label">
                Projects:
              </label>
              <textarea
                id="projects"
                name="projects"
                value={portfolioData.projects}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
            &nbsp;
            &nbsp;

            <div className="form-column">
              <label htmlFor="contact" className="form-label">
                Contact:
              </label>
              <textarea
                id="contact"
                name="contact"
                value={portfolioData.contact}
                onChange={handleInputChange}
                className="form-textarea"
                required
              />
            </div>
          </div>

          <button type="submit" className="form-button">
            Generate Portfolio
          </button>
        </form>
      )}

      {portfolioData.showPreview && (
        <div className="portfolio-preview">
          <h2 className="portfolio-preview-title">Portfolio Preview</h2>
          <div id="portfolio-container" className="portfolio-container"></div>
          <button className="download-button" onClick={handleDownload}>
            Download Portfolio
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioBuilder;
