import "./About.css";

const About = () => {
	return (
		<main id="about" className="about-page">
			<div className="about-page__content">
				<h1>About me</h1>
				<p>
					I am a Computer Science student at Kennesaw State University with hands-on experience in 
                    software development, quality assurance, and IT support. I have worked with technologies 
                    including Java, Python, C#, Flutter, Angular, TypeScript, PostgreSQL, and MySQL, while 
                    gaining experience in Agile and Scrum environments. Through internships at ADP and Signify, 
                    I have contributed to mobile and web applications, automated processes, improved software quality, 
                    and resolved technical issues. I am also passionate about leadership and innovation, serving as a 
                    founding officer of the Artificial Intelligence Club and actively participating in Kennesaw 
                    State University hackathons.

				</p>
				<a className="about-page__back" href="#home">
					Back to home
				</a>
				<a className="about-page__projects" href="#projects">
					View projects
				</a>
			</div>
		</main>
	);
};

export default About;
