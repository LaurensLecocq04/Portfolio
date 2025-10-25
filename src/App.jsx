import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Laurens</span>
          </div>
          <div className="nav-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Laurens</span>
            </h1>
            <h2 className="hero-subtitle">System Engineer & Network Administrator</h2>
            <p className="hero-description">
              I specialize in system administration, network management, and infrastructure automation. 
              Currently studying Computer Science at HoGent, passionate about creating robust, scalable solutions 
              that ensure reliable and secure IT operations.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-image">
                <div className="avatar-placeholder">👨‍💻</div>
              </div>
              <div className="profile-info">
                <h3>Laurens</h3>
                <p>System Engineer</p>
                <div className="social-links">
                  <a href="mailto:laurens.lecocq@gmail.com" className="social-link">📧</a>
                  <a href="https://www.linkedin.com/in/laurens-lecocq-a0a76b386/" className="social-link">💼</a>
                  <a href="tel:+32497608977" className="social-link">📱</a>
                </div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Hello! I'm Laurens, a passionate System Engineer and Network Administrator studying Computer Science at HoGent. 
                I specialize in maintaining and optimizing IT infrastructure, ensuring systems run smoothly and securely.
              </p>
              <p>
                My expertise spans from configuring enterprise servers and managing complex network infrastructures to implementing 
                automation solutions. I believe in creating robust, secure, and efficient systems that support business operations. 
                When I'm not troubleshooting systems or optimizing networks, you'll find me exploring new technologies 
                and learning about the latest trends in IT infrastructure.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Learning</p>
                </div>
                <div className="stat">
                  <h3>10+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🖥️</div>
              </div>
              <div className="project-content">
                <h3>Enterprise Server Management</h3>
                <p>Automated server provisioning and monitoring system using Ansible, Docker, and Prometheus. Includes automated backups, security hardening, and performance optimization.</p>
                <div className="project-tech">
                  <span className="tech-tag">Linux</span>
                  <span className="tech-tag">Ansible</span>
                  <span className="tech-tag">Docker</span>
                  <span className="tech-tag">Prometheus</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Documentation</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🌐</div>
              </div>
              <div className="project-content">
                <h3>Network Monitoring Dashboard</h3>
                <p>A comprehensive network monitoring solution with real-time traffic analysis, device status tracking, and automated alerting system for enterprise networks.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">SNMP</span>
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🔧</div>
              </div>
              <div className="project-content">
                <h3>Infrastructure as Code</h3>
                <p>Complete infrastructure automation using Terraform and Kubernetes. Includes CI/CD pipelines, service mesh configuration, and multi-environment deployments.</p>
                <div className="project-tech">
                  <span className="tech-tag">Terraform</span>
                  <span className="tech-tag">Kubernetes</span>
                  <span className="tech-tag">Jenkins</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Documentation</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">🛡️</div>
              </div>
              <div className="project-content">
                <h3>Security Automation Suite</h3>
                <p>Automated security scanning and compliance checking system. Includes vulnerability assessment, log analysis, and automated remediation workflows.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">ELK Stack</span>
                  <span className="tech-tag">Nmap</span>
                  <span className="tech-tag">OpenVAS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Documentation</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">📊</div>
              </div>
              <div className="project-content">
                <h3>System Performance Analytics</h3>
                <p>Real-time system performance monitoring and analytics platform with predictive capacity planning and automated optimization recommendations.</p>
                <div className="project-tech">
                  <span className="tech-tag">Grafana</span>
                  <span className="tech-tag">InfluxDB</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">Machine Learning</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <div className="project-placeholder">☁️</div>
              </div>
              <div className="project-content">
                <h3>Cloud Migration Tool</h3>
                <p>Automated cloud migration and optimization tool for legacy applications. Includes cost analysis, performance benchmarking, and seamless deployment.</p>
                <div className="project-tech">
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Azure</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Docker</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Documentation</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-content">
            <div className="skills-category">
              <h3>System Administration</h3>
              <div className="skills-list">
                <div className="skill-item">
                  <span className="skill-name">Linux</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Windows Server</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Ansible</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Shell Scripting</span>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Network & Cloud</h3>
              <div className="skills-grid">
                <div className="skill-tag">Cisco</div>
                <div className="skill-tag">SNMP</div>
                <div className="skill-tag">AWS</div>
                <div className="skill-tag">Azure</div>
                <div className="skill-tag">Docker</div>
                <div className="skill-tag">Kubernetes</div>
                <div className="skill-tag">Terraform</div>
                <div className="skill-tag">Jenkins</div>
              </div>
            </div>

            <div className="skills-category">
              <h3>Monitoring & Security</h3>
              <div className="skills-grid">
                <div className="skill-tag">Prometheus</div>
                <div className="skill-tag">Grafana</div>
                <div className="skill-tag">ELK Stack</div>
                <div className="skill-tag">Nagios</div>
                <div className="skill-tag">Zabbix</div>
                <div className="skill-tag">Python</div>
                <div className="skill-tag">Shell Scripting</div>
                <div className="skill-tag">PowerShell</div>
              </div>
            </div>
          </div>
      </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:laurens.lecocq@gmail.com">laurens.lecocq@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <a href="tel:+32497608977">+32 497 608 977</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <a href="https://www.linkedin.com/in/laurens-lecocq-a0a76b386/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Laurens. Built with React and ❤️</p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/laurens-lecocq-a0a76b386/" className="footer-link">LinkedIn</a>
              <a href="mailto:laurens.lecocq@gmail.com" className="footer-link">Email</a>
              <a href="tel:+32497608977" className="footer-link">Phone</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App