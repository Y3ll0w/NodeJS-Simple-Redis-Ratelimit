var redis = require("promise-redis")();
var redisClient = redis.createClient(6379, "127.0.0.1");

 var reqs = 2;
 var intvall = 10000;
 
async function asyncBlock() {
	
	var key = "127.0.0.1";
  
	await redisClient.incr(key);
	await redisClient.pexpire(key, intvall);
	const rate = await redisClient.get(key);
  
	if(rate > reqs){	
	  console.log("LIMIT REACHED");
	}else{
	  console.log("OK");
	}
  
};asyncBlock();
