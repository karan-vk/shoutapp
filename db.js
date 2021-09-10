var cassandra = require('cassandra-driver');

var client = new cassandra.Client({
    cloud: {
        secureConnectBundle: "secure-connect-learn_3.zip",
    },
    credentials: {
        username: process.env.CLIENTID,
        password: process.env.SECRET,
    },
});

client.connect((err, res) => {
    console.log('Cassandra Connected')
})

module.exports = { client };