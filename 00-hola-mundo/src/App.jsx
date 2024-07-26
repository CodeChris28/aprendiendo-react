import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (username) => `@${username}`;
  return (
    <div className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFolllowing
        username="midudev"
        name="Miguel Angel Duran"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFolllowing={false}
        username="pheralb"
        name="Pablo Hernandez"
      />
    </div>
  );
}
