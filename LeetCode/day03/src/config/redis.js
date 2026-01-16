const {createClient}=require('redis');
const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-14176.crce217.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 14176
    }
});

module.exports=redisClient;