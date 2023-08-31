import "./App.css";

export function App() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://unavatar.io/midudev"
          alt="El Avatar de Midudev"
        />
      </header>
      <div className="tw-followCard-info">
        <strong className="tw-followCard-infoUserName">
          Miguel Angel Duran
        </strong>
        <span>@Midudev</span>
      </div>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
