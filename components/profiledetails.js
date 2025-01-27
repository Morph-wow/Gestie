const mockUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Team Member",
  };
  
  export default function ProfileDetails() {
    return (
      <div>
        <p><strong>Name:</strong> {mockUser.name}</p>
        <p><strong>Email:</strong> {mockUser.email}</p>
        <p><strong>Role:</strong> {mockUser.role}</p>
      </div>
    );
  }
  