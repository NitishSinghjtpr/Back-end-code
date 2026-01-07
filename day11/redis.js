const {createClient}=require('redis')
const client = createClient({
    username: 'default',
    password: 'jNe2qtW8gB41xUD8us7JFlnAMUpNcjdi',
    socket: {
        host: 'redis-15173.crce217.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 15173
    }
});

module.exports=client;