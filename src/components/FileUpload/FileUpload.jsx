import React, { useState } from 'react';
import './FileUpload.css'; // Import your custom CSS file

function FileUploadForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const [uploadType, setUploadType] = useState('file'); // 'file' or 'url'
  const [url, setUrl] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && topic) {
      if (uploadType === 'file' && file) {
        const newFile = { name: name || file.name, category, file };
        setUploadedFiles((prev) => ({
          ...prev,
          [topic]: [...(prev[topic] || []), newFile],
        }));
      } else if (uploadType === 'url' && url.trim() !== '') {
        const newFile = { name: name || 'File from URL', category, url };
        setUploadedFiles((prev) => ({
          ...prev,
          [topic]: [...(prev[topic] || []), newFile],
        }));
      }
      // Clear form
      setName('');
      setCategory('');
      setTopic('');
      setFile(null);
      setUrl('');
      setUploadType('file');
    }
  };

  const handleUploadTypeChange = (event) => {
    setUploadType(event.target.value);
    // Reset URL field when changing upload type
    if (event.target.value === 'file') {
      setUrl('');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Upload Your File</h1>
          <input
            type="text"
            placeholder="File Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="input-field"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select-field"
          >
            <option value="">Select Category</option>
            <option value="Documents">Documents</option>
            <option value="Images">Images</option>
            <option value="Videos">Videos</option>
            <option value="Others">Others</option>
          </select>
          <select
            value={uploadType}
            onChange={handleUploadTypeChange}
            className="select-field"
          >
            <option value="file">Choose File</option>
            <option value="url">Drop a URL Link</option>
          </select>
          {uploadType === 'url' && (
            <input
              type="text"
              placeholder="URL Link"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="input-field"
            />
          )}
          {uploadType === 'file' && (
            <div className="upload-button">
              <input
                type="file"
                id="file-input"
                onChange={handleFileChange}
                className="file-input"
              />
              <label htmlFor="file-input" className="file-label">
                {file ? file.name : 'Choose File'}
              </label>
            </div>
          )}
          <button type="submit" className="submit-button">
            Upload
          </button>
        </form>
      </div>

      {/* Moved the upload-section here */}
      <div className="upload-section">
        <h2>Uploaded Files by Topic</h2>
        {Object.keys(uploadedFiles).length === 0 ? (
          <p>No files uploaded yet.</p>
        ) : (
          Object.entries(uploadedFiles).map(([topic, files]) => (
            <div key={topic} className="topic-files">
              <h3>Topic: {topic}</h3>
              <ul className="file-list">
                {files.map((file, index) => (
                  <li key={index}>
                    {file.name} ({file.category})
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>

      
    </div>
  );
}

export default FileUploadForm;
