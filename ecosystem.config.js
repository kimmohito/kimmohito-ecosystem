const kimmohitoApp = require('./../kimmohito/nextjs/ecosystem.config.js')
const kimmohitoQueue = require('./../kimmohito/laravel/ecosystem.config.cjs')

// const rojakcubeApp = require('./../rojakcube/nextjs/ecosystem.config.js')
// const rojakcubeQueue = require('./../rojakcube/laravel/ecosystem.config.cjs')

const rentalApp = require('./../rental/nextjs/ecosystem.config.js')

const drrukialabApp = require('./../drrukialab/nextjs/ecosystem.config.js')
const drrukialabQueue = require('./../drrukialab/laravel/ecosystem.config.cjs')

// const busratomyamApp = require('./../busratomyam/nextjs/ecosystem.config.js')
// const busratomyamQueue = require('./../busratomyam/laravel/ecosystem.config.cjs')


module.exports = {
  apps: [
    {
        name: 'Main',
        script: 'index.js',
	watch: true,
    },
    ...kimmohitoApp.apps,
    ...kimmohitoQueue.apps,
    // ...rojakcubeApp.apps,
    // ...rojakcubeQueue.apps,
    ...rentalApp.apps,
    ...drrukialabApp.apps,
    ...drrukialabQueue.apps,
    // ...busratomyamApp.apps,
    // ...busratomyamQueue.apps,
  ]
}
