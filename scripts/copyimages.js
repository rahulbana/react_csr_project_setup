const cpy = require('cpy')
cpy(['app/images/favicon.png'], 'dist/images').then(() => {
  console.log('images copied')
})
