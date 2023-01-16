import React from 'react'
import CardProfile from '../cardProfile/CardProfile';
import './PostComponent.css'
function PostComponent({image="/assets/login.jpg", textMessage="Lorem ipsum dolor sit amet consectetur adipisicing elit."}) {
  return (
    <div className='container-post'>
        <CardProfile isTag={false}/>
        <p className='text-post'>{textMessage}</p>
        <img src={image}  alt="" className="image-post" />
    </div>
  )
}

export default PostComponent