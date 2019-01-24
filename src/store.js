import Vue from 'vue';
import Vuex from 'vuex';
import mergeDeep from './util/merge-deep';
import pvcStore from 'rollup_vue_5/src/store.js';
import pvdStore from '../node_modules/@cityofphiladelphia/phila-vue-datafetch/src/controller/store.js';

// when you load vuex from a script tag this seems to happen automatically
Vue.use(Vuex);

function createStore(config) {
  console.log('in store.js, config:', config);

  const sources = pvdStore.createSources(config);
  const parcels = pvdStore.createParcels(config);

  const initialState = {
    candidates: [],
    addressEntered: null,
    parcels,
    sources,
    activeFeature: {
      featureId: null,
      tableId: null
    },
    horizontalTables: {
      // table id => filtered rows
      filteredData: {

      },
      // filteredData: createFilteredData(config),
    },
  };

  const mb = {
    state: initialState,
    mutations: {
      setCandidates(state, payload) {
        state.candidates = payload;
      },
      setAddressEntered(state, payload) {
        state.addressEntered = payload;
      },
      setHorizontalTableFilteredData(state, payload) {
        const { tableId, data } = payload;

        // check for not-null table id
        if (!tableId) return;

        state.horizontalTables.filteredData[tableId] = data;
      },
      setActiveFeature(state, payload) {
        // console.log('store setActiveFeature is running');
        const { featureId, tableId } = payload || {};
        const nextActiveFeature = { featureId, tableId };
        state.activeFeature = nextActiveFeature;
      },
    }
  }

  // let mergeStore = mergeDeep(pvcStore, mb);
  // console.log('mergeStore:', mergeStore);
  let mergeStore = mergeDeep(pvdStore.store, pvcStore);
  mergeStore = mergeDeep(mergeStore, mb);

  // TODO standardize how payloads are passed around/handled
  return new Vuex.Store({
    state: mergeStore.state,
    getters: mergeStore.getters,
    mutations: mergeStore.mutations
  });
}

export default createStore;
