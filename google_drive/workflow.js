module.export.handle = function*() {
  const googleDrive = this.connector("google_drive", "YOUR-CONNECTOR-ID");

  // Get 20 files from the drive ordered by name
  yield googleDrive.get("/files", {
    query: { pageSize: 20, orderBy: "name" }
  });

  // Create a sample file in the drive
  const response = yield googleDrive.post("/files", {
    query: { uploadType: "simple" },
    body: {
      name: "My first created file with Zenaton"
    }
  });

  const fileId = response.data.id;

  // Update the name of the file and star it
  yield googleDrive.patch(`/files/${fileId}`, {
    query: { uploadType: "simple" },
    body: {
      name: "My first created file with Zenaton and starred",
      starred: true
    }
  });

  // Delete the example created file
  yield googleDrive.delete(`/files/${fileId}`);
};
