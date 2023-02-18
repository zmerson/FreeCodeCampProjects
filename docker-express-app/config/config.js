module.exports = {
    MONGO_IP: process.env.MONGO_IP || "mongo",
    //MONGO_IP: 172.22.0.2,
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD
}