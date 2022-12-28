import { registerApplication, start, LifeCycles } from 'single-spa';

// registerApplication({
//   name: '@single-spa/welcome',
//   app: () => System.import<LifeCycles>('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
//   activeWhen: ['/spa-info'],
// });

//register micro front ends
registerApplication({
  name: '@Boilerplate/boiler-navbar',
  app: () => System.import<LifeCycles>('@Boilerplate/boiler-navbar'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@Boilerplate/boiler-news',
  app: () => System.import<LifeCycles>('@Boilerplate/boiler-news'),
  activeWhen: ['/news'],
});

registerApplication({
  name: '@Boilerplate/boiler-home',
  app: () => System.import<LifeCycles>('@Boilerplate/boiler-home'),
  activeWhen: [(location) => location.pathname === '/'],
});

registerApplication({
  name: '@Boilerplate/boiler-auth',
  app: () => System.import<LifeCycles>('@Boilerplate/boiler-auth'),
  activeWhen: ['/auth'],
});

start({
  urlRerouteOnly: true,
});
