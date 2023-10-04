require("dotenv").config()

const { credentials } = require("./database/loginDB.json")

const express = require("express")
const cors = require("cors")
const app = express()
let tokens = []

app.use(cors())
app.use(express.json())


app.post("/login", (req, res) => {
  const { email, password, token } = req.body
  if (!credentials.length) {
    res.status(500)
    return res.json({ error: "Something went wrong!" })
  }

  for (let i = 0; i < credentials.length; i++) {
    if (
      credentials[i].email === email &&
      credentials[i].password === password
    ) {
      res.status(200)
      if (token) {
        tokens.push(token)
      }
      return res.json({ success: true })
    }
  }
  res.status(400)
  return res.json({ success: false })
})

app.post("/logout", (req, res) => {
  const { token } = req.body
  tokens = tokens.filter((t) => t !== token)
  res.status(200)
  return res.json({ success: true })
})

app.post("/rememberme", (req, res) => {
  const { token } = req.body
  console.log({ tokens, token })
  if (tokens.includes(token)) {
    res.status(200)
    return res.json({ success: true })
  } else {
    res.status(400)
    return res.json({ error: true })
  }
})
app.listen(process.env.PORT || 4000, () =>
  console.log(`Server Started on ${process.env.PORT || 4000}`)
)
