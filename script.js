'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


//XMLHttpRequest
const getContryData=function(country){
    const request=new XMLHttpRequest();// 1st create varible
    request.open('GET',`https://restcountries.com/v2/name/${country}`); //2nd 
    request.send();//3rd

    request.addEventListener('load',function(){  //4th
       const [data]=JSON.parse(request.responseText);
       console.log(data);
       const html =
       `<article class="country">
         <img class="country__img" src="${data.flag}" />
         <div class="country__data">
           <h3 class="country__name">${data.name}</h3>
           <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>👫</span>${(
             +data.population 
           )} people</p>
           <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
           <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
         </div>
       </article>`;
       countriesContainer.insertAdjacentHTML('beforeend', html);
       countriesContainer.style.opacity = 1;
    });

};
// var list_countries =['India','Iceland','South Africa','japan','Alaska','us','Germany','usa','uk','Iran'];
// for(let i of list_countries){
//     getContryData(i);
// }

var request2=new XMLHttpRequest();
request2.open('GET','https://restcountries.com/v3.1/all');
request2.send();
request2.addEventListener('load',function(){
  const data=JSON.parse(request2.responseText);
  const length=data.length;
  for(let i=0; i<length;i++){
    if(data[i].altSpellings[1] ==='undefined'){
        continue;
    }
    else{
        getContryData(data[i].altSpellings[1]);
    }
  }
});
