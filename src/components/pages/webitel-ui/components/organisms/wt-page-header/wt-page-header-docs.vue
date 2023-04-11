<template>
  <div>
    <section>
      <h2>Page Header</h2>
      <article>
        <div class="example-wrapper">
          <div
            style="padding: 10px; background: cadetblue;"
          >
            <wt-page-header
              secondary-text="lorem ipsum (or close)"
            >
              <template v-slot:title>
                Title Slot
              </template>
            </wt-page-header>
          </div>
          <pre><code class="language-html">&lt;wt-page-header&gt;&lt;/wt-page-header&gt;</code></pre>
        </div>
      </article>
      <component-props
        :properties="properties"
      ></component-props>
      <component-slots
        :slots="slots"
      ></component-slots>
    </section>
  </div>
</template>

<script setup>
import Prism from 'prismjs';
import { onMounted } from 'vue';

const properties = [];
const slots = [];

onMounted(() => Prism.highlightAll());
</script>

<style scoped>

</style>
