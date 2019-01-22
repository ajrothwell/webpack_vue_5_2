import Vue from 'vue';
import createStore from './store';
import App from './components/App.vue';
import { square } from './localFunctions';

document.getElementById('square').innerHTML = square(10);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLink } from '@fortawesome/pro-solid-svg-icons/faExternalLink';
import { faSearch } from '@fortawesome/pro-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/pro-solid-svg-icons/faTimes';
import { faTimesCircle } from '@fortawesome/pro-solid-svg-icons/faTimesCircle';
import { faCaretLeft } from '@fortawesome/pro-solid-svg-icons/faCaretLeft';
import { faCaretRight } from '@fortawesome/pro-solid-svg-icons/faCaretRight';
library.add(faExternalLink, faSearch, faTimes, faTimesCircle, faCaretLeft, faCaretRight);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

const store = createStore();

// import { Button, Select } from 'element-ui';
// import { Button, Aaa, Aab } from 'element-ui';
import { Aaa, Aab } from 'element-ui';
// import { Button, Select, Aaa } from 'element-ui';
// import { aaa, aab } from 'element-ui';

// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);

Vue.component('Bdg', Aaa);
Vue.component('EtnlLnk', Aab);

// import { Table } from 'buefy/dist/components/table'
// import { Input } from 'buefy/dist/components/input'
import { Badge } from 'buefy/dist/components/Badge'
import 'buefy/dist/components/Badge/index.min.css'

import { ExternalLink } from 'buefy/dist/components/ExternalLink'
import 'buefy/dist/components/ExternalLink/index.min.css'

import { AddressInput } from 'buefy/dist/components/AddressInput'
import 'buefy/dist/components/AddressInput/index.min.css'

// import Badge from 'rollup_vue_5/dist/components/Badge'
// import Badge from 'rollup_vue_5/dist/components/Badge/Badge.vue';


// Vue.component('b-table', Table)
// Vue.component('b-input', Input)
Vue.component('b-badge', Badge);
Vue.component('b-external-link', ExternalLink);
Vue.component('b-address-input', AddressInput);

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App),
  store
});
