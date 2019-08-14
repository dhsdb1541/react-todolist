import axios from 'axios';

export async function getTodos() {
  await axios.get('http://localhost:9000/todos/alltodos').then(res => console.log(res.data));
}
export async function addTodo(todo) {
  await axios.post(`http://localhost:9000/todos/addtodo`).then(res => {
    console.log(res.data);
  });
}
export async function deleteTodo(_id) {
  await axios.delete(`http://localhost:9000/todos/removetodo`).then(res => {
    console.log(res.data);
  });
}
