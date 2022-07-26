import { Search } from '@mui/icons-material'
import React from 'react'
import { TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed'
import './Widgets.css'

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
          <Search className='widget__searchIcon' />
          <input 
            placeholder='Search Twitter' 
            type='text'
          />
        </div>
        <div className='widgets__widgetContainer'>
          <h2>whats happening</h2>
          <TwitterTweetEmbed tweetId={"1546879825129775104"} />
          <TwitterTimelineEmbed
            sourceType='profile'
            sourceName="cleverqazi"
            options={{ height: 400}}
          />
        </div>
    </div>
  )
}

export default Widgets