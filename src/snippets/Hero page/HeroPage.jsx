import React, { useEffect, useState } from "react";
import "./HeroPage.css";
import "../../App.css";
import ButtonOne from "../ButtonOne/ButtonOne.jsx";

const typewriterPhrases = [
	"Phillip Bell",
	"A \nWeb Developer.",
	"A \nTest Engineer.",
	"Always learning more.",
];

export default function HeroPage() {
	const [phraseIndex, setPhraseIndex] = useState(0);
	const [characterCount, setCharacterCount] = useState(0);
	const currentPhrase = typewriterPhrases[phraseIndex];

	useEffect(() => {
		const isPhraseComplete = characterCount === currentPhrase.length;
		const delay = isPhraseComplete ? 2000 : 90;

		const timer = setTimeout(() => {
			if (isPhraseComplete) {
				setCharacterCount(0);
				setPhraseIndex((index) => (index + 1) % typewriterPhrases.length);
				return;
			}

			setCharacterCount((count) => count + 1);
		}, delay);

		return () => clearTimeout(timer);
	}, [characterCount, currentPhrase]);

	return (
		<section
			className="hero-page"
		>
            
			<div className="hero-page__content">
                
				<h2 className="hero-page__eyebrow">Hi, I'm</h2>
				<h1>
					<span className="typewriter">{currentPhrase.slice(0, characterCount)}</span>
				</h1>
				
			</div>

			<div className="hero-page__image-wrapper">
				<img
					className="hero-page__image"
					src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
					alt="Bright modern workspace"
				/>
			</div>
          
            <div className="hero-page__bottom">
				<p>
					I ensure that every interaction is intuitive, every design is purposeful, and every user is Satisfied.
				</p>
            </div>

			<div className="hero-page__columns">
				<div className="hero-page__column hero-page__actions">
					<ButtonOne text="About me" onClick={() => { window.location.hash = "#about"; }} />
					<ButtonOne text="Projects" onClick={() => { window.location.hash = "projects"; }} />
				</div>

				<div className="hero-page__column">
					<h2>Stacks</h2>
					<p>
                        Java ✦ C# ✦ Python ✦ Java Script ✦ MySQL ✦ Bootstrap ✦ PostgreSQL ✦ Angular ✦ Typescript ✦ HTML ✦ CSS ✦ Flutter ✦ BloC framework ✦ ECL ✦ Dart
					</p>
				</div>

				<div className="hero-page__column">
					<h2>Education</h2>
					<p className="hero-page__column_title">
						Kennesaw State University 
					</p>
					<p className="hero-page__education-details">
                        B.S. in Computer Science ✦ TBD
                    </p>
				</div>
			</div>
           
       
		</section>
	);
}
