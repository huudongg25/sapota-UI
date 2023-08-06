import React, { Component } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArticleLayout = ({ post }) => {

  return (
      <article className="postbox post format-image mb-40">
          <div className="postbox__thumb mb-30">
              <a target="_blank"  href={post.url} as={'/'+ post.url}>
                  <img  src={'/'+ post.image} alt="blog image" />

              </a>
          </div>
          <div className="postbox__text p-50">
              <div className="post-meta mb-15">
                <span> <i><FontAwesomeIcon icon={['fas', 'user']} /></i> {post.user}</span>
                <span> <i><FontAwesomeIcon icon={['fas', 'calendar']} /></i> {post.date}</span>
                <span> <i><FontAwesomeIcon icon={['fas', 'comments']} /></i> {post.comment}</span>
              </div>
              <h3 className="blog-title">
                <a target="_blank" href={post.url} >
                  {post.title}
                </a>
              </h3>
              <div className="post-text mb-20">
                  <p>{post.text}</p>
              </div>
              <div className="read-more mt-30 btn">
                <a target="_blank" href={post.url}>
                  <span className="btn-text">Read More <i><FontAwesomeIcon icon={['fas', 'long-arrow-alt-right']} /></i></span>
                </a>
              </div>
          </div>
      </article>
  );
}

export default ArticleLayout;