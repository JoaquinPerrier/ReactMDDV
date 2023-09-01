export function TwitterFollowCard({
  userName,
  name,
  isFollowing,
  formatUserName,
}) {
  const imageSrc = `https://unavatar.io/${userName}`;

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt={`El avatar de ${name}`}
        />
      </header>
      <div className="tw-followCard-info">
        <strong>{name}</strong>
        <span className="tw-followCard-infoUserName">
          {formatUserName(userName)}
        </span>
      </div>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
