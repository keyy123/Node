const express = require('express')
const cors = require('cors')
const {google} = require('googleapis')
const request = require('request')
const urlParse = require('url-parse')
const queryParse = require('query-string')
const axios = require("axios")

const app = express()
const port = 1234
//740037036787-2sbjtkh9bibadhkt88u0t6rr1p4midsv.apps.googleusercontent.com
//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

app.use(cors())
app.use(express.json())

let JWT = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg4NiIsIm5iZiI6MTY0MDgzOTA2OCwiZXhwIjoxNjQzNDMxMDY4LCJpYXQiOjE2NDA4MzkwNjh9.bS37BUHWmpVGoy0R6XRaXNT90eDw9xul34c1dfZm8pM"
//c178b0fd-bab4-4e78-93b5-5c3a54690410

//User Routes - AniAPI - OAuth 



app.post("https://api.aniapi.com/v1/oauth", (req, res)=>{
    
})

app.get("https://api.aniapi.com/v1/auth/me",(req, res)=>{
    res.append('Authorization', JWT)
    res.status(200).send("Approved!")
})

app.get("https://api.aniapi.com/v1/user", (req, res)=>{
    res.append('Authorization', JWT)
    res.status(200).send("Found some users!")
})

app.get("https://api.aniapi.com/v1/user/:id", (req, res)=>{
    res.append('Authorization', JWT )
    // res.status(200).send("Found a user!")
    res.status(200).send(res.body, "Found a user!")
})


app.post("https://api.aniapi.com/v1/user", (req, res)=>{
    res.append('Authorization', JWT)
    // res.redirect("https://api.aniapi.com/profile/")
    res.status(201).send("Updated")
    // res.status(201).send('User updated')
})

app.get("https://api.aniapi.com/v1/user_story/", (req, res)=>{
    res.append('Authorization', JWT)
    res.status(200).send("Found some stories to read!")
})

app.get("https://api.aniapi.com/v1/user_story/:id", (req, res)=>{
    res.append("Authorization", JWT)
})

app.post("https://api.aniapi.com/v1/user_story",(req, res)=> {
    res.set({
        headers:{
            'Authorization':JWT,
            'Content-Type': 'application/json',
            'Accept':'application/json'
        }
    })
    res.status(201).send("good")
})

app.listen(port,()=>{
    console.log(`auth port is up and running at http://localhost:${port}`)
})