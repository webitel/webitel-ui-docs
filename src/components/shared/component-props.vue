<template>
  <section class="props">
    <article class="docs-text">
      <h2>Props: </h2>
    </article>
    <wt-table
      :headers="headers"
      :data="properties"
      :selectable="false"
    >
      <template v-slot:value="{ item }">
        <code class="language-javascript">{{ item.value }}</code>
      </template>
      <template v-slot:type="{ item }">
        <code class="language-javascript">{{ item.type }}</code>
      </template>
      <template v-slot:default="{ item }">
        <code class="language-javascript">{{ item.default }}</code>
      </template>
      <template v-slot:code="{ item }">
        <code class="language-markup">{{ item.code }}</code>
      </template>
      <template v-slot:description="{ item }">
        <div>
          <p
            v-if="item.description"
            v-html="md.render(item.description)"
          ></p>
          <p v-if="item.options">
            Options: <code class="language-javascript">{{ item.options }}</code>
          </p>
        </div>
      </template>
    </wt-table>
  </section>
</template>

<script>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  linkify: true,
});

  export default {
    name: 'component-props',
    props: {
      properties: {
        type: Array,
        default: () => [],
      },
    },
    data: () => ({
      md,
    }),
    computed: {
      headers() {
        return [
          { value: 'value', text: 'Name', width: '200px' },
          { value: 'required', text: 'Required', width: '70px' },
          { value: 'type', text: 'Type', width: '220px' },
          { value: 'default', text: 'Default', width: '160px' },
          { value: 'code', text: 'Example code' },
          { value: 'description', text: 'Description' },
        ];
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
