import React, { useState, useEffect } from 'react';
import './FileUpload.css'; // Import your custom CSS file

function FileUploadForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [data, setData] = useState([]); // State to store the list of categories
  const [loadedData, setLoadedData] = useState(null); // State to store the fetched data based on selection
  const [topic, setTopic] = useState('');
  const [file, setFile] = useState(null);
  const [uploadType, setUploadType] = useState('file'); // 'file' or 'url'
  const [uploadedFiles, setUploadedFiles] = useState({});

  // Fetch the list of categories from the backend when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/videos/categories/'); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    if (selectedCategory) {
      try {
        const response = await fetch(`http://localhost:8000/videos/category/${selectedCategory}`); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setLoadedData(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && topic) {
      if (uploadType === 'file' && file) {
        const newFile = { title, author, category, file };
        setUploadedFiles((prev) => ({
          ...prev,
          [topic]: [...(prev[topic] || []), newFile],
        }));
      } else if (uploadType === 'url' && url.trim() !== '') {
        const newFile = { title, author, category, url };
        setUploadedFiles((prev) => ({
          ...prev,
          [topic]: [...(prev[topic] || []), newFile],
        }));
      }
      // Clear form
      setTitle('');
      setAuthor('');
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
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
            onChange={handleCategoryChange}
            className="select-field"
          >
            <option value="">Select Category</option>
            {data.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
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
                    {file.title} by {file.author} ({file.category})
                    {file.url ? (
                      <a href={file.url} target="_blank" rel="noopener noreferrer">
                        {file.url}
                      </a>
                    ) : (
                      <span> - File uploaded</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>

      <div className="loaded-data-section">
        <h2>Loaded Data</h2>
        {loadedData ? (
          <div className="loaded-data">
            <pre>{JSON.stringify(loadedData, null, 2)}</pre>
          </div>
        ) : (
          <p>No data loaded.</p>
        )}
      </div>
    </div>
  );
}

export default FileUploadForm;
