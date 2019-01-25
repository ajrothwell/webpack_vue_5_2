<template>
  <div>

    <h4 class="margin-sides-20">components from Buefy:</h4>

    <b-badge class="margin-sides-20"
            :slots="{
              title: 'Address or Intersection Found',
              value: 'test'
            }"
    ></b-badge>

    <b-external-link class="ib margin-sides-20"
                     :options="{
                        data: 'openmaps.phila.gov',
                        href: 'https://openmaps.phila.gov'
                     }"
    />

    <b-callout class="margin-sides-20"
              :slots="{
                text: 'Buefy callout test',
              }"
              :options="{
                components: calloutComponents_01
              }"
    />

    <b-any-header class="margin-sides-20"
                  :options="{
                      headerType: 'h1'
                  }"
                  :slots="{
                      text: 'test h1 text'
                  }"
    />

    <b-address-input class="margin-sides-20"
                    :widthFromConfig="415"
                    :placeholder="null"
    >
    </b-address-input>

    <b-horizontal-table class="margin-20 medium-10"
                      :slots="horizontalTable_01_Slots"
                      :options="horizontalTable_01_Options"
    />

    <div class="margin-sides-20 component-label">vertical-table:</div>
      <b-vertical-table
        class="margin-20 margin-bottom-60 medium-8"
        :slots="{
          fields: [
            {
              label: 'address',
              value: function(state) {
                return state.geocode.data.properties.street_address || '';
              },
            },
            {
              label: 'opa #',
              value: function(state) {
                return state.geocode.data.properties.opa_account_num;
              },
            },
            {
              label: 'owner',
              value: function(state) {
                return state.sources.opa.data.owner_1;
              },
            },
          ]
        }"
        :options="{
          id: 'verticalTableId',
          dataSources: ['opa'],
          export: {
            formatButtons: {
              'csv': 'CSV',
              'pdf': 'PDF'
            },
            file: function(state) { return state.geocode.data.properties.opa_account_num + '_opaData'; },
            introLines: [
              function(state) { return state.geocode.data.properties.opa_account_num; },
            ],
          },
          externalLink: {
            action: function() {
              return 'See more';
            },
            name: 'Atlas',
            href: 'https://atlas.phila.gov'
          }
        }"
      />

    <br><br>




    <h4 class="margin-sides-20">Aaa and Aab from element-ui:</h4>
    <bdg class="margin-sides-20"
          :slots="{
            title: 'Address or Intersection Found',
            value: 'test'
          }"
    ></bdg>

    <etnl-lnk class="ib margin-sides-20"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />
    <br><br>



    <h4 class="margin-sides-20">External Link and Badge from rollup_vue_5</h4>

    <external-link class="ib margin-sides-20"
               :options="{
                  data: 'openmaps.phila.gov',
                  href: 'https://openmaps.phila.gov'
               }"
    />

    <badge class="margin-sides-20"
          :slots="{
            title: 'Address or Intersection Found',
            value: 'test'
          }"
    />

  </div>
</template>

<script>

  import ExternalLink from 'rollup_vue_5/src/components/ExternalLink/ExternalLink.vue';
  import Badge from 'rollup_vue_5/src/components/Badge/Badge.vue';

  export default {

    components: {
      // ExternalLink: () => import('../../node_modules/rollup_vue_4/src/components/ExternalLink.vue'),
      ExternalLink,
      Badge,
      // Callout
    },
    data() {
      const data = {
        calloutComponents_01: [
          {
            type: 'b-badge',
            slots: {
              title: 'badge inside callout',
              value: 'badge in callout value'
            }
          }
        ],
        horizontalTable_01_Options: {
          id: 'testHorizTable_01',
          export: {
            formatButtons: {
              'csv': 'CSV',
              'pdf': 'PDF'
            },
            file: function(state) { return state.geocode.data.properties.li_address_key + '_BusinessLicenses'; },
            introLines: [
              function(state) { return state.geocode.data.properties.li_address_key; },
            ],
          },
          totalRow: {
            enabled: false,
          },
          limit: 5,
          filters: [
            {
              type: 'time',
              getValue: function(item) {
                return item['mostrecentissuedate'];
              },
              label: 'From the last',
              values: [
                {
                  label: '30 days',
                  value: '30',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: '90 days',
                  value: '90',
                  unit: 'days',
                  direction: 'subtract',
                },
                {
                  label: 'year',
                  value: '1',
                  unit: 'years',
                  direction: 'subtract',
                }
              ]
            }
          ],
          fields: [
            {
              label: 'Most Recent Issue Date',
              value: function(state, item){
                return item['mostrecentissuedate'];
              },
              transforms: [
                'date'
              ]
            },
            {
              label: 'License Number',
              value: function(state, item){
                return item['licensenum'];
              }
            },
            {
              label: 'License Type',
              value: function(state, item){
                return item['licensetype'];
              }
            },
            {
              label: 'Business Name',
              value: function(state, item){
                return item['business_name'];
              }
            },
          ],
          externalLink: {
            action: function(count) {
              return 'See ' + count + ' older permits at L&I Property History';
            },
            name: 'L&I Property History',
            href: function(state) {
              return 'http://li.phila.gov/';
            }
          }
        },
        horizontalTable_01_Slots: {
          title: 'Business Licenses',
          items: function(state) {
            var data;
            if (state.sources.liBusinessLicenses.data) {
              data = state.sources.liBusinessLicenses.data.rows
            }
            return data;
          },
        },
      }
      return data;
    },

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

<style scoped>
#app-root {
  height: 100%
}
#components-root {
  padding: 20px;
  height: 90%;
  overflow-y: auto;
}
.component-label {
  font-size: 20px;
}
.margin-sides-20 {
  display: block;
  margin-left: 20px;
  margin-right: 20px;
}
.margin-20 {
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.margin-bottom-60 {
  margin-bottom: 60px !important;
}
.ib {
  display: inline-block;
}
</style>
