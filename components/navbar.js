import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard/chat">Chat</Link>
        </li>
        <li>
          <Link href="/dashboard/calendar">Calendario</Link>
        </li>
        <li>
          <Link href="/dashboard/tasks">Task</Link>
        </li>
      </ul>
    </nav>
  );
}
