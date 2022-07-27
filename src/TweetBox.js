import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import Pic from './pic.JPG'
import db from './firebase'

const TweetBox = () => {

  const [tweetMessage, setTweetMessage]=useState("");
  const [tweetImage, setTweetImage]=useState("");

  const sendTweet=(e)=>{
    e.preventDefault();
    db.collection('posts').add({
      displayName:'Fraol B.',
      username:'fraolchris',
      verified:true,
      text:tweetMessage,
      image:tweetImage,
      avatar:"https://media-exp1.licdn.com/dms/image/C4E03AQE67aRvEcLPtQ/profile-displayphoto-shrink_400_400/0/1649419185659?e=1664409600&v=beta&t=vY_-hJ38sqjfahYKD3PjWGhAigyxxNkZZ6z2LJIXtXg"
    })
    setTweetImage("");
    setTweetMessage("")
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQE67aRvEcLPtQ/profile-displayphoto-shrink_400_400/0/1649419185659?e=1664409600&v=beta&t=vY_-hJ38sqjfahYKD3PjWGhAigyxxNkZZ6z2LJIXtXg" />
                <input 
                     placeholder="What's happening?"
                     type='text'
                     value={tweetMessage}
                     onChange={e=>setTweetMessage(e.target.value)}
                />
                <br />
                
            </div>
            <input 
                    className='tweetBox__imageInput'
                    placeholder='Optional: Enter image URL'
                    type='text'
                    value={tweetImage}
                    onChange={e=>setTweetImage(e.target.value)}
                />
            <Button 
              className='tweetBox__tweetButton'
              type='submit'
              onClick={sendTweet}
            >
                Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox