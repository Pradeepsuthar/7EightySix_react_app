import React from 'react';
import './content.css';
import ProjectList from '../bodyContent/ProjectList'

export const BodyContent = () => <div>
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">Welcome to 7EightySix</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
    <div className="container">
        <div className="text-left"><span className="h4">Project List</span><hr/></div>
        <div className="row">
            <div className="col p-2">
                <ProjectList />
            </div>
            <div className="col p-2">
                <ProjectList />
            </div>
            <div className="col p-2">
                <ProjectList />
            </div>
            <div className="col p-2">
                <ProjectList />
            </div>
        </div>
    </div>
</div>
