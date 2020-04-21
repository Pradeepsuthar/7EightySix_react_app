import React from 'react';
import './header.css';

// ES6
var name = "Pradeep Suthar"
var user_img = "https://avatars0.githubusercontent.com/u/40490457?s=460&v=4"
export const Header = () => <div className="sticky-top">
    <nav className="navbar navbar-light bg-white shadow-sm">
        <a href="/" className="navbar-brand"><img src='https://pradeepsuthar.github.io/7eightysix_web_ui/images/7EightySix_logo2.png' className='logo img-thumbnail border-0' /></a>
        <span className="form-inline"><img src={user_img} alt={name} className="rounded-circle user-img" title={name} /></span>
    </nav>
</div>



