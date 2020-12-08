import React from 'react';
import CardSmall from './card-small'
import './overview.css'

const cardSmallList = [
    {
        id: 1,
        icon: 'images/icon-facebook.svg',
        pageViews: '87',
        growth: 3
    },
    {
        id: 2,
        icon: 'images/icon-twitter.svg',
        pageViews: '100',
        growth: 120
    },
    {
        id: 3,
        icon: 'images/icon-instagram.svg',
        pageViews: '50',
        growth: 300
    },
    {
        id: 4,
        icon: 'images/icon-youtube.svg',
        pageViews: '11',
        growth: 10
    }
]


function Overview() {
    return (
        <section className = "overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">
                {
                    cardSmallList.map(({id, icon, pageViews, growth}) => (
                    <CardSmall
                        key={id}
                        icon={icon}
                        pageViews = {pageViews}
                        growth = {growth}
                    />))
                }
            </div>
        </div>

    </section>
    );
}

export default Overview;