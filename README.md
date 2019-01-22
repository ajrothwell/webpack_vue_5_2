# webpack_vue_3

This has been used with many rollup vue libraries, to test tree-shaking, including:

rollup_vue_3 - https://github.com/ajrothwell/rollup_vue_3

VueLib1 - https://github.com/ajrothwell/VueLib1

comps_test - https://github.com/ajrothwell/comps_test

Currently it imports the single export from rollup_vue_3 (which does not do any chunking).

It then does a dynamic import of ExternalLink.vue, but it has to do it from the node_modules.

Though the dynamic import seems to be working, it is not clear to me yet whether it can fully tree-shake.

It can be seen in action live at https://ajrothwell.github.io/webpack_vue_3/dist/
It can be analyzed in action live at https://ajrothwell.github.io/webpack_vue_3/dist/statistics.html
