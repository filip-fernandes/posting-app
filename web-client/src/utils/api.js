import axios from "axios";
import Cookies from 'js-cookie';


export const fetchTweets = async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    const tweetList = response.data;
    return tweetList
  } catch (error) {
    return ["No post to show"]
  }
}

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/user/login', {
      email: email,
      password: password,
    });
    Cookies.set('token', response.data.token);
    return true
  } catch (error) {
    return false
  }
}

export const signUp = async (username, email, password) => {
  try {
    await axios.post('http://localhost:3000/user/sign-up', {
      username: username,
      email: email,
      password: password,
    });
    return true
  } catch (error) {
    return false
  }
}

export const post = async (content, token) => {
  try {
    const data = {
      content: content
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    await axios.post('http://localhost:3000/post', data, config);
    return true
  } catch (error) {
    return false
  }
}

export const deletePost = async (postId, token) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
      data: { postId: postId }
    };
    await axios.delete('http://localhost:3000/delete', config);
    return true
  } catch (error) {
    return false
  }
}

