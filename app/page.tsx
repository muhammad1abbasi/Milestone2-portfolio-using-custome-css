export default function HomePage() {
  return ( 
    
    <section>
      <h1>Welcome to My Portfolio</h1>
      
    
      <div>
        <img src="/images/cssimg.png" alt="Profile" className="profile-image" />
      </div>

   
      <h2>Skills</h2>
      <div className="skills-bar">
        <div className="skill">
          <p>JavaScript</p>
          <div className="progress"><div className="progress-filled" style={{ width: '85%' }}></div></div>
        </div>
        <div className="skill">
          <p>React</p>
          <div className="progress"><div className="progress-filled" style={{ width: '75%' }}></div></div>
        </div>
        <div className="skill">
          <p>CSS</p>
          <div className="progress"><div className="progress-filled" style={{ width: '70%' }}></div></div>
        </div>
      </div>

      <h2>Projects</h2>
      <div className="projects-bar">
        <div className="project">
          <p>Visit my linkdIn for my projects</p>
        </div>
        <div className="project">
          <p>Visit my Github for my projects</p>
        </div>
      </div>
      
    </section>
   
  );
}
