import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateBlog({  }) {
  const [newBlog, setNewBlog] = useState({
    Title: '',
    Content: '',
    Author: '',
    ImageUrl: '', // Chỉ lưu tên file hình ảnh trong database
    UploadFile: null, // Giữ đối tượng file hình ảnh
  });

  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleCreate = async (newBlog) => {
    try{
      const response = await axios.post('https://localhost:7044/api/Blog/', newBlog);
      setBlogs([...blogs, response.data]);
    }catch(error){
      console.error("error create new Blog  ", error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewBlog((prevBlog) => ({
      ...prevBlog,
      UploadFile: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate(newBlog);

    // Chuyển hướng sau khi tạo blog thành công
    navigate('/blogs');
  };
  return (
    <div class="hold-transition sidebar-mini">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="Title"
            value={newBlog.Title}
            onChange={handleChange}
            required
          />

          <label>Content:</label>
          <textarea
            name="Content"
            value={newBlog.Content}
            onChange={handleChange}
            required
          ></textarea>

          <label>Author:</label>
          <input
            type="text"
            name="Author"
            value={newBlog.Author}
            onChange={handleChange}
            required
          />

          {/* Trường ImageUrl chỉ để lưu tên file hình ảnh trong database */}
          {/* Trường UploadFile giữ đối tượng file hình ảnh */}
          <label>Upload Image:</label>
          <input type="file" onChange={handleFileChange} />

          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;