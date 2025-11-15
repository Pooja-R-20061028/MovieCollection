const movies = [
  {name:"Vikram", year:2022, poster:"images/vikram.jpg", trailer:"https://youtu.be/hRXM_AHeH7A"},
  {name:"Leo", year:2023, poster:"images/leo.jpg", trailer:"https://youtu.be/iv3VfLE0kgQ"},
  {name:"Jailer", year:2023, poster:"images/jailer.jpg", trailer:"https://youtu.be/1OaYF4vQGZc"},
  {name:"Master", year:2021, poster:"images/master.jpg", trailer:"https://youtu.be/8yjGHY4J6Eo"},
  {name:"Bigil", year:2019, poster:"images/bigil.jpg", trailer:"https://youtu.be/qvrxEj6JD08"},
  {name:"PS1", year:2022, poster:"images/ps1.jpg", trailer:"https://youtu.be/abc123"}
];

function renderMovies(list){
  const container = document.getElementById('movieContainer');
  container.innerHTML="";
  list.forEach(m=>{
    const div = document.createElement('div');
    div.className="movie-card";
    div.innerHTML=`
      <img src="${m.poster}" alt="${m.name}">
      <div class="title">${m.name} (${m.year})</div>
      <a href="${m.trailer}" target="_blank" class="btn">Watch Trailer</a>
    `;
    container.appendChild(div);
  });
}

// Initial render
renderMovies(movies);

// Search
document.getElementById('searchBox').addEventListener('input',function(){
  const q = this.value.toLowerCase();
  const filtered = movies.filter(m=>m.name.toLowerCase().includes(q));
  renderMovies(filtered);
});

// Dark mode toggle
function toggleDark(){document.body.classList.toggle('dark');}
