const TransloaditClient = require('transloadit')

const transloadit = new TransloaditClient({
  authKey   : 'YOUR_AUTH_KEY',
  authSecret: 'YOUR_AUTH_SECRET',
})

const filePath = './joakim_karud-rock_angel.mp3'
const fieldName = 'my_file'
transloadit.addFile(fieldName, filePath)

const sendAssembly = (async () => {

  const opts = {
    params: {
      template_id: 'YOUR_TEMPLATE_ID'
     }
    }

    transloadit.createAssembly(opts, (err, result) => {
        if (err) {
            console.error(err)
        } else {
            console.log('success')
        }
        console.error(result)
    })
})()
