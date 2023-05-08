const { default: axios } = require("axios");


const test = async () => {
  const res = await axios.post('http://localhost:3000/user/sign-up', {
    email: "newmaeeie",
    password: "ultr",
    username: "bigeeeee"
  });
  const uid = res.data;
  const res2 = await axios.post('http://localhost:3000/user/login', {
    email: "newmaeeie",
    password: "ultr",
  });
  console.log(uid)
  console.log(res2.data)
  return res2.data.token
}


const post = async () => {
  const token = await test()
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  const data = {
    content: "yooooo this is my seccccond post, letsgooooo"
  }
  const res = await axios.post('http://localhost:3000/post', data, config)
  console.log(res) 
};


const getAll = async () => {
  const posts = await axios.get('http://localhost:3000/')
  console.log(posts.data)
}

const like = async () => {
  const res2 = await axios.post('http://localhost:3000/user/login', {
    email: "newmaeei",
    password: "ultr",
  });
  const token = res2.data.token
  const id = '6455224d3702fd3d787c71c6'
  const res = await axios.post('http://localhost:3000/like', {postId: id}, {headers: { Authorization: `Bearer ${token}` }})
  console.log(res.data)
}


const delAll = async () => {
  const posts = await axios.get('http://localhost:3000/')
}

