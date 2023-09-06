<template>
  <section>
    <h2>Agent Status Select</h2>
    <p>Agent status select module includes:</p>
    <article class="figures-wrapper">
      <figure>
        <img
          src="./_internals/img/agent-status-select__select.png"
          alt="agent status select select pic"
          width="171"
          height="153"
        >
        <p>1) Status select view</p>
      </figure>
      <figure>
        <img
          src="./_internals/img/agent-status-select__pause-cause-popup.png"
          alt="agent status select pause cause popup pic"
          width="600"
        >
        <p>2) Status select pause cause popup </p>
      </figure>
      <figure>
        <img
          src="./_internals/img/agent-status-select__error-popup.jpg"
          alt="agent status select error popup pic"
          width="500"
        >
        <p>3) Status select error popup</p>
      </figure>
    </article>
    <article>
      <ul>
        <li>
          <h3>1) Status select view</h3> consists of a component and api that returns possible statuses
        </li>
        <li>
          <h3>2) Status select pause cause popup</h3> consists of:
          <p>- popup component</p>
          <p>- api that returns possible cause</p>
          <p>- composable <code>useRepresentableAgentPauseCause</code> - calculates for each cause the total amount of time allowed and available to the active user</p>
          <p>Entering parameter - pauseCauses - an array of cause</p>
        </li>
        <li>
          <h3>3) Status select error popup</h3> consists of a component. Displayed if have errors after selecting a cause
        </li>
      </ul>
    </article>
    <article>
      <h3>Usage:</h3>
      <pre><code class="language-html">
        &lt;template&gt;
          &lt;wt-cc-agent-status-select
            :agent-id="10"
            :status="online"
            :status-duration="offline"
            @changed="changeStatus"
          &gt;&lt;/wt-cc-agent-status-select&gt;
        &lt;/template&gt;
      </code>
      <code class="language-javascript">
        import WtCcAgentStatusSelect from '@webitel/ui-sdk/src/modules/AgentStatusSelect/components/wt-cc-agent-status-select.vue';
      </code></pre>
    </article>
    <article>
      <component-props
        :properties="properties"
      ></component-props>
      <component-events
        :events="events"
      ></component-events>
    </article>
  </section>
</template>

<script>
import Prism from 'prismjs';

export default {
  name: 'wt-cc-agent-status-select-docs',
  data: () => ({
    properties: [
      {
        value: 'agentId',
        code: '<wt-cc-agent-status-select :agent-id="10"></wt-cc-agent-status-select>',
        type: ['Number', 'String'],
        required: true,
        description: 'Id of agent we\'re working on. Used for patching status changes and receiving pause causes.',
      },
      {
        value: 'status',
        code: '<wt-cc-agent-status-select :status="online"></wt-cc-agent-status-select>',
        type: 'String',
        default: 'AgentStatus.OFFLINE // \'offline\'',
        description: 'Agent status. Can be undefined, is agent wasn\'t loaded yet',
      },
      {
        value: 'statusDuration',
        code: '<wt-cc-agent-status-select :status-duration="offline"></wt-cc-agent-status-select>',
        type: ['String', 'Number'],
        default: 0,
        description: `Value, represented on select. If value is numeric, it is parsed by convertDuration webitel-ui-sdk script`,
      },
    ],
    events: [
      {
        value: 'changed',
        params: 'status',
        description: 'Status changed event'
      }
    ],
  }),
  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style lang="scss" scoped>
.figures-wrapper {
  display: flex;
}
</style>
