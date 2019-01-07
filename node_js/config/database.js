if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://root:maro123#@ds139944.mlab.com:39944/mydb'}
} else {
  module.exports = {mongoURI: 'mongodb://root:maro123#@mongo:27017/mydb'}
}
