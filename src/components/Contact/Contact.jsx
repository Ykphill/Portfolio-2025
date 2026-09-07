import { useState } from "react";
import "./Contact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((current) => ({ ...current, [name]: value }));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
		);

		const mailtoUrl = `mailto:pbell24@students.kennesaw.edu?subject=${subject}&body=${body}`;
		window.location.assign(mailtoUrl);
		setSubmitted(true);
	};

	return (
		<main className="contact-page">
			<section className="contact-page__intro">
				<p className="contact-page__kicker">Contact</p>
				<h1>Let&apos;s build something thoughtful.</h1>
				<p>
					Have a project, opportunity, or question? Send me a message and I&apos;ll get back to you.
				</p>
				<a href="mailto:pbell24@students.kennesaw.edu">pbell24@students.kennesaw.edu</a>
			</section>

			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Name
					<input name="name" value={formData.name} onChange={handleChange} required />
				</label>
				<label>
					Email
					<input type="email" name="email" value={formData.email} onChange={handleChange} required />
				</label>
				<label>
					Message
					<textarea name="message" rows="7" value={formData.message} onChange={handleChange} required />
				</label>
				<button type="submit">Open email</button>
				{submitted && <p className="contact-form__status">Your email draft is ready to send.</p>}
				<p className="contact-form__fallback">
					If the button does not open your email app, <a href="mailto:pbell24@students.kennesaw.edu">email me directly</a>.
				</p>
			</form>

			<a className="contact-page__back" href="#home">Back to home</a>
		</main>
	);
};

export default Contact;
