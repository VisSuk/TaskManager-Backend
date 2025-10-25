const users = require('../modal/userModal')
const jwt = require('jsonwebtoken')

exports.signUpController = async (req, res) => {

    const { name, email, password } = req.body
    console.log(name, email, password);

    try {

        const existingUser = await users.findOne({ email })


        if (existingUser) {
            res.status(401).json("User with this email already exists")
        }
        else {

            const newUser = new users({
                name,
                email,
                password
            })

            await newUser.save()
            res.status(200).json(newUser)

        }

    } catch (error) {
        res.status(406).json(error)
    }
}

exports.signInController = async (req, res) => {

    const { email, password } = req.body
    console.log(email, password);
    try {

        const existingUser = await users.findOne({ email })
        if (existingUser) {

            if (existingUser.password == password) {

                const token = jwt.sign({userMail:existingUser.email}, process.env.JWTSECRETKEY)
                res.status(200).json({existingUser, token})

            }
            else {
                res.status(409).json("Incorrect password")
            }

        }
        else {
            res.status(410).json("User does not exist")
        }
        // res.status(200).json(existingUser)

    } catch (error) {
        res.status(500).json(error)
    }



}

