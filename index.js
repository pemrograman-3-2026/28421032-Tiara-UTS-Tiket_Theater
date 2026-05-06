import express from 'express'
import UserRoute from './routes/user.route.js'
import SetlistRoute from './routes/setlist.route.js'
import BookingRoute from './routes/booking.route.js'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API Theater JKT48 Ready!')
})

app.use('/user', UserRoute)
app.use('/setlist', SetlistRoute)
app.use('/booking', BookingRoute)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})