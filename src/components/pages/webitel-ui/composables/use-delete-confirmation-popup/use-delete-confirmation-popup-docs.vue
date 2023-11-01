<template>
  <section>
    <h2>useDeleteConfirmationPopup</h2>
    <br>
    <article>
      <h3>Usage:</h3>
      <pre><code class="language-javascript">
        &lt;template&gt;
          &lt;delete-confirmation-popup
              v-show="isDeleteConfirmationPopup"
              :delete-count="deleteCount"
              :callback="deleteCallback"
              @close="closeDelete"
          />

          &lt;button
            @click="askDeleteConfirmation({
              deleted: [item],
              callback: () => deleteMethod(item),
            })"
          &gt; Delete &lt;button/&gt;
        &lt;/template&gt;
      </code></pre>
      <pre><code class="language-javascript">
        &lt;script&gt;
          import { useDeleteConfirmationPopup } from '@webitel/ui-sdk/src/modules/DeleteConfirmationPopup/composables/useDeleteConfirmationPopup';

          const {
            isVisible: isDeleteConfirmationPopup,
            deleteCount,
            deleteCallback,

            askDeleteConfirmation,
            closeDelete,
          } = useDeleteConfirmationPopup();
        &lt;/script&gt;
      </code></pre>
    </article>
    <br>
    <article>
      <h2>Composable have:</h2>
    </article>
    <wt-table
        :headers="headers"
        :data="colors"
        :selectable="false"
        :grid-actions="false"
    />
  </section>
</template>

<script>
export default {
  name: 'use-destroyable-sortable-docs',
  data: () => ({
    headers: [
      { value: 'name', text: 'Name' },
      { value: 'description', text: 'Description' },
    ],
    colors: [
      {
        name: 'isDeleteConfirmationPopup',
        description: 'Value is popup visible'
      },
      {
        name: 'deleteCount',
        description: 'Number of items must be deleted'
      },
      {
        name: 'deleteCallback',
        description: 'Value of transferred callback for delete'
      },
      {
        name: 'askDeleteConfirmation',
        description: 'Method that show delete popup. Have arguments: deleted and callback'
      },
      {
        name: 'closeDelete',
        description: 'Method that close delete popup'
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>
