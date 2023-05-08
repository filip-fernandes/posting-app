import React, { useEffect, useState } from 'react';
import TweetCard from './Tweet';
import TweetForm from './TweetForm';
import { fetchTweets } from '../utils/api';


export default function HomePage() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets().then(tweetsList => {setTweets(tweetsList.reverse())});
  })
  
  return (
    <div>
      <TweetForm />
      {Object.keys(tweets).map(i => {
        return(
        <TweetCard 
          content={tweets[i].content} 
          author={tweets[i].username} 
          postId={tweets[i]._id} 
          key={i} /> 
        )
      })}
    </div>
  );
};
