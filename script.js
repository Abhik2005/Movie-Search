const apiurl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgpath = "https://image.tmdb.org/t/p/w1280";
const searchapi =
"https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
var main = document.querySelector(".main");
async function movies(name) {
   const response = await fetch(searchapi + name);
const data = await response.json();
   var deta = data.results;
 deta.forEach((elm)=>{
         var img = document.createElement("img");
         img.src = imgpath + elm.poster_path;
main.appendChild(img);
})
}
var searchBox = document.querySelector("input");
document.querySelector("button").addEventListener("click",function(){
   if (searchBox.value != "") {
      main.innerHTML = "";
      movies(searchBox.value);
   }
})

document.querySelector("input").addEventListener("keyup",function(){
   if (searchBox.value == "") {
      main.innerHTML = "";
   } 
})

async function movie() {
   const response = await fetch( apiurl);
const movidata = await response.json();
   var moviedata = movidata.results;
   moviedata.forEach((elem)=>{
         var img = document.createElement("img");
         img.src = imgpath + elem.poster_path;
         main.appendChild(img);
})
}
movie();