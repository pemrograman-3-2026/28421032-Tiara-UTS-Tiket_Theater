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

export const getSetlistByID = async (req, res) => {
    const idSetlist = req.params.id
    const data = await prisma.setlist.findUnique({
        where: {
            id: Number(idSetlist)
        }
    })
    return res.json(data)
}

export const updateSetlist = async (req, res) => {
    const idSetlist = Number(req.params.id)
    await prisma.setlist.update({
        where: {
            id: idSetlist
        },
        data: {
            nama_setlist: req.body.nama_setlist,
            description: req.body.description,
            harga: Number(req.body.harga)
        }
    })
    return res.json({
        message: 'Data berhasil di update'
    })
}

export const deleteSetlist = async (req, res) => {
    const idSetlist = Number(req.params.id)
    await prisma.setlist.delete({
        where: {
            id: idSetlist
        }
    })
    return res.json({
        message: 'Data berhasil dihapus'
    })
}