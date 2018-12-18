import React from 'react'
import './Home.css'
import AdSideBar from './AdSideBar'

export default class Home extends React.Component{

    render(){
        return (
                <div className="Home">
                    <AdSideBar className="Home-LeftBar"/>
                    <div className="Home-text-field">
                        <div className="Home-text">
                           <h2 style={{textDecoration: "underline"}}>Website for testing purposes</h2>
                           <p>Test text</p>
                        </div>
                        
                    </div>
                    <AdSideBar className="Home-RightBar"/>

                </div>
        );
    };
}