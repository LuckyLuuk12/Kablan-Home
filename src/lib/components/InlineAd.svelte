<script lang="ts">
  import { consent } from '$lib/stores/consent';
  import { onMount } from 'svelte';

  let showAd = false;

  onMount(() => {
    const unsubscribe = consent.subscribe(value => {
      showAd = value === 'granted';
    });
    return unsubscribe;
  });
</script>

{#if showAd}
  <div class="inline-ad-container">
    <div class="inline-ad">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8329850616808451"
           crossorigin="anonymous"></script>
      <!-- Inline Ad -->
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-client="ca-pub-8329850616808451"
           data-ad-slot="3777214661"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
      <script>
           (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </div>
  </div>
{/if}

<style>
  .inline-ad-container {
    width: 100%;
    display: none; /* Hidden by default (desktop has sidebars) */
    padding: 2rem 0;
  }

  .inline-ad {
    max-width: 800px;
    margin: 0 auto;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Show inline ads only on mobile/tablet where sidebars are hidden */
  @media (max-width: 1400px) {
    .inline-ad-container {
      display: block;
    }
  }

  :global(.inline-ad .adsbygoogle) {
    display: block;
    width: 100%;
  }
</style>
