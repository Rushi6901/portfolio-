document.addEventListener("DOMContentLoaded", function () {
    const toggleSections = document.querySelectorAll(".toggle-section");
  
    toggleSections.forEach(section => {
      const header = section.querySelector(".toggle-header");
      const content = section.querySelector(".toggle-content");
  
      content.style.display = "none";
  
      header.addEventListener("click", () => {
        const isVisible = content.style.display === "block";
        content.style.display = isVisible ? "none" : "block";
        header.classList.toggle("active", !isVisible);
      });
    });
  
    sendViewNotification();
    insertResumeDetails();
    insertProjectExperienceDetails();
    addContactIcons();
  });
  
  function sendViewNotification() {
    fetch('https://formspree.io/f/mzblypwk', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _replyto: 'rushikeshDhavan26209@gmail.com',
        subject: 'New Visitor Notification',
        message: 'Someone just viewed your portfolio site.'
      })
    })
      .then(response => console.log("Visitor notification sent."))
      .catch(error => console.error("Email sending error:", error));
  }
  
  function addContactIcons() {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.innerHTML += `
        <div style="margin-top: 20px; font-size: 24px;">
          <a href="mailto:rushikeshDhavan26209@gmail.com" target="_blank" style="margin-right: 15px; color: #ff00ff;"><i class="fas fa-envelope"></i></a>
          <a href="https://github.com/Rushi6901" target="_blank" style="margin-right: 15px; color: #0ff;"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/rushi6901" target="_blank" style="color: #ff00ff;"><i class="fab fa-linkedin"></i></a>
        </div>
      `;
    }
  }
  
  function insertResumeDetails() {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.innerHTML += `
        <div class="resume-details">
          <h3 style="color: #0ff;">Professional Summary</h3>
          <p>I am a creative Computer Science graduate with hands-on experience in full-stack development using Java, React.js, Spring Boot, and SQL.</p>
          <h3 style="color: #0ff;">Certifications</h3>
          <ul>
            <li>Full-Stack Web Development - Linkcode Technology</li>
            <li>MySQL Skill Course - SkillCourse</li>
            <li>Software Developer - HackerRank</li>
          </ul>
          <h3 style="color: #0ff;">Achievements</h3>
          <ul>
            <li>3-Star Java Programmer on HackerRank</li>
            <li>Runner-up in Blind Coding Competition</li>
            <li>Team Leader at Smart India Hackathon (SIH) 2023</li>
          </ul>
          <h3 style="color: #0ff;">Languages</h3>
          <p>English, Marathi, Hindi</p>
        </div>
      `;
    }
  }
  
  function insertProjectExperienceDetails() {
    const projects = document.querySelector("#projects .project .toggle-content");
    if (projects) {
      projects.innerHTML = `
        <div class="animated-details">
          <h4>Deepfake Detection using Deep Learning</h4>
          <p><strong>Duration:</strong> Sep 2023 – May 2024</p>
          <p>Developed a robust solution to detect deepfake content using CNNs. Integrated audio-visual fusion to enhance detection accuracy. Used GANs to generate fake datasets and achieved 90%+ accuracy.</p>
          <ul>
            <li>Trained models using TensorFlow & Keras</li>
            <li>Integrated OpenCV for visual recognition</li>
            <li>Built real-time prediction UI</li>
          </ul>
        </div>
      `;
    }
  
    const exp1 = document.querySelector("#experience .experience:nth-child(2) .toggle-content");
    if (exp1) {
      exp1.innerHTML = `
        <div class="animated-details">
          <h4>Web Developer – Accenture</h4>
          <p><strong>Duration:</strong> Sep 2024 – Dec 2024</p>
          <p>Worked on responsive web applications using React.js. Collaborated in Agile teams and built reusable UI components. Integrated REST APIs and improved performance by 30%.</p>
          <ul>
            <li>Component-based design in React</li>
            <li>REST API Integration</li>
            <li>Agile sprint delivery</li>
          </ul>
        </div>
      `;
    }
  
    const exp2 = document.querySelector("#experience .experience:nth-child(3) .toggle-content");
    if (exp2) {
      exp2.innerHTML = `
        <div class="animated-details">
          <h4>Web Developer – Oasis Infobyte</h4>
          <p><strong>Duration:</strong> Mar 2023 – May 2023</p>
          <p>Created modern UIs using HTML, CSS, and JavaScript. Optimized website responsiveness and collaborated on production deployment for client projects.</p>
          <ul>
            <li>Bootstrap and JS for dynamic forms</li>
            <li>Media queries for responsive design</li>
            <li>Form validation and event handling</li>
          </ul>
        </div>
      `;
    }
  }
  
