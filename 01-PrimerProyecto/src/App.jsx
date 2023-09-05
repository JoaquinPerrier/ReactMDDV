import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "midudev", name: "Miguel Duran", isFollowing: true },
  { userName: "pheralb", name: "Pablo Hernandez", isFollowing: true },
  { userName: "TMChein", name: "MGK", isFollowing: false },
];

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      {/* <TwitterFollowCard
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
      /> */}

      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            name={name}
            isFollowing={isFollowing}
            formatUserName={formatUserName}
          ></TwitterFollowCard>
        );
      })}
    </section>
  );
}
