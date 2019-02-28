import axios from 'axios';

export const addNewTodo = (content) => {

    return dispatch => {
        if (content !== ""){
            // console.log('VIVA YOUNG')
            dispatch(addTodo(content));
        } else {
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
              const random = Number(Math.random().toString().slice(3,9));
              const randomNumber = random % 200;
              // console.log(randomNumber)
              // console.log('selected object:',res.data[randomNumber]);
              const selected = res.data[randomNumber];
              const title = selected.title;
              dispatch(addTodo(title));
            })
            .catch(err => {
              dispatch(addTodo(err.message));
            });
        }
      }
  }

export const addTodo = content => {
    const random = Math.random().toString().slice(4,9);
    const time = Date.now().toString().slice(2,12)
    const id = Number(time + random);

    return {
        type: 'ADD_TODO',
        id: id,
        content: content
    }
};
