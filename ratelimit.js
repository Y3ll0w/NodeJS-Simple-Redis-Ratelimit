var redis = require("promise-redis")();
var redisClient = redis.createClient(6379, "127.0.0.1");

//This example allows 5 requests per second
 var reqs = 5; //Numer of Allowed Requests in the Time Window
 var intvall = 1000; //Time Window in MS
 
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
