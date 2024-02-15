import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Link} from 'react-router-dom';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async()=>{
      try{
      const response = await axios.get('https://localhost:7044/api/blog/');
      setBlogs(response.data)
    }catch(error){
      console.log('Error fethcing data', error);
    }finally{
      setLoading(false)
    }
  };
  fetchData();
  }, []);

  const handleDelete = async(id)=>{
    try{
      const response = await axios.post(`https://localhost:7044/api/blog/${id}`);   
      setBlogs(blogs.filter(b => b.id != id));
     }catch(error){
      console.error("error create student", error)
     }
  }


  return (
    <div class="hold-transition sidebar-mini">
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>BlogList</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Blog List</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
            <div className="container-fluid">
              <form action="enhanced-results.html">
                <div className="row">
                  <div className="col-md-10 offset-md-1">
                    <div className="row">
                      {/* <div className="col-6">
                        <div className="form-group">
                          <label>Result Type:</label>
                          <select className="select2" multiple="multiple" data-placeholder="Any" style={{ width: '100%' }}>
                          </select>
                        </div>
                      </div> */}
                      <div className="col-3">
                        <div className="form-group">
                          <label>Sort By Name:</label>
                          <select className="select2" style={{ width: '100%' }}>
                            <option selected>ASC</option>
                            <option>DESC</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-group">
                          <label>Sort By Date:</label>
                          <select className="select2" style={{ width: '100%' }}>
                          <option selected>ASC</option>
                            <option>DESC</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-lg">
                        <input type="search" className="form-control form-control-lg" placeholder="Search"  />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-lg btn-default">
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </section>
        {/* Content Header (Page header) */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    {/* <h3 className="card-title"><a href=''>Create New Blog</a></h3> */}
                    <h3><Link to='/create-blog'>Create New Blog</Link></h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <table id="example2" className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Content</th>
                          <th>Author(s)</th>
                          <th>Date Time</th>
                          <th>Image</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogs.map((blog) => (
                          <tr key={blog.id}>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>{blog.author}</td>
                            <td>{blog.dateTime}</td>
                            <td>{blog.image}</td>
                            <td><button><Link to={`/edit/${blog.id}`}>Edit</Link></button>|<button onClick={(e) => handleDelete(blog.id)}>Delete</button></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 0 of 8 entries
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-7">
                      <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
                        <ul class="pagination">
                          <li class="paginate_button page-item previous disabled" id="example2_previous">
                            <a href="#" aria-controls="example2" data-dt-idx="0" tabIndex="0" class="page-link">Previous</a>
                          </li>
                          <li class="paginate_button page-item active"><a href="#" aria-controls="example2" data-dt-idx="1" tabIndex="0" class="page-link">1</a></li>
                          <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="2" tabIndex="0" class="page-link">2</a></li>
                          {/* <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="3" tabIndex="0" class="page-link">3</a></li>
                          <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="4" tabIndex="0" class="page-link">4</a></li>
                          <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="5" tabIndex="0" class="page-link">5</a></li>
                          <li class="paginate_button page-item "><a href="#" aria-controls="example2" data-dt-idx="6" tabIndex="0" class="page-link">6</a></li> */}
                          <li class="paginate_button page-item next" id="example2_next"><a href="#" aria-controls="example2" data-dt-idx="7" tabIndex="0" class="page-link">Next</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>

    </div>

  )

}

export default BlogList;