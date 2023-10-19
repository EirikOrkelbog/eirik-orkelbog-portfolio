export default function navigation() {
	const menuButton = document.querySelector('.nav__menu-button');
	const navContainer = document.querySelector('.nav__container');

	menuButton.addEventListener('click', handleMenuClick);

	function handleMenuClick() {
		toggleMenu();
	};

	function toggleMenu() {
		if (navContainer.style.display === 'flex') {
			navContainer.style.display = 'none';
		} else {
			navContainer.style.display = 'flex';
		}
	}
} 