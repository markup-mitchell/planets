const template = (data) => `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="./assets/favicon-32x32.png"
		/>
		<link rel="stylesheet" href="/global.css" />
		<style>
			:root {
				--theme-color: ${data.themeColor};
        --initial-max-width: ${data.initialMaxWidth};
			}
		</style>
		<script src="/scripts.js"></script>
		<title>Frontend Mentor | Planets fact site</title>
	</head>
	<body>
  <nav class="desktop-nav">
  <div>
  <h1>
  The Planets
  </h1>
  <ul>
    <li><a href="/mercury">Mercury</a></li>
    <li><a href="/venus">Venus</a></li>
    <li><a href="/earth">Earth</a></li>
    <li><a href="/mars">Mars</a></li>
    <li><a href="/jupiter">Jupiter</a></li>
    <li><a href="/saturn">Saturn</a></li>
    <li><a href="/uranus">Uranus</a></li>
    <li><a href="/neptune">Neputune</a></li>
  </ul>
    </div>
  <button
	onclick="toggleMobileMenu()" class="desktop-nav__menu-button">
					<span class="sr-only"> Menu </span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
						<g fill="var(--white)"" fill-rule="evenodd">
							<path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
						</g>
					</svg>
				</button>
</nav>
		<main>
			<div class="heading">
				<h2>${data.name}</h2>
			</div>
			<div class="tabs">
				<div role="tablist" aria-label="Planet Facts">
					<button
						data-info="overview"
						role="tab"
						aria-selected="true"
						aria-controls="panel__overview"
						id="tab__overview"
						tabindex="0"
					>
						<span class="tabNumber noMobile opacity-60">01</span>Overview
					</button>
					<button
						data-info="structure"
						role="tab"
						aria-selected="false"
						aria-controls="panel__structure"
						id="tab__structure"
						tabindex="0"
					>
						<span class="tabNumber noMobile opacity-60">02</span
						><span class="noMobile">Internal </span>Structure
					</button>
					<button
						data-info="geology"
						role="tab"
						aria-selected="false"
						aria-controls="panel__geology"
						id="tab__geology"
						tabindex="0"
					>
						<span class="tabNumber noMobile opacity-60">03</span>Surface
						<span class="noMobile">Geology</span>
					</button>
				</div>
			</div>
			<div class="imageDisplay">
				<img
        class="planet-image" src=".${data.images.planet}" alt="" />
				<img
					class="planet-image__internal invisible"
					src=".${data.images.internal}"
					alt=""
				/>
				<img
					class="planet-image__geology invisible preload"
					src=".${data.images.geology}"
					alt=""
				/>
			</div>

			<!-- Overview Content Start -->
			<div id="panels">
				<div
					id="panel__overview"
					role="tabpanel"
					tabindex="0"
					aria-labelledby="tab__overview"
				>
					<p class="info__text">
            ${data.overview.content}
					</p>

					<p class="info__source">
						Source :
						<a
							href="${data.overview.source}"
							target="_blank"
							rel="noopener"
						>
							<b>Wikipedia</b>
						</a>
					</p>
				</div>

				<!-- Overview Content End -->

				<!-- Internal Structure Content Start -->
				<div
					id="panel__structure"
					role="tabpanel"
					tabindex="0"
					aria-labelledby="tab__structure"
				>
					<p class="info__text">
          ${data.structure.content}
					</p>

					<p class="info__source">
						Source :
						<a
							href="${data.structure.source}"
							target="_blank"
							rel="noopener"
							><b>Wikipedia</b></a
						>
					</p>
				</div>
				<!-- Internal Structure Content End -->

				<!-- Surface Geology Content Start -->
				<div
					id="panel__geology"
					role="tabpanel"
					tabindex="0"
					aria-labelledby="tab__geology"
				>
					<p class="info__text">
          ${data.geology.content}
					</p>
					<p class="info__source">
						Source :
						<a
							href="${data.geology.source}"
							target="_blank"
							rel="noopener"
						>
							<b> Wikipedia </b>
						</a>
					</p>
				</div>
				<!-- Surface Geology Content End -->
			</div>
			<dl class="facts">
				<div class="datum">
					<dt class="datum__term">Rotation Time</dt>
					<dd class="datum__desc">${data.rotation}</dd>
				</div>
				<div class="datum">
					<dt class="datum__term">Revolution Time</dt>
					<dd class="datum__desc">${data.revolution}</dd>
				</div>
				<div class="datum">
					<dt class="datum__term">Radius</dt>
					<dd class="datum__desc">${data.radius}</dd>
				</div>
				<div class="datum">
					<dt class="datum__term">Average Temp.</dt>
					<dd class="datum__desc">${data.temperature}</dd>
				</div>
			</dl>
      <nav class="mobile-nav hidden">
      <ul class="mobile-nav__list">

			<li class="mobile-nav__list-item">
				<a href="/mercury">
					Mercury
				</a>
			</li>

    <li class="mobile-nav__list-item"><a href="/venus">Venus</a></li>
    <li class="mobile-nav__list-item"><a href="/earth">Earth</a></li>
    <li class="mobile-nav__list-item"><a href="/mars">Mars</a></li>
    <li class="mobile-nav__list-item"><a href="/jupiter">Jupiter</a></li>
    <li class="mobile-nav__list-item"><a href="/saturn">Saturn</a></li>
    <li class="mobile-nav__list-item"><a href="/uranus">Uranus</a></li>
    <li class="mobile-nav__list-item"><a href="/neptune">Neputune</a></li>

  </ul>
      </nav>
		</main>
	</body>
</html>
`;

module.exports = template;
