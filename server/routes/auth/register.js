const express = require('express')
const bcrypt = require('bcryptjs')

const userModel = require('../../model')

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {mongoose.Model} userModel
 * @return {void}
 */

module.exports = async (req, res) => {
    const { username, email, password, role } = req.body

    const salt = bcrypt.genSaltSync()
    const hashedPassword = bcrypt.hashSync(password, salt)

    try {
        const userExists = await userModel.findOne({ username, email })
        if (!userExists) {
            const newUser = userModel({
                username,
                password: hashedPassword,
                email,
                role,
            })
            await newUser.save()
            switch (role) {
                case 'tourist':
                    const newTourist = tourist({ username, country })
                    await newTourist.save()
                    break
                case 'guide':
                    const newGuide = guide({ username })
                    await newGuide.save()
            }
            res.json({
                message: 'Register success. Now, please verify your account.',
            })
        } else throw userExists
    } catch (e) {
        console.error(e)
        res.status(409).json({
            message: 'Account already exists with that Email/Username',
        })
    }

    console.log('Registering: ', username, email, password)
}
