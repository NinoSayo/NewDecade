import React , {  } from "react";

function AdminDashboard() {
  return (
    <div classname="wrapper">
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">Dashboard</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="fake_url">Home</a></li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        {/* Info boxes */}
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-cog" /></span>
              <div className="info-box-content">
                <span className="info-box-text">CPU Traffic</span>
                <span className="info-box-number">
                  10
                  <small>%</small>
                </span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-thumbs-up" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Likes</span>
                <span className="info-box-number">41,410</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          {/* fix for small devices only */}
          <div className="clearfix hidden-md-up" />
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-shopping-cart" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Sales</span>
                <span className="info-box-number">760</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-users" /></span>
              <div className="info-box-content">
                <span className="info-box-text">New Members</span>
                <span className="info-box-number">2,000</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        <div className="row">
          <div className="col-md-12">
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
        {/* Main row */}
        <div className="row">
          {/* Left col */}
          <div className="col-md-8">
            {/* TABLE: LATEST ORDERS */}
            <div className="card">
              <div className="card-header border-transparent">
                <h3 className="card-title">Latest Orders</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table m-0">
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Item</th>
                        <th>Status</th>
                        <th>Popularity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR9842</a></td>
                        <td>Call of Duty IV</td>
                        <td><span className="badge badge-success">Shipped</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00a65a" data-height={20}>90,80,90,-70,61,-83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>iPhone 6 Plus</td>
                        <td><span className="badge badge-danger">Delivered</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f56954" data-height={20}>90,-80,90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR7429</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-info">Processing</span></td>
                        <td>
                          <div className="sparkbar" data-color="#00c0ef" data-height={20}>90,80,-90,70,-61,83,63</div>
                        </td>
                      </tr>
                      <tr>
                        <td><a href="pages/examples/invoice.html">OR1848</a></td>
                        <td>Samsung Smart TV</td>
                        <td><span className="badge badge-warning">Pending</span></td>
                        <td>
                          <div className="sparkbar" data-color="#f39c12" data-height={20}>90,80,-90,70,61,-83,68</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* /.table-responsive */}
              </div>
              {/* /.card-body */}
              <div className="card-footer clearfix">
                <a href="javascript:void(0)" className="btn btn-sm btn-info float-left">Place New Order</a>
                <a href="javascript:void(0)" className="btn btn-sm btn-secondary float-right">View All Orders</a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
            <div className="row">
              <div className="col-md-6">
                {/* DIRECT CHAT */}
                <div className="card direct-chat direct-chat-warning">
                  <div className="card-header">
                    <h3 className="card-title">Direct Chat</h3>
                    <div className="card-tools">
                      <span title="3 New Messages" className="badge badge-warning">3</span>
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                        <i className="fas fa-comments" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    {/* Conversations are loaded here */}
                    <div className="direct-chat-messages">
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">Alexander Pierce</span>
                          <span className="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Is this template really for free? That's unbelievable!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">Sarah Bullock</span>
                          <span className="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          You better believe it!
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message. Default to the left */}
                      <div className="direct-chat-msg">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-left">Alexander Pierce</span>
                          <span className="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          Working with AdminLTE on a great new app! Wanna join?
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                      {/* Message to the right */}
                      <div className="direct-chat-msg right">
                        <div className="direct-chat-infos clearfix">
                          <span className="direct-chat-name float-right">Sarah Bullock</span>
                          <span className="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                        </div>
                        {/* /.direct-chat-infos */}
                        <img className="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user" />
                        {/* /.direct-chat-img */}
                        <div className="direct-chat-text">
                          I would love to.
                        </div>
                        {/* /.direct-chat-text */}
                      </div>
                      {/* /.direct-chat-msg */}
                    </div>
                    {/*/.direct-chat-messages*/}
                    {/* Contacts are loaded here */}
                    <div className="direct-chat-contacts">
                      <ul className="contacts-list">
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user1-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Count Dracula
                                <small className="contacts-list-date float-right">2/28/2015</small>
                              </span>
                              <span className="contacts-list-msg">How have you been? I was...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user7-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Sarah Doe
                                <small className="contacts-list-date float-right">2/23/2015</small>
                              </span>
                              <span className="contacts-list-msg">I will be waiting for...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user3-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nadia Jolie
                                <small className="contacts-list-date float-right">2/20/2015</small>
                              </span>
                              <span className="contacts-list-msg">I'll call you back at...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user5-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Nora S. Vans
                                <small className="contacts-list-date float-right">2/10/2015</small>
                              </span>
                              <span className="contacts-list-msg">Where is your new...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user6-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                John K.
                                <small className="contacts-list-date float-right">1/27/2015</small>
                              </span>
                              <span className="contacts-list-msg">Can I take a look at...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                        <li>
                          <a href="fake_url">
                            <img className="contacts-list-img" src="dist/img/user8-128x128.jpg" alt="User Avatar" />
                            <div className="contacts-list-info">
                              <span className="contacts-list-name">
                                Kenneth M.
                                <small className="contacts-list-date float-right">1/4/2015</small>
                              </span>
                              <span className="contacts-list-msg">Never mind I found...</span>
                            </div>
                            {/* /.contacts-list-info */}
                          </a>
                        </li>
                        {/* End Contact Item */}
                      </ul>
                      {/* /.contacts-list */}
                    </div>
                    {/* /.direct-chat-pane */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <form action="#" method="post">
                      <div className="input-group">
                        <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                        <span className="input-group-append">
                          <button type="button" className="btn btn-warning">Send</button>
                        </span>
                      </div>
                    </form>
                  </div>
                  {/* /.card-footer*/}
                </div>
                {/*/.direct-chat */}
              </div>
              {/* /.col */}
              <div className="col-md-6">
                {/* USERS LIST */}
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Latest Members</h3>
                    <div className="card-tools">
                      <span className="badge badge-danger">8 New Members</span>
                      <button type="button" className="btn btn-tool" data-card-widget="collapse">
                        <i className="fas fa-minus" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body p-0">
                    <ul className="users-list clearfix">
                      <li>
                        <img src="dist/img/user1-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Alexander Pierce</a>
                        <span className="users-list-date">Today</span>
                      </li>
                      <li>
                        <img src="dist/img/user8-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Norman</a>
                        <span className="users-list-date">Yesterday</span>
                      </li>
                      <li>
                        <img src="dist/img/user7-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Jane</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user6-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">John</a>
                        <span className="users-list-date">12 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user2-160x160.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Alexander</a>
                        <span className="users-list-date">13 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user5-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Sarah</a>
                        <span className="users-list-date">14 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user4-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Nora</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                      <li>
                        <img src="dist/img/user3-128x128.jpg" alt="User" />
                        <a className="users-list-name" href="fake_url">Nadia</a>
                        <span className="users-list-date">15 Jan</span>
                      </li>
                    </ul>
                    {/* /.users-list */}
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer text-center">
                    <a href="javascript:">View All Users</a>
                  </div>
                  {/* /.card-footer */}
                </div>
                {/*/.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
            
          </div>
          {/* /.col */}
          <div className="col-md-4">
            {/* Info Boxes Style 2 */}
            <div className="info-box mb-3 bg-warning">
              <span className="info-box-icon"><i className="fas fa-tag" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Inventory</span>
                <span className="info-box-number">5,200</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-success">
              <span className="info-box-icon"><i className="far fa-heart" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Mentions</span>
                <span className="info-box-number">92,050</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-danger">
              <span className="info-box-icon"><i className="fas fa-cloud-download-alt" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Downloads</span>
                <span className="info-box-number">114,381</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* /.info-box */}
            <div className="info-box mb-3 bg-info">
              <span className="info-box-icon"><i className="far fa-comment" /></span>
              <div className="info-box-content">
                <span className="info-box-text">Direct Messages</span>
                <span className="info-box-number">163,921</span>
              </div>
              {/* /.info-box-content */}
            </div>
            {/* PRODUCT LIST */}
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Recently Added Products</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body p-0">
                <ul className="products-list product-list-in-card pl-2 pr-2">
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product" className="img-size-50" />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Samsung TV
                        <span className="badge badge-warning float-right">$1800</span></a>
                      <span className="product-description">
                        Samsung 32" 1080p 60Hz LED Smart HDTV.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">Bicycle
                        <span className="badge badge-info float-right">$700</span></a>
                      <span className="product-description">
                        26" Mongoose Dolomite Men's 7-speed, Navy Blue.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">
                        Xbox One <span className="badge badge-danger float-right">
                          $350
                        </span>
                      </a>
                      <span className="product-description">
                        Xbox One Console Bundle with Halo Master Chief Collection.
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                  <li className="item">
                    <div className="product-img">
                      <img src="dist/img/default-150x150.png" alt="Product Image" className="img-size-50" />
                    </div>
                    <div className="product-info">
                      <a href="javascript:void(0)" className="product-title">PlayStation 4
                        <span className="badge badge-success float-right">$399</span></a>
                      <span className="product-description">
                        PlayStation 4 500GB Console (PS4)
                      </span>
                    </div>
                  </li>
                  {/* /.item */}
                </ul>
              </div>
              {/* /.card-body */}
              <div className="card-footer text-center">
                <a href="javascript:void(0)" className="uppercase">View All Products</a>
              </div>
              {/* /.card-footer */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>{/*/. container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
</div>

  );
}

export default AdminDashboard;