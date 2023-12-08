export default function darkmode() {
	const darkmodeIcon = document.querySelector('#darkmode-icon');
	const body = document.querySelector('.body');
	const menuIcon = document.querySelector('#menu-icon');
	const linkedin = document.querySelector('#linkedin-icon');
	const github = document.querySelector('#github-icon');
	const linkedinFooter = document.querySelector('.footer__linkedin-icon');
	const githubFooter = document.querySelector('.footer__github-icon');
	const figma = document.querySelector('#figma-logo');
	const githubLogo = document.querySelector('#github-logo');
	

	darkmodeIcon.addEventListener('click', () => {
		body.classList.toggle('dark-mode');
		if(body.classList.contains('dark-mode')) {
			darkmodeIcon.src = '/_app/assets/icons/sun.svg';
			linkedin.src = '/_app/assets/icons/linkedin-dark.svg'
			github.src = '/_app/assets/icons/github-dark.svg'
			linkedinFooter.src = '/_app/assets/icons/linkedin-light.svg'
			githubFooter.src = '/_app/assets/icons/github-light.svg'
			figma.src = '/_app/assets/images/figma-white.svg'
			githubLogo.src = '/_app/assets/images/github-white.svg';
			menuIcon.src = '/_app/assets/icons/menu-dark.svg'
		} else {
			darkmodeIcon.src = '/_app/assets/icons/moon.svg';
			linkedin.src = '/_app/assets/icons/linkedin-light.svg'
			github.src = '/_app/assets/icons/github-light.svg'
			linkedinFooter.src = '/_app/assets/icons/linkedin-dark.svg'
			githubFooter.src = '/_app/assets/icons/github-dark.svg'
			figma.src = '/_app/assets/images/figma.svg'
			githubLogo.src = '/_app/assets/images/github.svg';
			menuIcon.src = '/_app/assets/icons/menu-light.svg'
		}
	})
}