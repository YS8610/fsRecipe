module.exports = [
  {
    context: [ '/api/**' ],
    target: 'https://recipetfip.herokuapp.com/',
    secure: true,
    logLeve: 'debug'
  }
]
