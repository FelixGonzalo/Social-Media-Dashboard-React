import React from 'react'
import Card from './card'

const cardListData = [
    {
        id: 1,
        username: '@Gloria',
        followers: '1987',
        todayFollowers: 20,
        icon: 'images/icon-facebook.svg',
        name: 'facebook'
    },
    {
        id: 2,
        username: '@Pepito',
        followers: '1000',
        todayFollowers: 10,
        icon: 'images/icon-twitter.svg',
        name: 'twitter'
    },
    {
        id: 3,
        username: '@Jose',
        followers: '2k',
        todayFollowers: 12,
        icon: 'images/icon-instagram.svg',
        name: 'instagram'
    },
    {
        id: 4,
        username: '@Felix',
        followers: '1500',
        todayFollowers: 11,
        icon: 'images/icon-youtube.svg',
        name: 'youtube'
    }
]

function TopCards() {
    return (
        <section className="topCards">
            <div className="wrapper">
                <div className="grid">
                    {
                        cardListData.map((cardData) => <Card key={cardData.id} {...cardData} />)
                    }
                </div>
            </div>
        </section>
    );
}

export default TopCards;