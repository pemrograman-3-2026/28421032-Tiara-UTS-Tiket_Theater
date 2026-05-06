import bcrypt from 'bcrypt'
import { prisma } from '../lib/prisma.js'

export const register = async (req, res) => {
    const body = req.body
    const password = body.password

    const isUsernameExist = await prisma.user.findUnique({
        where: {
            username: body.username
        }
    })

    if (isUsernameExist) {
        return res.status(400).json({
            message: 'Username telah digunakan'
        })
    }

    const hashPassword = bcrypt.hashSync(password, 12)

    const newUser = await prisma.user.create({
        data: {
            username: body.username,
            password: hashPassword,
            no_telepon: body.no_telepon
        }
    })

    return res.json({
        message: 'Berhasil Mendaftar!!',
        data: newUser
    })
}

export const login = async (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    const isUsernameExist = await prisma.user.findUnique({
        where: {
            username: username
        }
    })

    if (!isUsernameExist) {
        return res.status(400).json({
            message: 'Username tidak terdaftar'
        })
    }

    const hashPassword = isUsernameExist.password

    if (!bcrypt.compareSync(password, hashPassword)) {
        return res.status(401).json({
            message: 'Password salah!'
        })
    }

    return res.json({
        message: 'Login Berhasil!',
        data: isUsernameExist
    })
}