import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        userName="midudev"
        name="Miguel Duran"
        isFollowing
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        userName="pheralb"
        name="Pablo Hernandez"
        isFollowing
        formatUserName={formatUserName}
      />
      <TwitterFollowCard
        userName="vxnder"
        name="El gordo vendo"
        isFollowing={false}
        formatUserName={formatUserName}
      />
    </section>
  );
}
