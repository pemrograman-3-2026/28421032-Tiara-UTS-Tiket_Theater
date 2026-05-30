import express from 'express'
import { create, getAll, getSetlistByID, updateSetlist, deleteSetlist } from '../controllers/setlist.controller.js'

const router = express.Router()

router.post('/create', create)
router.get('/', getAll)
router.get('/get/:id', getSetlistByID)
router.put('/update/:id', updateSetlist)
router.delete('/delete/:id', deleteSetlist)

export default router