# Containerized Nodejs REST Scaffold

## Develop and Staging
### Run
```
$ npm run start-wip   
```

### Debugging
```
$ npm run start-wip   
$ npm run start-wip-debugger   
```

Note that this is configured for remote debugging (for local debugging,
change the IP address from 0.0.0.0 to 127.0.0.1. 

Debugging may be performed using Chromium Developer Tools:
https://nodejs.org/en/docs/guides/debugging-getting-started

### Profiling / Local Load Testing
```
$ npm run start-wip-profiler   
```

A tick file will be created and populated during app execution.
To review the file, stop the app, then:
```
$ node --prof-process <isolate-*.log> > profile-app.log
$ vim profile-app.log   
```

Local load testing can be performed using the included `loadtest` package.
This is useful for locating cpu-intensive code.
```
$ ./node_modules/loadtest/bin/loadtest.js -k -c 10 -n 10 http://localhost:3000/
```

### Test
```
$ npm test   
```
Includes a complexity test, although no complexity thresholds are set yet.
Read more: https://www.npmjs.com/package/complexity-report


### Leaving Notes
Leave 'todo' and 'fixme' comments in a format that can be retrieved by
`npm run inspect-notes`. Formatting guide is here: https://www.npmjs.com/package/notes



## Production
### Run
```
$ npm start   
```

The scaffold uses pm2 to ensure continuous operation in the event of shutdown, 
and clustering, to maximise performance.
