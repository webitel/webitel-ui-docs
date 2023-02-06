<template>
  <section class="store-modules">
    <h2>Reactive Now</h2>
    <article class="store-module">
      <p>Module provides client with reactive <code>now</code> property from <code>Date.now()</code></p>
      <pre class="language-javascript">
        <code>
          // store/index.js
          import now from '@webitel/cc-ui-sdk/src/store/modules/now/reactive-now';
        </code>

        <code>
          // somewhere at initialize
          context.dispatch('now/SET_NOW_WATCHER', null, { root: true }),
        </code>

        <code>
          // somewhere at destroy
          context.dispatch('ui/now/CLEAR_NOW_WATCHER', null, { root: true }),
        </code>

        <code>
          // usage
          computed: {
            ...mapState('now', {
              now: (state) => state.now,
            }),
            log() {
              console.info(this.now);
            },
          }
        </code>
      </pre>
    </article>
  </section>
</template>

<script>
export default {
  name: 'reactive-now',
};
</script>

<style lang="scss" scoped>

</style>
