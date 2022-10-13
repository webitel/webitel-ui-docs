<template>
  <p v-html="value">
  </p>
</template>

<script>
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  linkify: true,
});

export default {
  name: 'md-component',
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    md() {
      return md.render(this.value);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
