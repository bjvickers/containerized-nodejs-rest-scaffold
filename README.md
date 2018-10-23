# Containerized Nodejs REST Scaffold
[![Travis](https://travis-ci.org/bjvickers/containerized-nodejs-rest-scaffold.svg?branch=master)](https://travis-ci.org/bjvickers/containerized-nodejs-rest-scaffold)
[![Greenkeeper badge](https://badges.greenkeeper.io/bjvickers/containerized-nodejs-rest-scaffold.svg)](https://greenkeeper.io/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fbjvickers%2Fcontainerized-nodejs-rest-scaffold.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fbjvickers%2Fcontainerized-nodejs-rest-scaffold?ref=badge_shield)
[![Known Vulnerabilities](https://snyk.io/test/github/bjvickers/containerized-nodejs-rest-scaffold/badge.svg)](https://snyk.io/test/github/bjvickers/containerized-nodejs-rest-scaffold)


## Install
```
$ mkdir -vp scaffold  
$ cd scaffold  
$ git clone https://github.com/bjvickers/containerized-nodejs-rest-scaffold.git .  
$ npm install  
$ npm run setup  
```


## Develop and Staging
### Run
```
$ npm run start:basic  
```
This will run the app whilst monitoring any changes to the Typescript files.
Changes will be automatically transpiled and the application will automatically reload.


### Debugging
```
$ npm run start:debug   
```
Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1. 

Debugging may be performed using [Chromium Developer Tools](https://nodejs.org/en/docs/guides/debugging-getting-started)

As with `start:basic`, auto-compilation and reload will occur on any changes
made to the Typescript files.


### Profiling / Local Load Testing
```
$ npm run start:profile   
```
A tick file will be created and populated during app execution.
To review the file, stop the app, then:
```
$ node --prof-process <isolate-*.log> > profile-app.log
$ vim profile-app.log   
```
Local load testing can be performed using the `loadtest` package or similar.
This is useful for locating cpu-intensive code and for optimising throughput.


### Test
```
$ npm test   
```


### Static Reports
```
$ npm run report   
```
For an understanding of the complexity metrics, please see [here](https://github.com/escomplex/escomplex/blob/master/METRICS.md).


### Leaving TODO and FIXME Reminders
Leave 'TODO' and 'FIXME' comments in a format that can be retrieved by
`npm run report:reminders`. Formatting guide is [here](https://www.npmjs.com/package/leasot).



## Production
### Run
```
$ npm start   
```
The scaffold uses pm2 to ensure continuous operation in the event of shutdown, 
and clustering, to maximise performance.
