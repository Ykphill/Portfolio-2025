import "./Projects.css";
import { FaGithub } from "react-icons/fa";


const projectSections = [
    {
        title: "Professional",
        projects: [
            {
                title: "Quality Assurance Dashboard",
                description: "A testing dashboard that helps teams track coverage, issues, and release readiness.",
                skills: "Java, Python, Testing, SQL",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
                imageAlt: "Analytics dashboard on a monitor",
            },
        ],
    },
    {
        title: "Personal",
        projects: [
            {
                title: "Portfolio Website",
                description: "A responsive portfolio for sharing my work, skills, and experience.",
                skills: "React, Vite, CSS",
                image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
                imageAlt: "Laptop displaying a website design",
            },
            {
                title: "Mobile Application",
                description: "A user-focused mobile experience designed to make everyday tasks simpler.",
                skills: "Flutter, Dart, PostgreSQL",
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
                imageAlt: "Mobile phone showing an application",
            },
        ],
    },
    {
        title: "Hackathon",
        projects: [
            {
                title: "Hackathon Project",
                description: "A collaborative solution created during a time-limited hackathon.",
                skills: "React, JavaScript, APIs",
                date: "Add date",
                position: "Add finishing position",
                image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
                imageAlt: "Team collaborating during a hackathon",
            },
        ],
    },
];

const Projects = () => {
    return (
        <main id="projects" className="projects-page">
            <div className="projects-page__header">
                <h1>Projects</h1>
                <a className="projects-page__back" href="#home">Back to home</a>
            </div>

            {projectSections.map((section) => (
                <section className="project-section" key={section.title}>
                    <h2 className="project-section__title">{section.title}</h2>
                    <div className="projects-list">
                    {section.projects.map((project) => (
                    <article className="project-row" key={project.title}>
                        <div className="project-row__image-wrapper">
                            <img src={project.image} alt={project.imageAlt} className="project-row__image" />
                        </div>
                        <div className="project-row__content">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p className="project-row__skills"><strong>Skills used:</strong> {project.skills}</p>
                            {section.title === "Hackathon" && (
                                <div className="project-row__hackathon-details">
                                    <p><strong>Date:</strong> {project.date}</p>
                                    <p><strong>Finishing position:</strong> {project.position}</p>
                                </div>
                            )}
                            <a
                                className="project-row__github"
                                href="https://github.com/Ykphill"
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <FaGithub aria-hidden="true" />
                                <span>View on GitHub</span>
                            </a>
                        </div>
                    </article>
                    ))}
                    </div>
                </section>
            ))}
        </main>
    );
};

export default Projects;