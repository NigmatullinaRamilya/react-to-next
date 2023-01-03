import { useState } from 'react';
import Link from "next/link";

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {
  const [likes, setLikes] = useState(0);

  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>

      <h2>Errors</h2>
      <ul>
        <li><Link href={'/301-moved-permanently'}>301 – Moved Permanently</Link></li>
        <li><Link href={'/308-permanent-redirect'}>308 – Permanent Redirect</Link></li>
        <li><Link href={'/404-not-found'}>404 – Not Found</Link></li>
      </ul>
    </div>
  );
}
