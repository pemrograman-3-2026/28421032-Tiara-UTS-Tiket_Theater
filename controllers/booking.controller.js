import { prisma } from '../lib/prisma.js'

export const create = async (req, res) => {
    const body = req.body
    const newBooking = await prisma.booking.create({
        data: {
            userId: Number(body.userId),
            setlistId: Number(body.setlistId)
        }
    })
    return res.json({
        message: 'Booking Berhasil!!',
        data: newBooking
    })
}

export const getAll = async (req, res) => {
    const data = await prisma.booking.findMany({
        include: {
            user: true,
            setlist: true
        }
    })
    return res.json({
        data: data
    })
}

export const deleteBooking = async (req, res) => {
    const idBooking = Number(req.params.id)
    await prisma.booking.delete({
        where: {
            id: idBooking
        }
    })
    return res.json({
        message: 'Booking berhasil dihapus'
    })
}