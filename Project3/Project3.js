console.log("Welcome To News Website!");
// News API Key : f9d8a766db174013ad2c4a83a8950088

let getNews = document.getElementById("getNews");
getNews.addEventListener("click",getdata);

function getdata(){
    url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f9d8a766db174013ad2c4a83a8950088";
    fetch(url).then(response => response.json()).then(data => console.log(data));
}
getdata();

// function getNewsHandler(){
//     console.log("Get News");

//     const xhr = new XMLHttpRequest();
//     xhr.open("GET","https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f9d8a766db174013ad2c4a83a8950088",true);

//     xhr.onload = function(){
//         if(this.status === 200){
//             let data = JSON.parse(this.responseText);
//             for (let index = 0; index < 10; index++) {
//                 console.log(data.articles[index].description);
                
//             }            
//         }
//         else{
//             console.log("Some Error");
//         }
//     };
//     xhr.send();
// }