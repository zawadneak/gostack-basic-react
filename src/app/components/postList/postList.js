import React, { useState, useEffect } from 'react';
import './postList.css';
import postsJSON from './posts';

function postList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsJSON);
  }, []);

  return (
    <div className="posts">
      <ul>
        {posts.map(item => (
          <div id="holder">
            <div id="posts">
              <div id="picture">
                <img alt={item.name} src={item.avatar} />
              </div>
              <div id="identification">
                <strong>{item.name}</strong>
                <p>04 de Fev 2020</p>
              </div>
            </div>
            <p>{item.description}</p>
            <div id="comments">
              <img src={item.comments[0].avatar}/>
              <p>
                <strong>{item.comments[0].name}</strong> {item.comments[0].text}
              </p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default postList;
