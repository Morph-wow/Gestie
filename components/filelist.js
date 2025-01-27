const mockFiles = [
    { id: 1, name: "Team Roadmap.pdf", uploadedBy: "Alice" },
    { id: 2, name: "Project Requirements.docx", uploadedBy: "Bob" },
    { id: 3, name: "Budget.xlsx", uploadedBy: "Charlie" },
  ];
  
  export default function FileList() {
    return (
      <ul>
        {mockFiles.map((file) => (
          <li key={file.id}>
            <strong>{file.name}</strong> (uploaded by {file.uploadedBy})
          </li>
        ))}
      </ul>
    );
  }
  