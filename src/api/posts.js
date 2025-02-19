import axios from 'axios';

// const posts = [
//   { id: 1, title: 'title1', content: 'body1', createdAt: '2/1/2025' },
//   { id: 2, title: 'title2', content: 'body2', createdAt: '2/2/2025' },
//   { id: 3, title: 'title3', content: 'body3', createdAt: '2/3/2025' },
//   { id: 4, title: 'title4', content: 'body4', createdAt: '2/4/2025' },
//   { id: 5, title: 'title5', content: 'body5', createdAt: '2/5/2025' },
// ];

export function getPosts(params) {
  return axios.get('http://localhost:5000/posts', { params });
}

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
}

export function createPost(data) {
  return axios.post('http://localhost:5000/posts', data);
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
