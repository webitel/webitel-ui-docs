<template>
  <section>
    <h2>Locale</h2>
    <pre><code class="language-javascript">
      {{ en }}
    </code></pre>
  </section>
</template>

<script>
import WebitelFlowUiLocaleEn from '@webitel/flow-ui-sdk/src/locale/en/en';

export default {
  name: 'locale-docs',
  computed: {
    en: () => WebitelFlowUiLocaleEn,
  },
};
</script>

<style scoped>

</style>
