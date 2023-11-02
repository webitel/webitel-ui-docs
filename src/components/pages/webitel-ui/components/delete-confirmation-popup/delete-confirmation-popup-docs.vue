<template>
  <section>
    <h2>Delete Confirmation Popup</h2>
    <article>
      <div class="example-wrapper">
        <div class="popup-wrapper">
          <wt-popup
              class="delete-confirmation-popup"
              width="500"
          >
            <template v-slot:title> Confirm deletion </template>
            <template v-slot:main>
              <div class="delete-confirmation-popup__content">
                <wt-icon icon="attention" color="danger"/>
                <p class="delete-confirmation-popup__message">
                  Are you sure you want to delete 1 item?
                </p>
              </div>
            </template>
            <template v-slot:actions>
              <wt-button
              > Yes
              </wt-button>
              <wt-button
                  color="secondary"
              > No
              </wt-button>
            </template>
          </wt-popup>
        </div>
        <pre><code class="language-html">
            &lt;wt-popup&gt;
              &lt;template v-slot:title&gt;
                Confirm deletion
              &lt;/template&gt;
              &lt;template v-slot:main&gt;
                &lt;div&gt;
                  &lt;wt-icon icon="attention"/&gt;
                  &lt;p> Are you sure you want to delete { deleteCount } items? &lt;/p&gt;
                &lt;/div&gt;
              &lt;/template&gt;
              &lt;template v-slot:actions&gt;
                &lt;wt-button&gt; Yes &lt;/wt-button&gt;
                &lt;wt-button color="secondary"&gt; No &lt;/wt-button&gt;
              &lt;/template&gt;
            &lt;/wt-popup&gt;
          </code></pre>
      </div>
    </article>
    <component-props
        :properties="properties"
    ></component-props>
    <component-events
        :events="events"
    ></component-events>
    <component-slots
        :slots="slots"
    ></component-slots>
  </section>
</template>

<script>
// import Prism from 'prismjs';

export default {
  name: 'wt-popup-docs',
  data: () => ({
    properties: [
      {
        value: 'deleteCount',
        required: "true",
        type: 'Number',
        description: 'Number of items must be deleted',
      },
      {
        value: 'callback',
        required: "true",
        type: 'Function',
        description: 'Function that delete items',
      },
    ],
    events: [
      {
        value: 'close',
      },
    ],
    slots: [
      {
        name: 'title',
        description: "title text slot in header",
      },
      {
        name: 'main',
        description: 'popup main content slot',
      },
      {
        name: 'actions',
        description: 'popup actions slot',
      },
    ],
  }),
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
.popup-wrapper {
  position: relative;
  width: 600px;
  height: 500px;

  .wt-popup {
    position: absolute;
    z-index: 1;
  }
}

.delete-confirmation-popup__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.delete-confirmation-popup__message {
  text-align: center;
}
</style>
