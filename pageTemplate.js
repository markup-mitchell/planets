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
		<link rel="stylesheet" href="/css/global.css" />
		<style>
			:root {
				--theme-color: ${data.themeColor};
        --initial-max-width: ${data.initialMaxWidth};
			}
		</style>
		<script src="/js/scripts.js"></script>
		<title>Frontend Mentor | Planets fact site</title>
	</head>
	<body>
		<main>
			<div class="heading">
				<h1>${data.name}</h1>
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
				<!-- <img
					class="planet-image__geology invisible"
					src=".${data.images.geology}"
					alt=""
				/> -->
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
		</main>
	</body>
</html>
`;

module.exports = template;