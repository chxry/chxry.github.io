<script lang="ts">
  import Fa from "svelte-fa";
  import { faCode, faLink } from "@fortawesome/free-solid-svg-icons";
  export let repo: string;

  let fetchData = async () => {
    let res = await fetch(`https://api.github.com/repos/${repo}`);
    return await res.json();
  };
</script>

<fieldset>
  <legend>{repo}</legend>
  {#await fetchData()}
    <span>loading...</span>
  {:then data}
    <span>{data.description}</span>
    <span><Fa icon={faCode} />{data.language}</span>
    <span>
      <Fa icon={faLink} /><a href={data.html_url} target="_blank">{repo}</a>
    </span>
  {:catch error}
    <span>an error occoured.</span>
  {/await}
</fieldset>
