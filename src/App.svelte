<script lang="ts">
  import "./index.scss";
  import { InfoBox, GithubBox } from "./components";
  import Fa from "svelte-fa";
  import {
    faBullhorn,
    faMapMarkerAlt,
    faTerminal,
    faStream,
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faRust,
    faReact,
    faJs,
    faSass,
    faLinux,
    faGithubAlt,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

  let icon = "./icon.png";
</script>

<main>
  <info>
    <h1><img on:mouseenter={() => icon="./iconcolor.png"} on:mouseleave={() => icon="./icon.png"} src={icon} alt="" />chxry</h1>
    <p>all round software developer.</p>
    <InfoBox
      title="info"
      info={[
        { icon: faBullhorn, content: "call me \"cherry\"" },
        { icon: faMapMarkerAlt, content: "united kingdom" },
        { icon: faTerminal, content: "neovim" },
      ]}
    />
    <InfoBox
      title="skills"
      info={[
        { icon: faRust, content: "rust" },
        { icon: faReact, content: "react/svelte" },
        { icon: faJs, content: "javascript/typescript" },
        { icon: faSass, content: "sass/css" },
        { icon: faLinux, content: "linux" },
      ]}
    />
    <InfoBox
      title="links"
      info={[
        {
          icon: faGithubAlt,
          content: "github",
          link: "https://github.com/chxry",
        },
        {
          icon: faTwitter,
          content: "twitter",
          link: "https://twitter.com/chxry__",
        },
      ]}
    />
  </info>
  <portfolio>
    <h1><Fa icon={faStream} />portfolio</h1>
    <p>a selection of my work.</p>
    <GithubBox repo="chxry/floppa-files" />
    <GithubBox repo="chxry/floppa-bot" />
    <GithubBox repo="chxry/floppa-stats" />
    <GithubBox repo="chxry/rpggame" />
    <GithubBox repo="chxry/cps-tester" />
  </portfolio>
</main>
