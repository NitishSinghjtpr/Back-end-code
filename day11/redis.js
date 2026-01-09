const {createClient}=require('redis');

const client = createClient({
    username: 'default',
    password: '5Zy2L146MQI36ANzJ9ePhMHJhxra135U',
    socket: {
        host: 'redis-14176.crce217.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 14176
    }
});

// await client.connect();

module.exports=client;