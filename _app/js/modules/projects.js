import { clientId } from '../env.js';

export default function projects() {
	const PROJECT_ID = clientId;
	const DATASET = "production";
	const QUERY = '*[_type == "projects"]{url, title, _id, technologies, "imageUrl": image.asset->url}';
	const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	const projectsContainer = document.querySelector('.projects__container');

	fetch(URL)
		.then((res) => res.json())
		.then(({ result }) => {
			for (const res of result) {
				const project = document.createElement('div');
				const projectImage = document.createElement('img');
				const projectTitle = document.createElement('h3');
				const projectTechnologies = document.createElement('p');
				const projectUrl = document.createElement('a');
				projectImage.setAttribute('src', res.imageUrl);
				projectTitle.textContent = res.title;
				projectTechnologies.textContent = res.technologies;
				projectUrl.setAttribute('href', res.url);
				projectUrl.setAttribute('class', 'cta__button');
				projectUrl.textContent = 'See live project';
				project.appendChild(projectImage);
				project.appendChild(projectTitle);
				project.appendChild(projectTechnologies);
				project.appendChild(projectUrl);
				projectsContainer.appendChild(project);
			}
		}).catch(error => {
			console.error('Error fetching data:', error);
		});
}