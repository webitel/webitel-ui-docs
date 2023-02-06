<template>
  <main class="docs">
    <wt-page-wrapper :actions-panel="false">
      <template slot="header">
        <wt-headline>
          <wt-navigation-bar :nav="nav"/>
          <h1>Webitel Contact-Center UI SDK v. 0.1.27-3</h1>
        </wt-headline>
      </template>
      <template slot="main">
        <div class="docs-content-wrapper">
          <router-view/>
        </div>
      </template>
    </wt-page-wrapper>
  </main>
</template>

<script>
export default {
  name: 'the-docs',
  computed: {
    nav() {
      return [
        {
          name: 'Webitel UI',
          value: 'webitel-ui',
          route: '/ui'
        },
        {
          name: 'Webitel Flow UI',
          value: 'webitel-flow-ui',
          route: '/flow-ui'
        },
        {
          name: 'Quick Start',
          value: 'quick-start',
          route: '/cc-ui/quick-start',
        },
        this.componentsNav,
        // this.localeNav,
        this.mixinsNav,
        this.packagesNav,
        // this.modulesNav,
        // this.scriptsNav,
        this.storeNav,
      ];
    },
    componentsNav() {
      return {
        name: 'Components',
        value: 'components',
        route: '/cc-ui/components',
        subNav: [
          {
            name: 'Agent Status Timers',
            value: 'agent-status-timers',
            route: 'agent-status-timers',
          },
        ].sort((a, b) => a.name.localeCompare(b.name)),
      };
    },
    filtersNav() {
      return {
        name: 'Filters',
        value: 'filters',
        route: '/cc-ui/filters',
        subNav: [],
      };
    },
    localeNav() {
      return {
        name: 'Locale',
        value: 'locale',
        route: '/cc-ui/locale',
        // subNav: [],
      };
    },
    directivesNav() {
      return {
        name: 'Directives',
        value: 'directives',
        route: '/cc-ui/directives',
        subNav: [],
      };
    },
    mixinsNav() {
      return {
        name: 'Mixins',
        value: 'mixins',
        route: '/cc-ui/mixins',
        subNav: [
          {
            name: 'Auto Refresh',
            value: 'auto-refresh',
            route: 'auto-refresh',
          },
          {
            name: 'Agent Pause Cause Representation',
            value: 'agent-pause-cause-representation',
            route: 'agent-pause-cause-representation',
          },
        ],
      };
    },
    packagesNav() {
      return {
        name: 'Packages',
        value: 'packages',
        route: '/cc-ui/packages',
        subNav: [
          {
            name: 'Agent Status Select',
            value: 'agent-status-select',
            route: 'agent-status-select',
          },
        ],
      };
    },
    modulesNav() {
      return {
        name: 'Modules',
        value: 'modules',
        route: '/cc-ui/modules',
        subNav: [],
      };
    },
    scriptsNav() {
      return {
        name: 'Scripts',
        value: 'scripts',
        route: '/cc-ui/scripts',
        subNav: [],
      };
    },
    storeNav() {
      return {
        name: 'Store',
        value: 'store',
        route: '/cc-ui/store',
        subNav: [
          {
            name: 'Now',
            value: 'now',
            route: 'now',
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.docs {
  min-height: 100%;
  background: var(--page-bg-color);

  .wt-page-wrapper__main > * {
    width: 100%;
  }
}
</style>
