const APIURL = 'https://api.github.com';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
	try {
		const { data } = await axios.get(APIURL + '/users/' + username);

		createUserCard(data);
		getRepos(username);
	} catch (err) {
		if (err.response.status == 404) {
			createErrorCard('Could not find a user with this username.');
		} else {
			console.log(err);
		}
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios.get(APIURL + '/users/' + username + '/repos?sort=created');

		addReposToCard(data);
	} catch (err) {
		createErrorCard('Could not fetch repos.');
	}
}

function createUserCard(user) {
	const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <a href="${user.html_url}"><h2>${user.name} <strong>(${user.login})</strong></h2></a>
        <p>${user.bio}</p>

        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

	main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
	const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

	main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
	const reposEl = document.getElementById('repos');

	repos.forEach((repo) => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url;
		repoEl.target = '_blank';
		repoEl.innerText = repo.name;

		reposEl.appendChild(repoEl);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);

		search.value = '';
	}
});