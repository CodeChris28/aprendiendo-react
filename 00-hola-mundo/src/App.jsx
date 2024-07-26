import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
    { username: "midudev", name: "Miguel Angel Duran", isFollowing: true },
    { username: "pheralb", name: "Pablo Hernandez", isFollowing: false },
    { username: "codechris28", name: "Christian Manrique Zavala", isFollowing: true },
];

export function App() {
  return (
    <div className="App">
     {
        users.map(({username, name, isFollowing}) => (
            <TwitterFollowCard
              key={username}
              username={username}
              name={name}
              initialIsFollowing={isFollowing}
            />
          )
        )
    }
     
    </div>
  );
}
