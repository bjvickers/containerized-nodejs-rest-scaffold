# Containerized Nodejs REST Scaffold
[![Travis](https://travis-ci.org/bjvickers/containerized-nodejs-rest-scaffold.svg?branch=master)](https://travis-ci.org/bjvickers/containerized-nodejs-rest-scaffold)
[![Greenkeeper badge](https://badges.greenkeeper.io/bjvickers/containerized-nodejs-rest-scaffold.svg)](https://greenkeeper.io/)


## Install
```
$ mkdir -vp your-project  
$ cd your-project  
$ git clone https://github.com/bjvickers/containerized-nodejs-rest-scaffold.git .  
$ npm install  
$ npm run build  
```


## Develop and Staging
### Run
```
$ npm run start:dev  
```
This will run the app whilst monitoring any changes to the Typescript files.
Changes will be automatically transpiled and the application will automatically reload.


### Debugging
```
$ npm run start:dev:debugger   
```
Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1. 

Debugging may be performed using [Chromium Developer Tools](https://nodejs.org/en/docs/guides/debugging-getting-started)

As with `start:dev`, auto-compilation and reload will occur on any changes
made to the Typescript files.


### Profiling / Local Load Testing
```
$ npm run start:dev:profiler   
```
A tick file will be created and populated during app execution.
To review the file, stop the app, then:
```
$ node --prof-process <isolate-*.log> > profile-app.log
$ vim profile-app.log   
```
Local load testing can be performed using the included `loadtest` package.
This is useful for locating cpu-intensive code and for optimising throughput.
```
$ ./node_modules/loadtest/bin/loadtest.js -c 1 -n 10 http://localhost:3000/
```


### Test
```
$ npm test   
```
Includes a complexity test. For an understanding of the complexity metrics,
please see [here](https://github.com/escomplex/escomplex/blob/master/METRICS.md).


### Leaving Notes
Leave 'todo' and 'fixme' comments in a format that can be retrieved by
`npm run inspect-notes`. Formatting guide is [here](https://www.npmjs.com/package/notes).



## Production
### Run
```
$ npm start   
```

The scaffold uses pm2 to ensure continuous operation in the event of shutdown, 
and clustering, to maximise performance.
