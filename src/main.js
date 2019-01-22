
import Vue from 'vue';
import App from './components/App.vue';
import { square } from './localFunctions';

document.getElementById('square').innerHTML = square(10);

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
// import { Badge } from 'buefy/dist/components/badge'
import 'buefy/dist/components/badge/index.min.css'
// import 'buefy/dist/buefy.css'

// import Badge from 'rollup_vue_5/dist/components/Badge'
import Badge from 'rollup_vue_5/dist/components/Badge/Badge.vue';


// Vue.component('b-table', Table)
// Vue.component('b-input', Input)
Vue.component('b-badge', Badge)

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
  // store
});
