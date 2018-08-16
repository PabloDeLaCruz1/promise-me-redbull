let div = document.getElementById("mainContainer");


axios.get('https://www.redbullshopus.com/products.json')
    .then(function (response) {
        let res = response.data.products;
        console.log(res);
        
        res.forEach(element => {
            
            let divRow = document.createElement("div");
            divRow.setAttribute("class", "row margin");
            divRow.innerHTML = `<div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator img" src="${element.images[0].src}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${element.title}
                    <i class="material-icons right">more_vert</i>
                </span>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${element.title}
                    <i class="material-icons right">close</i>
                </span>
                ${element.body_html} </div>
        </div>`;
            div.appendChild(divRow);
        });
    })
    .catch(function (error) {
        console.log(error);
    });