import Vue from 'vue';
import axios from 'axios';
import createStore from './store';
import configMixin from './util/config-mixin';
import App from './components/App.vue';
import mergeDeep from './util/merge-deep';
import config from './config.js'

import { square } from './localFunctions';

document.getElementById('square').innerHTML = square(10);

import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons/faTimesCircle';
import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons/faCaretRight';
library.add(faExternalLink, faSearch, faTimes, faTimesCircle, faCaretLeft, faCaretRight);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// Vue.component('font-awesome-icon', FontAwesomeIcon);

import philaVueDatafetch from '@cityofphiladelphia/phila-vue-datafetch';
const controllerMixin = philaVueDatafetch.controllerMixin;

// const store = createStore();

import { Aaa, Aab } from 'element-ui';
// import { Button, Select, Aaa } from 'element-ui';
// Vue.component(Button.name, Button);
Vue.component('Bdg', Aaa);
Vue.component('EtnlLnk', Aab);


import { Badge } from 'buefy/dist/components/Badge';
import 'buefy/dist/components/Badge/index.min.css';

import { ExternalLink } from 'buefy/dist/components/ExternalLink';
import 'buefy/dist/components/ExternalLink/index.min.css';

import { AddressInput } from 'buefy/dist/components/AddressInput';
import 'buefy/dist/components/AddressInput/index.min.css';

import { Callout } from 'buefy/dist/components/Callout';
import 'buefy/dist/components/Callout/index.min.css';

import { AnyHeader } from 'buefy/dist/components/AnyHeader';
import 'buefy/dist/components/AnyHeader/index.min.css';

import { HorizontalTable } from 'buefy/dist/components/HorizontalTable';
import 'buefy/dist/components/HorizontalTable/index.min.css';

import { HorizontalTableRow } from 'buefy/dist/components/HorizontalTableRow';
import 'buefy/dist/components/HorizontalTableRow/index.min.css';

import { PopoverLink } from 'buefy/dist/components/PopoverLink';
import 'buefy/dist/components/PopoverLink/index.min.css';

import { VerticalTable } from 'buefy/dist/components/VerticalTable';
import 'buefy/dist/components/VerticalTable/index.min.css';


Vue.component('b-badge', Badge);
Vue.component('b-external-link', ExternalLink);
Vue.component('b-address-input', AddressInput);
Vue.component('b-callout', Callout);
Vue.component('b-any-header', AnyHeader);
Vue.component('b-horizontal-table', HorizontalTable);
Vue.component('b-horizontal-table-row', HorizontalTableRow);
Vue.component('b-popover-link', PopoverLink);
Vue.component('b-vertical-table', VerticalTable);

console.log('config:', config);
const clientConfig = config;
const baseConfigUrl = config.baseConfig;


function initVue(config) {
  console.log('initVue is running, config:', config);
  const store = createStore(config);
  // make config accessible from each component via this.$config
  Vue.use(configMixin, config);

  // mix in controller
  Vue.use(controllerMixin, { config, store });

  Vue.component('font-awesome-icon', FontAwesomeIcon)
  // mount main vue
  const vm = new Vue({
    el: '#vue-app',
    render: h => h(App),
    store
  });
}

// if there is a base config, get base config
if (baseConfigUrl) {
  axios.get(baseConfigUrl).then(response => {
    const data = response.data;
    const baseConfigFn = eval(data);
    const { gatekeeperKey } = clientConfig;
    const baseConfig = baseConfigFn({ gatekeeperKey });
    console.log('baseConfig:', baseConfig);

    // deep merge base config and client config
    const config = mergeDeep(baseConfig, clientConfig);
    console.log('config2:', config);

    initVue(config);
  }).catch(err => {
    console.error('Error loading base config:', err);
  });

} else {
  initVue(clientConfig);
}

// const vm = new Vue({
//   el: '#vue-app',
//   render: h => h(App),
//   store
// });
