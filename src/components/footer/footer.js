import React, { Component } from 'react';
import Column from '../footer/Column'
import './footer.css';

class Footer extends Component{
    render(){
        return(
            <div className="container-fluid p-0 m-0">
                 <div className="card border-0">
                    <div className="card-body">
                        <div className="text-left p-4">
                            <img src='https://pradeepsuthar.github.io/7eightysix_web_ui/images/7EightySix_logo2.png' className='logo img-thumbnail border-0' />
                        </div>
                        <div className="row">
                            <div className="col">
                                <Column title='Links' link1='Home' link2='About Us' link3='Conatct Us' link4='Terms & Conditions'/>
                            </div>
                            <div className="col">
                                <Column title='More' link1='Blogs' link2='Tutorials' link3='Help'/>
                            </div>
                            <div className="col">
                                <Column title='Address' link1='Sukhdham Colony,  Pindwara.' link2='Pin Code : 307022' link3='+91-9876543210'/>
                            </div>
                        </div>
                        <hr/>
                        <p className="card-text"><small className="text-muted">&copy; 2020 7EightySix.</small></p>
                    </div>
                </div>
            </div>
        );
    }
}
     

export default Footer