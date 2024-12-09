function getting(status)
{
  let heading=document.getElementById('heading');
  let Missed=document.getElementById("Missed");
  let Available=document.getElementById("Available");
  let Upcoming=document.getElementById("Upcoming");
  let s='';
  
        const cardsContainer = document.getElementById('cards-container');
        var jsondata = JSON.parse(productsData);

      // Available items
        let htmlContent = '';
        if(status==="Available"){
            s=`<button class="btn btn-success" type="button">
            <span role="status">Buy Now</span>
            </button>`;
            Available.style.backgroundColor="#72c48c";
            heading.innerHTML='Available Items';
            Missed.style.border="none";
            Upcoming.style.border="none";
            Upcoming.style.backgroundColor="white";
            Missed.style.backgroundColor="white";
        }

        // Upcoming items
        else if(status==="Upcoming"){
          s=`<button class="btn btn-secondary" type="button">
          <span role="status">Upcoming</span>
          </button>`;
          Upcoming.style.backgroundColor="#83d7e6";
          Upcoming.style.color="black";
          heading.innerHTML='Upcoming Items';
          Missed.style.border="none";
          Missed.style.backgroundColor="white";
          Available.style.backgroundColor="white";
          Available.style.border="none";
        }

        // Missed items
        else if(status==="Missed"){
          s=`<button class="btn btn-danger" type="button">
            <span role="status">Missed</span>
            </button>`;
          Missed.style.backgroundColor="#83d7e6";
          Missed.style.color="black";
          Upcoming.style.backgroundColor="white";
          Upcoming.style.border="none";
          heading.innerHTML='Missed Items';
          Available.style.backgroundColor="white";
          Available.style.border="none";
        }

        jsondata.forEach(item => 
        {
            if(item.status===status){
              let r = '';
              let rate1 = document.getElementById('ratingId');
              for (let i = 1; i <= 5    ; i++) {
              
                if (item.rating >= i) {
                  r += `<span class="fa fa-star checked"></span>`;    
                }

                 else {
                  r += `<span class="fa fa-star"></span>`;
                }
              }
              function percentageCalculator(Itemprice,ItemDisscount){
                let disscount=Itemprice*(ItemDisscount/100);
                return Itemprice-disscount;
              }
                htmlContent += `
                <div class="swiper-slide text-center" >
                <div class="col p-1">
                    <div class="card   border border-3 border-dark ">
                    <img src="${item.img}" class="card-img-top p-1">
                    <div class="card-body">
                        <h5 class="card-title">${item.brandName}</h5>
                        <p class="card-text mb-0">RS.${percentageCalculator(item.price,item.diss)}
                        <span class="text-decoration-line-through  ms-2">${item.price}
                        </span><span class="text-success ms-2">${item.diss}% off</span></p>
                        <div class="mb-2" id="ratingId">${r}</div>
                        ${s}
                    </div>
                    </div>
                </div>
                </div>
                `;        
            }
        });
        cardsContainer.innerHTML = htmlContent;
}
