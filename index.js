const fs = require('fs-extra');

const config = require('./config.js')
const generateContent = require('./pageTemplate')

const data = fs.readFileSync('./data.json', 'utf-8');

const planets = JSON.parse(data)

if (!fs.existsSync(config.outdir)) fs.mkdirSync(config.outdir);

fs.copy('./assets', `${config.outdir}/assets`, function (err) {
  if (err){
      console.log('An error occured while copying the folder.')
      return console.error(err)
  }
  console.log('Copy completed!')
});

function createPages(planets) {
  planets.forEach(planet => {
    const planetDir = `${config.outdir}/${planet.name}`;
    if (!fs.existsSync(planetDir)) {
      fs.mkdirSync(planetDir);
    }
    fs.writeFile(
      `${planetDir}/index.html`,
      generateContent(planet),
      e => {
        if (e) throw e;
        console.log(`${planetDir}/index.html was created successfully`)
      })
  })
}

createPages(planets);