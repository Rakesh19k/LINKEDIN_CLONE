import { Avatar } from '@material-ui/core'
import  ShareOutlinedIcon  from '@material-ui/icons/ShareOutlined'
import  ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import  ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined'
import React, {forwardRef} from 'react'
import "./CSS/Post.css"
import InputOption from "./InputOption"
import  SendOutlinedIcon  from '@material-ui/icons/SendOutlined'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {


    const user = useSelector(selectUser)

    
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl} >{name[0]} </Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption 
                    Icon={ThumbUpAltOutlinedIcon} 
                    title="Like"
                    color="grey"
                />
                <InputOption 
                    Icon={ChatOutlinedIcon} 
                    title="Comment"
                    color="grey"
                />
                <InputOption 
                    Icon={ShareOutlinedIcon} 
                    title="Share"
                    color="grey"
                />
                <InputOption 
                    Icon={SendOutlinedIcon} 
                    title="Sent"
                    color="grey"
                />
            </div>
        </div>
    )
})

export default Post
