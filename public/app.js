fetch('http://localhost:3000/')
  .then((data) => {
    console.log(data);
  })
  .catch(e => console.error(e));