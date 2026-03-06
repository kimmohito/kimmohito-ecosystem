const kimmohitoLaravel = require('./../kimmohito/laravel/ecosystem.config.cjs')
const kimmohitoNextJs = require('./../kimmohito/nextjs/ecosystem.config.js')

const rentalNextJs = require('./../rental/nextjs/ecosystem.config.js')

const drrukialabLaravel = require('./../drrukialab/laravel/ecosystem.config.cjs')
const drrukialabNextJs = require('./../drrukialab/laravel/ecosystem.config.js')

module.exports = {
  apps: [
    {
        name: 'Main',
        script: 'index.js',
	watch: true,
    },
    ...kimmohitoLaravel.apps,
    ...kimmohitoNextJs.apps,
    ...rentalNextJs.apps,
    ...drrukialabLaravel.apps,
    ...drrukialabNextJs.apps,
  ]
}
