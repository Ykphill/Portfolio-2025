import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="not-found-page">
      <img
        className="not-found-page__gif"
        src="https://media.giphy.com/media/ROF8OQvDmxytW/giphy.gif"
        alt="Sad animated face"
      />
      <p className="not-found-page__code">404</p>
      <h1>Well, this is awkward.</h1>
      <p className="not-found-page__message">
        Phillip hasn&apos;t built this feature yet. Come back later, or Go send me an angry email.
      </p>
      <div className="not-found-page__actions">
        <a href="#home">Back home</a>
        <a href="mailto:pbell24@students.kennesaw.edu?subject=Angry%20email%20about%20a%20missing%20feature">
          Send an angry email
        </a>
      </div>
    </main>
  );
};

export default NotFound;
