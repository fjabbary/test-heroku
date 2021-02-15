const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    PORT = 8080,
    cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors())

const videoList = require('./data/videoList.json')
const videoDetails = require('./data/videoDetails')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json('app root')
})

app.get('/videos', (req, res) => {
    res.json(videoList)
})

app.get('/videos/:id', (req, res) => {
    const id = req.params.id;

    const foundVideo = videoDetails.find(video => video.id == id)
    res.json(foundVideo)
})

app.post('/video/add', (req, res) => {
    videoList.push({ ...req.body, image: 'https://swordstoday.ie/wp-content/uploads/2020/12/1606847135_718_December-Global-Festivals-This-month-marks-the-worldwide-holiday-in.jpg', id: uuidv4() })

})

app.delete('/delete', (req, res) => {
    const commentId = req.body.commentId
    const videoId = req.body.videoId;

    const foundVideo = videoDetails.find(item => item.id === videoId)

    const foundCommentsIndex = foundVideo.comments.findIndex(item => item.id !== commentId)

    foundVideo.comments.splice(foundCommentsIndex, 1)
    res.json(foundVideo.comments)
})

app.listen(PORT, () => {
    console.log(`App is running at ports ${PORT}`)
})
