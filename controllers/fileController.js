
const uploadAvatar = (req, res) => {
    try {
        const { destination, filename } = req.file
        let host = req.protocol + '://' + req.get('host')
        const pathAvatar = destination.replace('public', host) + filename
        return res.status(200).json({
            avatar: pathAvatar
        })
    } catch (err) {
        return res.status(405).send('Upload failed')
    }
}

const uploadImageMessage = (req, res) => {
    try {
        const { destination, filename } = req.file
        let host = req.protocol + '://' + req.get('host')
        const pathAvatar = destination.replace('public', host) + filename
        return res.status(200).json({
            path: pathAvatar
        })
    } catch (err) {
        return res.status(405).send('Upload failed')
    }
}

module.exports = {
    uploadAvatar, uploadImageMessage
}