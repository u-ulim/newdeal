const API_KEY = "a4bfd7d0b8a1b894f15c8e7ace699953";

let iconSection = document.querySelector(".icon img");
let tempSection = document.querySelector(".temp");
let descSetion = document.querySelector(".description");
let placeSction = document.querySelector(".place");

// 위치 정보 가져올 함수
function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}
// 날씨 정보를 받아올 함수
async function getWeather(lat, lon) {
  const weather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;

  const response = await fetch(weather); // 여기 response 변수에 저장
  const data = await response.json(); // JSON으로 변환
  console.log(data); // 콘솔에 출력
  return data; // 나중에 renderWeather에서 쓸 수 있게 반환
}

// DOM에 날씨 정보 표시
function renderWeather(data) {
  console.log(data);
  const { temp } = data.main;
  const { name: place } = data;
  const { descript, icon } = data.weater[0];

  tempSection.innterHTML = `${temp}도`;
  placeSction.innterHTML = place;
  descSetion.innterHTML = descript;
}

// 초기 함수
// 위치를 받아오는 함수를 호출하여 위치 값 받기
async function initWeatherApp() {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;
  console.log(latitude, longitude);
  const weatherData = await getWeather(latitude, longitude);
  renderWeather(weatherData);
}
console.log("hi");
// 초기함수 실행
initWeatherApp();
