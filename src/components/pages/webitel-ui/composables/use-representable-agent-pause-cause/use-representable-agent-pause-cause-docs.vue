<template>
  <section>
    <h2>useRepresentableAgentPauseCause</h2>
    <article>
      <h3>Usage:</h3>
      <pre><code class="language-javascript">
        import { useRepresentableAgentPauseCause } from '@webitel/ui-sdk/src/composables/useRepresentableAgentPauseCause/useRepresentableAgentPauseCause';
        const { representablePauseCause } = useRepresentableAgentPauseCause(options);
      </code></pre>
    </article>
    <article>
      <h3>Specification:</h3>
      <p>
        Сomposable accepts an input array of causes and converts the data into the required format for display.
      </p>
      <h3>Input params:</h3>
      <figure>

        <pre><code class="language-javascript">{{ inputCauses }}</code></pre>
      </figure>
      <h3>Output params:</h3>
      <figure>
        <pre><code class="language-javascript">{{ outputCause }}</code></pre>
      </figure>

    </article>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const inputCauses = ref([
  {
    id: 30,
    name: 'Технічна перерва',
    limit_min: 60
  },
  {
    id: 69,
    name: 'Навчання',
    limit_min: 120
  },
  {
    id: 37,
    name: 'Обід',
    limit_min: 23
  },
])

const outputCause = ref([
  {
    duration: '00:00',
    durationMin: 0,
    id: 30,
    isOverflow: false,
    limit: '01:00',
    limitMin: 60,
    name: 'Технічна перерва',
    progressColor: 'success',
  },
  {
    duration: '00:00',
    durationMin: 0,
    id: 69,
    isOverflow: false,
    limit: '01:00',
    limitMin: 60,
    name: 'Навчання',
    progressColor: 'success',
  },
  {
    duration: '00:00',
    durationMin: 0,
    id: 37,
    isOverflow: false,
    limit: '00:23',
    limitMin: 23,
    name: 'Обід',
    progressColor: 'success',
  }
])
</script>

<style lang="scss" scoped>

</style>
