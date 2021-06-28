
const mobileMenuContent = planets => {
	let linkItems = "";
	planets.forEach((planet,linkItems) => {
	linkItems += `<li class="mobile-nav__list-item">
	<a href="/${planet.name}">
		${planet.name}
	</a>
	</li>
	`
	return linkItems;
})}

const mobileMenu = () => `
  <nav class="mobile-nav hidden">
    <ul class="mobile-nav__list">
			${mobileMenuContent}
		</ul>
  </nav>
`;

module.exports = mobileMenu;
