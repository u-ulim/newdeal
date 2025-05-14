const API_KEY = "aaa894e6eb0e3ce17de554fab6e207a6";

// 장르 API
const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=ko-Kr`;

// 인기순 영화 API
const MOVIE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-Kr&page=1`;

// DOM
const searchInput = document.querySelector("#searchInput");
const genreButtons = document.querySelector(".genreButtons");
const movieList = document.querySelector(".movie-list");

// 데이터 저장 변수
let movies = [];
let genres = {};
let selectedGenres = 0;

// 장르 버튼 보여주기
function showButtons() {
  genreButtons.innerHTML = ""; // 중복 버튼 방지
  for (const id in genres) {
    const name = genres[id];
    const button = document.createElement("button");
    button.textContent = name;
    button.setAttribute("data-genre", id);
    genreButtons.appendChild(button);
  }
  const buttons = genreButtons.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedGenres = Number(btn.getAttribute("data-genre"));
      showMovies();
    });
  });
}

// 장르 가져오기
async function fetchGenres() {
  try {
    const response = await fetch(GENRE_URL);
    const data = await response.json();
    console.log("장르 데이터:", data);
    data.genres.forEach((element) => {
      genres[element.id] = element.name;
    });
    showButtons();
  } catch (error) {
    console.error("영화 장르 불러오는 것을 실패", error);
  }
}

// 영화 보여주기
function showMovies() {
  movieList.innerHTML = "";

  // 장르 체크하여 필터
  const filterMovies = movies.filter((movie) => {
    const matchGenre =
      selectedGenres === 0 || movie.genre_ids.includes(selectedGenres);
    return matchGenre;
  });

  console.log(filterMovies);

  filterMovies.forEach((movie) => {
    const li = document.createElement("li");
    const imgSrc = movie.poster_path
      ? `http://image.tmdb.org/t/p/w500${movie.poster_path}`
      : `https://via.placeholder.com/500x700?text=No+Image`;
    li.innerHTML = `<div class=posterImg><Img src=${imgSrc} alt="${movie.title}" /></div>
    <div class=title><strong>${movie.title}</strong><span>${movie.vote_average}</span></div>`;
    movieList.appendChild(li);
  });
}

// 영화 가져오기
async function fetchMovies() {
  try {
    // const response = await fetch(MOVIE_URL);
    // const data = await response.json();
    // movies = data.results;
    // console.log("인기 영화 데이터:", movies);
    // // 이후 showMovies() 호출 가능
    await fetch(MOVIE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        movies = data.results;
        showMovies();
      });
  } catch (error) {
    console.error("인기 영화 불러오는 것을 실패", error);
  }
}

// input에 글자를 입력하면, 글자를 포함하는 내용을 필터하여 영화 보여주기
searchInput.addEventListener;

// 실행
fetchGenres();
fetchMovies();
