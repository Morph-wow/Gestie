// Importiamo font e stili globali
import "../styles/globals.css";
import "../styles/layout.css"; // Gli stili personalizzati


export const metadata = {
  title: "Team Management App",
  description: "Manage your team's tasks, calendars, and files.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Team Management App</h1>
          <nav>
            <ul>
              <li><a href="/dashboard">Home</a></li>
              <li><a href="/dashboard/tasks">Tasks</a></li>
              <li><a href="/dashboard/calendar">Calendar</a></li>
              <li><a href="/dashboard/files">Files</a></li>
              <li><a href="/dashboard/profile">Profile</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
