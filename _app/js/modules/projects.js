export default function projects() {

	const PROJECT_ID = "qe45c197";
	const DATASET = "production";
	const QUERY = encodeURIComponent('*[_type == "projects"]');

	const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	const project = document.querySelector('.project');

	fetch(URL)
		.then((res) => res.json())
		.then(({ result }) => {
			console.log(result[0]);
			const projectImage = document.createElement('img');
			const projectTitle = document.createElement('h4');
			const projectDescription = document.createElement('p');
			const projectUrl = document.createElement('a');
			projectImage.setAttribute('src', result[0].image.asset._ref);
			projectTitle.textContent = result[0].title;
			projectDescription.textContent = result[0].description;
			projectUrl.setAttribute('href', result[0].url);
			projectUrl.textContent = 'Link';
			project.appendChild(projectImage);
			project.appendChild(projectTitle);
			project.appendChild(projectDescription);
			project.appendChild(projectUrl);
		})
}
