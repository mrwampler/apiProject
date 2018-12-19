const baseURL = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
const key = '4013021 ';
let url;

const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');

// nav.style.display = 'none';

let pageNumber = 0;
// console.log('PageNumber:', pageNumber);
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);


function fetchResults(e) {
  // console.log(e);
  e.preventDefault();
  url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
  // console.log('URL:', url);

  fetch(url)
    .then(function(result) {
      // console.log(result)
      return result.json();
    })
    .then(function(json) {
      // console.log(json);
      let team = json.teams
      displayResults(team);
    })
}

function displayResults(team) {

    for (let i = 0; i < team.length; i++) {
      // console.log(i);
      let unordered = document.createElement('ul');
      let list = document.createElement('li');

      let current = team[i];
      console.log('Current:', current);


      // article.appendChild(heading);
      section.appendChild(unordered);
      list.innerHTML = current.strTeam;
      unordered.appendChild(list);
    }
}