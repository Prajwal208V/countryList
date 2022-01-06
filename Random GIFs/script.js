var container=document.querySelector('.container');
var count=0;


function fun(){
    if(count==0){
    const url='https://g.tenor.com/v1/random?q=excited&key=477VTY4UBTUD&limit=10';
    var response=$.ajax(url,{
        type: 'GET',
        timeout:1000,
        data:'json',
        success:function(data,status,xhr){
            for(let i=0;i<10;i++){
                console.log(data.results[i].media[0].gif.url);
                var img=document.createElement('img');
                img.classList.add('gif');
                img.src=data.results[i].media[0].gif.url;
                container.appendChild(img);
            }
        },
    });
}
count++;
}
