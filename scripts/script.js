const inputCurrentFrequency = document.getElementById("input-text");
const rangeFrequencies = document.getElementById("input-range");
const divPodcast = document.getElementById("div-podcast");

const start = () => {
  rangeFrequencies.addEventListener("input", rangeValueChangeHandler);

  // divPodcast.innerHTML = ` <div>
  // <img class='podcastAvatar' src='./img/${realPodcasts[0].img}' alt='${realPodcasts[0].title}' />
  // </div>
  // <div>
  // <h1 id="podcast-name">${realPodcasts[0].title}</h1>
  // <p id="podcast-description">${realPodcasts[0].description}</p></div>`;
  // divPodcast.innerHTML = `<h1>Batata</h1>`;
};

const rangeValueChangeHandler = (event) => {
  const currentFrequency = event.target.value;
  inputCurrentFrequency.value = currentFrequency;

  renderPodcast(currentFrequency);
};

const renderPodcast = (frequency) => {
  divPodcast.innerHTML = "";

  const podcast = realPodcasts.find((podcast) => podcast.id === frequency);

  if (!podcast) {
    divPodcast.innerHTML = `
      <h2>Nenhum podcast encontrado nessa frequência.</h2>`;
  } else {
    divPodcast.innerHTML = `
    <div id="podcast-img">
      <img class='podcastAvatar' src='./img/${podcast.img}' alt='${podcast.title}' />
    </div>
    <div id="podcast-info">
      <h1 id="podcast-name">${podcast.title}</h1>
      <p id="podcast-description">${podcast.description}</p>
    </div>
  `;
  }
};

start();
