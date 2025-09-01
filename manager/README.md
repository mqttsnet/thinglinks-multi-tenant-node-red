# Multi Tenant Node-RED management app

A small web app to stand up new Node-RED instances using Docker.

This is meant to purely be a PoC, a real production deployment would require a lot
more features.

## Configure

Edit the `settings.js` file to set the root domain for new instances and with
details about how to connect to Docker. The Docker settings should use the same
schema used by [dockerode](https://www.npmjs.com/package/dockerode)

e.g.

```{
	"mongodb": "mongodb://docker-pi.local/nodered",
	"rootDomain": "example.com",
	"dockerodeSettings": {
		"host": "http://127.0.0.1",
		"port": 2375
	},
	admin: "admin",
	password: "mqttsnet",
	logHistory: 250
}
```

or
```{
	"mongodb": "mongodb://docker-pi.local/nodered",
	"rootDomain": "example.com",
	"dockerodeSettings": {
		"socketPath": "/var/run/docker.sock"
	},
	admin: "admin",
	password: "mqttsnet",
	logHistory: 250
}
```

 - `admin` is the admin username
 - `mqttsnet` is the admin password
 - `logHistory` is the number of lines of pervious logs to show