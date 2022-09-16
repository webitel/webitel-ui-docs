import ComponentsDocs
  from '../components/pages/webitel-cc-ui/components/components-docs.vue';
import WtCcAgentStatusTimersDocs
  from '../components/pages/webitel-cc-ui/components/wt-cc-agent-status-timers/wt-cc-agent-status-timers-docs.vue';

import DirectivesDocs
  from '../components/pages/webitel-cc-ui/directives/directives-docs.vue';

import FiltersDocs
  from '../components/pages/webitel-cc-ui/filters/filters-docs.vue';

import LocaleDocs
  from '../components/pages/webitel-cc-ui/locale/locale-docs.vue';
import AgentPauseCauseRepresentationMixinDocs
  from '../components/pages/webitel-cc-ui/mixins/agentPauseCauseRepresentationMixin/agentPauseCauseRepresentationMixinDocs.vue';
import AutoRefreshMixinDocs
  from '../components/pages/webitel-cc-ui/mixins/autoRefresh/autoRefreshMixinDocs.vue';

import MixinsDocs
  from '../components/pages/webitel-cc-ui/mixins/mixins-docs.vue';

import ModulesDocs
  from '../components/pages/webitel-cc-ui/modules/modules-docs.vue';

import PackagesDocs
  from '../components/pages/webitel-cc-ui/packages/packages-docs.vue';
import WtCcAgentStatusSelectDocs
  from '../components/pages/webitel-cc-ui/packages/wt-cc-agent-status-select/wt-cc-agent-status-select-docs.vue';
import QuickStart
  from '../components/pages/webitel-cc-ui/quick-start/quick-start.vue';

import ScriptsDocs
  from '../components/pages/webitel-cc-ui/scripts/scripts-docs.vue';

import StoreDocs from '../components/pages/webitel-cc-ui/store/store-docs.vue';

import StyleDocs from '../components/pages/webitel-cc-ui/style/style-docs.vue';

import TheDocs from '../components/pages/webitel-cc-ui/the-docs.vue';

const prefix = 'cc-ui-';

const routes = [
  {
    path: '/cc-ui',
    component: TheDocs,
    children: [
      {
        path: '',
        redirect: 'quick-start',
      },
      {
        path: 'quick-start',
        name: `${prefix}quick-start`,
        component: QuickStart,
      },
      {
        path: 'style',
        name: `${prefix}style`,
        component: StyleDocs,
        children: [],
      },
      {
        path: 'components',
        name: `${prefix}components`,
        component: ComponentsDocs,
        children: [
          {
            path: 'agent-status-timers',
            name: `${prefix}agent-status-timers`,
            component: WtCcAgentStatusTimersDocs,
          },
        ],
      },
      {
        path: 'filters',
        name: `${prefix}filters`,
        component: FiltersDocs,
        children: [],
      },
      {
        path: 'locale',
        name: `${prefix}locale`,
        component: LocaleDocs,
        children: [],
      },
      {
        path: 'directives',
        name: `${prefix}directives`,
        component: DirectivesDocs,
        children: [],
      },
      {
        path: 'mixins',
        name: `${prefix}mixins`,
        component: MixinsDocs,
        children: [
          {
            path: 'agent-pause-cause-representation',
            name: `${prefix}agent-pause-cause-representation`,
            component: AgentPauseCauseRepresentationMixinDocs,
          },
          {
            path: 'auto-refresh',
            name: `${prefix}auto-refresh`,
            component: AutoRefreshMixinDocs,
          },
        ],
      },
      {
        path: 'modules',
        name: `${prefix}modules`,
        component: ModulesDocs,
        children: [],
      },
      {
        path: 'scripts',
        name: `${prefix}scripts`,
        component: ScriptsDocs,
        children: [],
      },
      {
        path: 'packages',
        name: `${prefix}packages`,
        component: PackagesDocs,
        children: [
          {
            path: 'agent-status-select',
            name: `${prefix}agent-status-select`,
            component: WtCcAgentStatusSelectDocs,
          },
        ],
      },
      {
        path: 'store',
        name: `${prefix}store`,
        component: StoreDocs,
        children: [],
      },
    ],
  },
];

export default routes;
