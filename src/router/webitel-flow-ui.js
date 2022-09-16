import TheDocs from '../components/pages/webitel-flow-ui/the-docs';
import QuickStart
  from '../components/pages/webitel-flow-ui/quick-start/quick-start';
import EnumsDocs from '../components/pages/webitel-flow-ui/enums/enums-docs';
import FlowAppEnumDocs
  from '../components/pages/webitel-flow-ui/enums/flow-app/flow-app-enum-docs';
import LocaleDocs from '../components/pages/webitel-ui/locale/locale-docs';
import LookupsDocs
  from '../components/pages/webitel-flow-ui/lookups/lookups-docs';
import FlowTypeApplicationsLookupDocs
  from '../components/pages/webitel-flow-ui/lookups/flow-type-applications/flow-type-applications-lookup-docs';

const prefix = 'flow-ui-';

const routes = [
  {
    path: '/flow-ui',
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
        path: 'enums',
        name: `${prefix}enums`,
        component: EnumsDocs,
        children: [
          {
            path: 'flow-app',
            name: `${prefix}flow-app`,
            component: FlowAppEnumDocs,
          },
        ],
      },
      {
        path: 'locale',
        name: `${prefix}locale`,
        component: LocaleDocs,
      },
      {
        path: 'lookups',
        name: `${prefix}lookpus`,
        component: LookupsDocs,
        children: [
          {
            path: 'flow-type-applications',
            name: `${prefix}flow-type-applications`,
            component: FlowTypeApplicationsLookupDocs,
          },
        ],
      },
    ],
  },
];

export default routes;
