import { Avatar } from '@mui/material'
import React, { forwardRef } from 'react'
import './Post.css'
import img from './pic.JPG'


//import { VerifiedUserSharp } from '@mui/icons-material'
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserSharp} from '@mui/icons-material'

const Post = forwardRef(({
    displayName, 
    username, 
    verified, 
    text, 
    avatar, 
    image },ref) => {
    
  return (
    <div className='post' ref={ref}>
        <div className='post__avatar'>
            <Avatar src={avatar} />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                       {displayName} <span className='post__headerSpecial'>
                            {verified && <VerifiedUserSharp className='post__badge' />}
                            @{username}
                        </span>
                       
                    </h3>
                </div>
                <div className='post__headerDescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} />
            {/* <img src='https://giphy.com/gifs/running-muppets-7kn27lnYSAE9O' /> */}
            <div className='post_footer'>
                <ChatBubbleOutline fontSize="small" />
                    <Repeat fontSize='small' />
                    <FavoriteBorder fontSize='small' />
                    <Publish fontSize='small' />
            </div>
        </div>
    </div>
  )
})

export default Post