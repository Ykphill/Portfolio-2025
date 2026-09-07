import "./Resume.css";

const experiences = [
	{
		company: "Apto Solutions (formerly Philips Lighting)",
		location: "Atlanta, GA",
		role: "Data Erasure and IT Support Technician",
		dates: "September 2025 - Current",
		items: [
			"Support data erasure software development by logging, tracking, and clearly documenting defects.",
		],
	},
	{
		company: "ADP",
		location: "Alpharetta, GA",
		role: "Application Development Intern",
		dates: "May - August 2024",
		items: [
			"Refactored the mobile app Notification Center for an application with 15+ million users using Dart, Flutter, and the Bloc framework.",
			"Optimized mobile app compatibility for iOS and Android.",
			"Worked in a Scrum/Agile framework while reporting and completing tasks.",
			"Connected and parsed information from two REST APIs into one model for the UI.",
			"Created UI and backend test cases for the ADP mobile app.",
			"Recognized as a leader among a class of 40+ interns.",
		],
	},
	{
		company: "Signify (formerly Philips Lighting)",
		location: "Atlanta, GA",
		role: "System Test/Quality Assurance Intern",
		dates: "September 2022 - May 2023",
		items: [
			"Tracked and updated bugs using Jira and other Atlassian tools.",
			"Executed and developed manual test cases for a web application.",
			"Identified, documented, and helped resolve 25+ UI/UX defects and 5+ backend defects.",
			"Developed a Python script to process system logs into an easy-to-read text file.",
			"Set up and maintained a large-area test environment with 100+ devices, lights, and sensors.",
			"Designed and implemented a PostgreSQL inventory database for 200+ devices.",
		],
	},
	{
		company: "Signify (formerly Philips Lighting)",
		location: "Atlanta, GA",
		role: "Advanced Development Software Intern",
		dates: "January - May 2024",
		items: [
			"Resolved frontend issues using Angular, TypeScript, and HTML.",
			"Used Agile workflows to execute tasks and collaborate with coworkers.",
			"Consulted on new application development, UI design, and data analysis.",
		],
	},
];

const Resume = () => {
	return (
		<main className="resume-page">
			<header className="resume-header">
				<div>
					<p className="resume-kicker">Resume</p>
					<h1>Phillip D. Bell</h1>
					<p className="resume-location">Atlanta, GA</p>
				</div>
				<div className="resume-contact">
					<a href="mailto:pbell24@students.kennesaw.edu">pbell24@students.kennesaw.edu</a>
					<a href="tel:+17625249803">(762) 524-9803</a>
					<a href="https://www.linkedin.com/in/phillip-d-bell/" target="_blank" rel="noreferrer">LinkedIn</a>
					<a href="https://github.com/Ykphill" target="_blank" rel="noreferrer">GitHub</a>
				</div>
			</header>

			<section className="resume-section">
				<h2>Education</h2>
				<div className="resume-entry">
					<div className="resume-entry__heading">
						<h3>Kennesaw State University</h3>
						<span>Kennesaw, GA</span>
					</div>
					<p><strong>Bachelor of Science in Computer Science</strong> · Started August 2020 - TBD</p>
					<p><strong>Relevant coursework:</strong> Data Structures, Algorithm Analysis, Intro to Software Engineering, Intro to Database Management, Programming Problem Solving I/II, Technical Writing, and Professional Practices &amp; Ethics.</p>
				</div>
			</section>

			<section className="resume-section resume-section--split">
				<div>
					<h2>Developer Tools</h2>
					<p>Figma, Jira, Git, Bitbucket, Confluence, Postman, Xcode, GitHub, and VS Code</p>
				</div>
				<div>
					<h2>Languages &amp; Libraries</h2>
					<p>Java, C#, Python, JavaScript, MySQL, Bootstrap, PostgreSQL, Angular, TypeScript, HTML, CSS, Flutter, Bloc, ECL, and Dart</p>
				</div>
			</section>

			<section className="resume-section">
				<h2>Experience</h2>
				{experiences.map((experience) => (
					<article className="resume-entry" key={`${experience.company}-${experience.role}`}>
						<div className="resume-entry__heading">
							<h3>{experience.role}</h3>
							<span>{experience.dates}</span>
						</div>
						<p className="resume-entry__company">{experience.company} · {experience.location}</p>
						<ul>{experience.items.map((item) => <li key={item}>{item}</li>)}</ul>
					</article>
				))}
			</section>

			<section className="resume-section">
				<h2>Leadership &amp; Activities</h2>
				<div className="resume-entry">
					<div className="resume-entry__heading"><h3>Artificial Intelligence Club at Kennesaw State University</h3><span>August 2023 - Current</span></div>
					<p className="resume-entry__company">Treasurer / Founding Officer</p>
					<ul><li>Discuss prompt engineering basics.</li><li>Delegate tasks and responsibilities.</li><li>Report weekly progress.</li></ul>
				</div>
				<div className="resume-entry">
					<div className="resume-entry__heading"><h3>Kennesaw State University Hackathons</h3><span>September 2022 - Current</span></div>
					<p className="resume-entry__company">Member / Volunteer</p>
					<ul><li>Achieved 5 podium finishes.</li><li>Redesigned Wellstar mobile navigation.</li><li>Incorporated a Google API with Java to identify potential physicians.</li><li>Queried a dataset with 50,000 data points using ECL.</li></ul>
				</div>
			</section>

			<section className="resume-section resume-interests">
				<h2>Interests</h2>
				<p>Hackathons, Videography, Anime, Formula 1, and Soccer</p>
			</section>

			<a className="resume-back" href="#home">Back to home</a>
		</main>
	);
};

export default Resume;
