import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const Details = () => {
    const {postId} = useParams();
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/comments?${postId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setComment(data));        
    },[])

    const [image, setImage] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/photos?id=${postId}`
        fetch(url)
        .then(response => response.json())
        .then(data => setImage(data))
    },[])
    return (
        <div>
            {
                comment.map(comment => <Comment image={image} comment={comment}></Comment>)
            }
            
        </div>
    );
};

export default Details;