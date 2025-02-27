exports.register = (req, res, next) => {
    try {
        res.json({ message: "hello register" })
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" })
    }
}

exports.login = (req, res, next) => {
    try {
        console.log(gjjhb)
        res.json({ message: "Hello Login" })
    } catch (error) {
        res.status(500).json({ message: "Server Error!!" })
    }
}