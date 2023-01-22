const express = require('express')
const app = express()
let { Users } = require('./data')


app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())



app.put('/user', (req, res) => {
    const query = req.query.tags

  if (!query) {
    return res
      .status(404)
      .json({ success: false, msg: "please provide tag in query" })
  }
   let result=[]
   let count=0
         Users.map((person) => {
    if (person.isAdmin === true && !person.tags.includes(query)) {
      person.tags.push(query)
      result.push(person.userId)
          count++
//           console.log(person.tags)
    }
  })
  
  res.status(200).json({ success: true, data: {updatedUser:result,count:count}})
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
