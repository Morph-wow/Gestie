"use client";

export default function DashboardHome() {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <p>Here is an overview of your teams activities:</p>

      <section style={{ marginTop: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
        <h2>Tasks</h2>
        <p>View and manage tasks assigned to your team members.</p>
        <a href="/dashboard/tasks" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Tasks
        </a>
      </section>

      <section style={{ marginTop: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
        <h2>Calendar</h2>
        <p>Keep track of team meetings and events.</p>
        <a href="/dashboard/calendar" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Calendar
        </a>
      </section>

      <section style={{ marginTop: "2rem", borderBottom: "1px solid #ddd", paddingBottom: "1rem" }}>
        <h2>Files</h2>
        <p>Access shared files and resources for your projects.</p>
        <a href="/dashboard/files" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Files
        </a>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Profile</h2>
        <p>View and update your personal information.</p>
        <a href="/dashboard/profile" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Profile
        </a>
      </section>
    </div>
  );
}

