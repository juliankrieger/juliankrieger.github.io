import React from 'react'
import './AdSideBar.css'
import skull from '../assets/skull.gif'

export default class AdSideBar extends React.Component{
    render(){
        return (
            <div class="AdSideBar">
                this.props.children ? {this.props.children} : 
                {Array.apply(null, {length: 10}).map(function(i){
                    return <div class="AdSideBar-gifs">
                    <img src={skull} alt="SPOOKY"></img></div>
                })}
                
            </div>
        );
    }
} 