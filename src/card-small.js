import React from 'react';
import './card-small.css'

export default function CardSmall({icon,pageViews,growth}) {
    return(
        <div className="card-small">
            <p className="card-small-views">Page Views</p>
            <p className="card-small-icon">
                <img src={icon} alt="" />
            </p>
            <p className="card-small-number">{pageViews}</p>
            <p className="card-small-percentage is-danger">
                <img src="images/icon-down.svg" alt="" />{growth}
            </p>
        </div>
    );
}