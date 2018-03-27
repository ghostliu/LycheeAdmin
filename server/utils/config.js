var app = {
	user:'tiantong',
	password:'j7gc5rjd',
	server:'140.143.208.193',
	//server:'127.0.0.1',
	database:'javaidc_tiantong',
	options: {
		encrypt:true
	},
	pool:{
		min:0,
		max:10,
		idleTimeoutMillis:3000
	}
};

module.exports = app;