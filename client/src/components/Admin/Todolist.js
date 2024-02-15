import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const TodoList = () => {
    return (
        <div classname="hold-transition sidebar-mini">
            <div className="content-wrapper kanban">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1>Kanban Board</h1>
                            </div>
                            <div className="col-sm-6 d-none d-sm-block">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Kanban Board</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content pb-3">
                    <div className="container-fluid h-100">
                        <div className="card card-row card-primary">
                            <div className="card-header">
                                <h3 className="card-title">
                                    To Do
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="card-title">Create first milestone</h5>
                                        <div className="card-tools">
                                            <a href="#" className="btn btn-tool btn-link">#5</a>
                                            <a href="#" className="btn btn-tool">
                                                <i className="fas fa-pen" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-row card-default">
                            <div className="card-header bg-info">
                                <h3 className="card-title">
                                    In Progress
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="card card-light card-outline">
                                    <div className="card-header">
                                        <h5 className="card-title">Update Readme</h5>
                                        <div className="card-tools">
                                            <a href="#" className="btn btn-tool btn-link">#2</a>
                                            <a href="#" className="btn btn-tool">
                                                <i className="fas fa-pen" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                            Aenean commodo ligula eget dolor. Aenean massa.
                                            Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card-row card-success">
                            <div className="card-header">
                                <h3 className="card-title">
                                    Done
                                </h3>
                            </div>
                            <div className="card-body">
                                <div className="card card-primary card-outline">
                                    <div className="card-header">
                                        <h5 className="card-title">Create repo</h5>
                                        <div className="card-tools">
                                            <a href="#" className="btn btn-tool btn-link">#1</a>
                                            <a href="#" className="btn btn-tool">
                                                <i className="fas fa-pen" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default TodoList;