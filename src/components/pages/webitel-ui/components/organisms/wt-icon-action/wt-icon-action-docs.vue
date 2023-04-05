<template>
  <section>
    <h2>Icon Action</h2>
    <article>
      <div class="example-wrapper">
        <wt-icon-action
          action="edit"
        ></wt-icon-action>
        <pre><code
          class="language-html"
        >
        &ltwt-icon-action
          action="edit"
        &gt;&lt;/wt-icon-action&gt;
        </code></pre>
      </div>
    </article>
    <component-props
      :properties="properties"
    ></component-props>
    <component-events
      :events="events"
    ></component-events>
  </section>
</template>

<script setup>
import Prism from 'prismjs';
import { onMounted } from 'vue';

const properties = [
  {
    value: 'action',
    type: 'String',
    required: true,
    options: ['edit', 'delete'],
  },
];


const events = [
  { value: 'click' },
];

onMounted(() => Prism.highlightAll());
</script>

<style lang="scss" scoped>
</style>
