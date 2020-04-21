import React from 'react';

const Column = (props) =>
    <div>
        <ul className="text-left">
            <li className="list-group-item border-0 p-0 disabled"><a href='#' className="text-decoration-none font-weight-bold text-dark">{props.title}</a></li><hr/>
            <li className="list-group-item border-0 p-0"><a href='#' className="text-decoration-none font-weight-normal text-secondary">{props.link1}</a></li>
            <li className="list-group-item border-0 p-0"><a href='#' className="text-decoration-none font-weight-normal text-secondary">{props.link2}</a></li>
            <li className="list-group-item border-0 p-0"><a href='#' className="text-decoration-none font-weight-normal text-secondary">{props.link3}</a></li>
            <li className="list-group-item border-0 p-0"><a href='#' className="text-decoration-none font-weight-normal text-secondary">{props.link4}</a></li>
        </ul>
    </div>

export default Column