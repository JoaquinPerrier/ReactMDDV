import { useState } from "react";

export function TwitterFollowCard({ userName, name, formatUserName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const imageSrc = `https://unavatar.io/${userName}`;
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
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
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
