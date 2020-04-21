import React from 'react';


var user_img = "https://pradeepsuthar.github.io/7eightysix_web_ui/images/7EightySix_logo2.png"
var user_name = "7EightySix"
var text = "Some quick example text"


const ProjectList = () =>
    <div>
    <div className="card">
            <img src={user_img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{user_name}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-secondary">View</a>
            </div>
        </div>
    </div>

export default ProjectList