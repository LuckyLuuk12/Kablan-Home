<script lang="ts">
  import SubSites from "$lib/components/SubSites.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Sidebars from "$lib/components/Sidebars.svelte";
</script>

<svelte:head>
  <title>Projects - Kablan</title>
  <meta name="description" content="All projects and sites by Kablan" />
</svelte:head>

<Navbar />
<div class="page-wrapper">
  <Sidebars />
  <main>
    <SubSites />
  </main>
</div>

<style>
  .page-wrapper {
    position: relative;
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  main {
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
    padding-top: 2rem;
  }
</style>
