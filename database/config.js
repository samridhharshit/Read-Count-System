const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB || 'mongodb://localhost/read_count_system', {
    useNewUrlParser: true,
    useUnifiedTopology:true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected')
})