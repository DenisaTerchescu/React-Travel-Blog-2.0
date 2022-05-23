
import React from 'react';
import './modal_style.css';

const Modal = ({ handlePostRequest }) => (
  
    <form className="">
        <h1> Add/Edit Article</h1>
      <input 
        type='text'
        placeholder='Please enter article title'
        id = 'article-title'
        
      />

      <input
        type='text'
        placeholder='Please enter author name'
        id = 'article-author'
        
      />


      <textarea
        type='text'
        placeholder='Please enter article body'
        id = 'article-body'
        
      />
      
      <button id = "submit"  value = "submit" className = "save_button" onClick = {handlePostRequest} >Add article</button>
    </form>
  
);

export default Modal;