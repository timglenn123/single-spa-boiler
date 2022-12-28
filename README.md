Monorepo for Single-SPA User Interface

Until the apps are deployed into an environment, you can run each app separately then run the root app.

run from the cloned directory

```
npm install --prefix boiler-home &&
npm install --prefix boiler-navbar &&
npm install --prefix boiler-news &&
npm install --prefix boiler-auth &&
npm install --prefix root
```

---

Run all services in a single terminal. (Remove '&' if you want to run them independently)

```
npm start --prefix boiler-navbar -- --port 9001 &
npm start --prefix boiler-home -- --port 9002 &
npm start --prefix boiler-auth -- --port 9003 &
npm start --prefix boiler-news -- --port 9004
```

---

once all the apps are started. start the root app.

```
npm start --prefix root
```

open a browser and goto
http://localhost:9000

Single-Spa framework
https://single-spa.js.org/docs/recommended-setup/#local-development

#### Kill Webpack (Linux,OSX)

```
pkill -15 webpack
```
