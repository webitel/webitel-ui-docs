<template>
  <wt-popup
      class="delete-confirmation-popup"
      width="500"
      @close="close"
  >
    <template v-slot:title>{{ $t('webitelUI.deleteConfirmationPopup.title') }}</template>
    <template v-slot:main>
      <div class="delete-confirmation-popup__content">
        <wt-icon icon="attention" color="error"/>
        <p class="delete-confirmation-popup__message">
          deleteMessage
        </p>
      </div>
    </template>
    <template v-slot:actions>
      <wt-button
          :loading="isDeleting"
          @click="confirm"
      > Yes
      </wt-button>
      <wt-button
          :disabled="isDeleting"
          color="secondary"
          @click="close"
      > No
      </wt-button>
    </template>
  </wt-popup>
</template>

<script>
// import Prism from 'prismjs';

export default {
  name: 'wt-popup-docs',
  data: () => ({
    properties: [
      {
        value: 'deleteCount',
        type: 'Number',
        description: '',
      },
      {
        value: 'callback',
        type: 'Function',
        description: '',
      },
    ],
    events: [
      {
        value: 'close',
      },
    ],
    slots: [
      {
        name: 'header',
        description: 'popup header slot',
      },
      {
        name: 'title',
        description: "title text slot inside h3 in header, if header slot wasn't passed)",
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
</style>
