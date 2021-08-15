<script lang="ts">
  import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  export let title: string;
  export let info: { icon: IconDefinition; content: string; link?: string }[];
</script>

<fieldset>
  <legend>{title}:</legend>
  {#each info as { icon, content, link }}
    <span>
      <Fa {icon} />
      {#if link}
        <a href={link} target="_blank">{content}</a>
      {:else}
        {content}
      {/if}
    </span>
  {/each}
</fieldset>
