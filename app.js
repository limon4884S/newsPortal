const loadProducts = () => {
     const url = `https://openapi.programming-hero.com/api/news/categories`
   fetch(url)
    .then(res => res.json())
    .then(data => displayProducts(data.data.news_category));
}

const displayProducts = product => {
    const containerProduct = document.getElementById('container-product');
        product.forEach(pro => {
        const newUl = document.createElement('ul');
        newUl.classList.add('navbar-nav');
        newUl.innerHTML = `
                <li class="nav-item">
                    <a onclick="displayNewsDetails('${pro.category_id}')" class="nav-link btn fw-bolder">${pro.category_name}</a>
                </li>
        `;
        containerProduct.appendChild(newUl);
    })
}

const displayNewsDetails = (idnews) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${idnews}`
    fetch(url)
        .then(res => res.json())
        .then(data => allDetails(data.data));
}



const allDetails = (news) => {
    const detailCon = document.getElementById('details-icon');
    detailCon.innerHTML = " ";


    if (news.length === 0) {
        const noNews = document.getElementById('newsNumber');
        noNews.innerText = "No News Avaialble here at this moment";
        const loadMore = document.getElementById('loadMore');
    }


    else {
        news.forEach(n => {
        const newsNumber = document.getElementById('newsNumber');
        newsNumber.innerText = `${news.length}`;

        const exampleModalLabel = document.getElementById('exampleModalLabel');
        exampleModalLabel.innerText = `${n.title}`;
        const modelBody = document.getElementById('modelBody');
        modelBody.innerHTML = `${n.details}`;


        const newx = document.createElement('div');
        newx.classList.add('row');
        newx.innerHTML = `
            <div class="row line">
                <div class="col-lg-3 mb-5">
                    <img src="${n.image_url}" alt="" class="w-100 special-img rounded">
                </div>
                <div class="col-lg-9">
                    <h5>${n.title}</h5>
                    <p class="details">${n.details.slice(0, 350)}. . . . . . .</p>
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="first d-flex">
                                <img src="${n.author.img}" alt="" class="author-img">
                                <h6 class="text-warning mt-5 author">${n.author.name} <br> ${n.author.published_date} </h6>
                            </div>
                        </div>
                        <div class="col-lg-3 mt-5">
                            <h5><i class="fa-sharp fa-solid fa-eye"></i> ${n.rating.number}M</h5>
                        </div>
                        <div class="col-lg-3 mt-5">
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <div class="col-lg-2 mt-5">
                            <i class="fa-solid fa-arrow-right btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                         <div>
                     </div>
                </div>
             </div>
             <hr>
       `;
        detailCon.appendChild(newx);
        
    })

    }

    // news.forEach(n => {
    //     const newsNumber = document.getElementById('newsNumber');
    //     newsNumber.innerText = `${news.length}`;
    //     //console.log(news.length);
    //     const exampleModalLabel = document.getElementById('exampleModalLabel');
    //     exampleModalLabel.innerText = `${n.title}`;
    //     const modelBody = document.getElementById('modelBody');
    //     modelBody.innerHTML = `${n.details}`;
    //     //console.log(modelBody);


    //     const newx = document.createElement('div');
    //     newx.classList.add('row');
    //     newx.innerHTML = `
    //         <div class="row line">
    //             <div class="col-lg-3 mb-5">
    //                 <img src="${n.image_url}" alt="" class="w-100 special-img rounded">
    //             </div>
    //             <div class="col-lg-9">
    //                 <h5>${n.title}</h5>
    //                 <p class="details">${n.details.slice(0, 350)}. . . . . . .</p>
    //                 <div class="row">
    //                     <div class="col-lg-4">
    //                         <div class="first d-flex">
    //                             <img src="${n.author.img}" alt="" class="author-img">
    //                             <h6 class="text-warning mt-5 author">${n.author.name} <br> ${n.author.published_date} </h6>
    //                         </div>
    //                     </div>
    //                     <div class="col-lg-3 mt-5">
    //                         <h5><i class="fa-sharp fa-solid fa-eye"></i> ${n.rating.number}M</h5>
    //                     </div>
    //                     <div class="col-lg-3 mt-5">
    //                         <i class="fa-regular fa-star"></i>
    //                         <i class="fa-regular fa-star"></i>
    //                         <i class="fa-regular fa-star"></i>
    //                         <i class="fa-regular fa-star"></i>
    //                     </div>
    //                     <div class="col-lg-2 mt-5">
    //                         <i class="fa-solid fa-arrow-right btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
    //                      <div>
    //                  </div>
    //             </div>
    //          </div>
    //          <hr>
    //    `;
    //     detailCon.appendChild(newx);
        
    // })
}



loadProducts();
