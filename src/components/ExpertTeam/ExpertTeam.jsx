import React from "react";
import "./ExpertTeam.css";

const teamMembers = [
  {
    id: 1,
    name: "Neeraj Kumar",
    role: "Founder & CEO",
    image: "/assets/user-1.png",
  },
  {
    id: 2,
    name: "Ajeet Rawat",
    role: "Chief Operating Officer",
    image: "/assets/user-2.png",
  },
  {
    id: 3,
    name: "Pranchal Verma",
    role: "Lead Developer",
    image: "/assets/user-3.png",
  },
  {
    id: 4,
    name: "Sanjay Singh",
    role: "UI/UX Designer",
    image: "/assets/user-4.png",
  },
];

const ExpertTeam = () => {
  return (
    <section id="team" className="expert-team-section">
      {/* Decorative Background */}
      <div className="team-bg-dots team-bg-dots-left"></div>
      <div className="team-bg-dots team-bg-dots-right"></div>

      <div className="team-bg-circle team-bg-circle-top"></div>
      <div className="team-bg-circle team-bg-circle-bottom"></div>

      <div className="team-bg-lines team-bg-lines-left"></div>
      <div className="team-bg-lines team-bg-lines-right"></div>

      <div className="expert-team-container">
        {/* ================= HEADER ================= */}
        <div className="expert-team-header">
          <div className="team-small-title">
            <span></span>
            <p>Meet Our</p>
            <span></span>
          </div>

          <h2>Our Team</h2>

          <p className="team-description">
            A dedicated team of professionals working together to deliver
            <br className="desktop-break" />
            the best solutions for our clients.
          </p>

          <div className="team-heading-line">
            <span></span>
            <i></i>
          </div>
        </div>

        {/* ================= TEAM GRID ================= */}
        <div className="expert-team-grid">
          {teamMembers.map((member) => (
            <div className="expert-team-card" key={member.id}>
              {/* Small decorative dots */}
              <div className="card-dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* Image */}
              <div className="expert-team-image">
                <div className="team-image-circle"></div>

                <img src={member.image} alt={member.name} />
              </div>

              {/* Information */}
              <div className="expert-team-info">
                <h3>{member.name}</h3>

                <p>{member.role}</p>

                <div className="team-member-line"></div>
              </div>

              {/* Social Icons */}
              <div className="team-socials">
                <a href="#linkedin" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.02 2.02 0 1 0 5.25 7.04 2.02 2.02 0 0 0 5.25 3ZM20.44 13.42c0-3.47-1.85-5.09-4.31-5.09-1.99 0-2.88 1.1-3.38 1.87V8.5H9.37V20h3.38v-5.7c0-1.5.28-2.96 2.15-2.96 1.84 0 1.87 1.73 1.87 3.05V20h3.67v-6.58Z" />
                  </svg>
                </a>

                <a href="#twitter" aria-label="Twitter">
                  <svg viewBox="0 0 24 24">
                    <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.9h1.73L8.26 4.01H6.4L17.8 19.9Z" />
                  </svg>
                </a>

                <a href="#instagram" aria-label="Instagram">
                  <svg viewBox="0 0 24 24">
                    <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                  </svg>
                </a>

                <a href="#email" aria-label="Email">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.35l9 5.63 9-5.63V7H3Zm18 10V9.72l-8.47 5.3a1 1 0 0 1-1.06 0L3 9.72V17h18Z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeam;
