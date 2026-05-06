import { prisma } from '../lib/prisma.js'

export const create = async (req, res) => {
    const body = req.body

    const newSetlist = await prisma.setlist.create({
        data: {
            nama_setlist: body.nama_setlist,
            description: body.description,
            harga: Number(body.harga)
        }
    })

    return res.json({
        message: 'Setlist Berhasil Dibuat!!',
        data: newSetlist
    })
}

export const getAll = async (req, res) => {
    const allSetlist = await prisma.setlist.findMany()
    
    return res.json({
        data: allSetlist
    })
}