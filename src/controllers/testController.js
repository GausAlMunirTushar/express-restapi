hello = (req, res) => {
    res.status(200).json({
        status: "success",
        data: "my restapi"
    })
}

module.exports = {
    hello,
}