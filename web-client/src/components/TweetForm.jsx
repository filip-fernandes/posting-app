import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { post } from '../utils/api';
import Cookies from 'js-cookie';


export default function TweetForm() {
  const [tweetText, setTweetText] = useState('');

  const handleTweetSubmit = async (event) => {
    event.preventDefault();
    // Send the tweet to the server
    await post(tweetText, Cookies.get('token'));
    setTweetText('')
  };

  const handleTweetChange = (event) => {
    setTweetText(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-start">
    <Card className="rounded-3" style={{ backgroundColor: '#151a21', color: 'white' , width: '70%', maxWidth: '600px', marginBottom: '45px', marginTop: '20px' }}>
      <Card.Body>
        <Form onSubmit={handleTweetSubmit}>
          <Form.Group controlId="formTweetText">
            <Form.Control
              style={{backgroundColor: '#313a4a', color: 'white'}}
              as="textarea"
              placeholder="New post..."
              value={tweetText}
              onChange={handleTweetChange}
            />
          </Form.Group>
          <Button type="submit" style={{ marginTop: '10px', backgroundColor: '#000000', borderColor: '#000000', color: 'white',  fontWeight: 'bold', fontFamily: 'Helvetica', width: '30%', maxWidth: '100px'}}>
            POST
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
};