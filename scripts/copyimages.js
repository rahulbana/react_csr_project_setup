const cpy = require('cpy')
cpy(['app/images/favicon.ico'], 'dist/images').then(() => {
  console.log('images copied')
})
