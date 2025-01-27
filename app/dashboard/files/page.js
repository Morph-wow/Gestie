import FileList from "@/components/filelist";

export default function FilesPage() {
  return (
    <div>
      <h1>Shared Files</h1>
      <p>Here you can find all the files shared by your team members.</p>
      <FileList />
    </div>
  );
}
