axios.get('https://www.redbullshopus.com/products.json')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
