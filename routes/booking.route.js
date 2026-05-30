import express from 'express'
import { create, getAll, deleteBooking } from '../controllers/booking.controller.js'

const router = express.Router()

router.post('/create', create)
router.get('/', getAll)
router.delete('/delete/:id', deleteBooking)

export default router