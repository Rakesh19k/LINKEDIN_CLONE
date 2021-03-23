import React from 'react'
import "./CSS/Widgets.css"
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widget_articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widget_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    );


    return (
        <div className="widgets">
            <div className="widgets_header">
                <h2>LinkedIn News   </h2>
                <InfoIcon />
            </div>
            {newsArticle("Coronavirus: uk updates", "Top news - 886 readers")}
            {newsArticle("Tesla hits new highs", "Cars & auto -300 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code - 123 readers")}

        </div>
    );
}

export default Widgets;
