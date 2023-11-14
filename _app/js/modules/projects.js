export default function projects() {
	const PROJECT_ID = "qe45c197";
	const DATASET = "production";
	const QUERY = encodeURIComponent('*[_type == "projects"]{url, title, _id, description, "imageUrl": image.asset->url}');
	const URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;

	const projectsContainer = document.querySelector('.projects__container');

	fetch(URL)
		.then((res) => res.json())
		.then(({ result }) => {
			for (const res of result) {
				const project = document.createElement('div');
				const projectImage = document.createElement('img');
				const projectTitle = document.createElement('h4');
				const projectDescription = document.createElement('p');
				const projectUrl = document.createElement('a');
				projectImage.setAttribute('src', res.imageUrl);
				projectTitle.textContent = res.title;
				projectDescription.textContent = res.description;
				projectUrl.setAttribute('href', res.url);
				projectUrl.textContent = 'See live project';
				project.appendChild(projectImage);
				project.appendChild(projectTitle);
				project.appendChild(projectDescription);
				project.appendChild(projectUrl);
				projectsContainer.appendChild(project);
			}
		})
}