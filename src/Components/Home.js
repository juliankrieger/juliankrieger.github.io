import React from 'react'
import './Home.css'
import AdSideBar from './AdSideBar'

export default class Home extends React.Component{

    render(){
        return (
                <div className="Home">
                    <AdSideBar className="Home-LeftBar"/>
                    <div className="Home-text-field">
                        <p>Middle</p>
                    </div>
                    <AdSideBar className="Home-RightBar"/>

                </div>
        );
    };
}