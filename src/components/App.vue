<template>
  <div>
    <!-- <el-button type="primary" icon="el-icon-edit"></el-button> -->

    <b-badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    ></b-badge>

    <!-- <b-input></b-input> -->
    <!-- <b-table :data="data" :columns="columns"></b-table> -->

    <bdg
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    ></bdg>

    <etnl-lnk class="ib"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />
    <!-- v-if="false" -->

    <!-- <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    /> -->

    <!-- <callout
      :slots="{
        text: 'Address or Intersection Found',
      }"
    /> -->

    <external-link class="ib"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />

    <badge
      :slots="{
        title: 'Address or Intersection Found',
        value: 'test'
      }"
    />

  </div>
</template>

<script>

  import ExternalLink from '../../node_modules/rollup_vue_3_2/src/components/ExternalLink.vue';
  import Badge from '../../node_modules/rollup_vue_3_2/src/components/Badge.vue'

  // import { ExternalLink } from 'rollup_vue_4';
  // import ExternalLink from '../../node_modules/rollup_vue_4/src/components/ExternalLink.vue';
  // import { Badge } from 'rollup_vue_4';

  // import Vue from 'vue';
  // import { ExternalLink } from 'comps_test';
  // import map from 'lodash/map';
  // import ExternalLink from 'comps_test';
  // import * as rollupTest from 'rollup_test';
  // console.log('rollupTest:', rollupTest);
  // import { ExternalLink as Ext } from 'rollup_test';
  // console.log('ExternalLink:', ExternalLink);
  // import ExternalLink from '../../node_modules/comps_test/components/ExternalLink.vue';
  // import { Callout } from 'rollup_test/Callout.vue';
  // import { Badge } from 'comps_test';
  // import Badge from '../../node_modules/comps_test/components/Badge.vue';
  // import Badge from '../../node_modules/rollup_test/src/components/Badge.vue'
  // import Callout from '../../node_modules/rollup_test/src/components/Callout.vue'

  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_vue_4/src/components/ExternalLink.vue'),
      ExternalLink,
      Badge,
      // Callout
    },
    // data() {
    //   return {
    //     data: [
    //       { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
    //       { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
    //       { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
    //       { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
    //       { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
    //     ],
    //     columns: [
    //       {
    //         field: 'id',
    //         label: 'ID',
    //         width: '40',
    //         numeric: true
    //       },
    //       {
    //         field: 'first_name',
    //         label: 'First Name',
    //       },
    //       {
    //         field: 'last_name',
    //         label: 'Last Name',
    //       },
    //       {
    //         field: 'date',
    //         label: 'Date',
    //         centered: true
    //       },
    //       {
    //         field: 'gender',
    //         label: 'Gender',
    //       }
    //     ]
    //   }
    //   // const shouldAddComps = {
    //   //   addLink: false,
    //   //   addBadge: false
    //   // }
    //   // return shouldAddComps;
    // },
    // props: {
    //   componentType: {
    //     type: String,
    //     default: () => null
    //   }
    // },
    computed: {
      // externalLinkLoader () {
      //   if (!this.$data.addLink) {
      //     return;
      //   } else {
      //     return () => import('../../node_modules/rollup_vue_3/src/components/ExternalLink.vue').then(console.log('after ExternalLink import'))
      //   }
      // },
      // badgeLoader () {
      //   if (!this.$data.addBadge) {
      //     return;
      //   } else {
      //     return () => import('../../node_modules/rollup_vue_3/src/components/Badge.vue').then(console.log('after Badge import'))
      //   }
      // },

    },
    methods: {
      // button1Click() {
      //   console.log('button1Click, this.$data:', this.$data);
      //   this.$data.addLink = true;
      // },
      // button2Click() {
      //   console.log('button2Click, this.$data:', this.$data);
      //   this.$data.addBadge = true;
      // }
    }
  }

</script>
