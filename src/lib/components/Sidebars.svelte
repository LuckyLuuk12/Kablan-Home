<script lang="ts">
  // Number of ad units to display per sidebar
  const adCount = 4;
</script>

<!-- Left Sidebar -->
<aside class="sidebar sidebar-left">
  <div class="sidebar-content">
    {#each Array(adCount) as _, i}
      <div class="ad-unit">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8329850616808451"
             crossorigin="anonymous"></script>
        <!-- KableVertical -->
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
    {/each}
  </div>
</aside>

<!-- Right Sidebar -->
<aside class="sidebar sidebar-right">
  <div class="sidebar-content">
    {#each Array(adCount) as _, i}
      <div class="ad-unit">
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8329850616808451"
             crossorigin="anonymous"></script>
        <!-- KableVertical -->
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
    {/each}
  </div>
</aside>

<style>
  .sidebar {
    position: absolute; /* Changed from fixed to absolute */
    top: 0; /* Start below navbar */
    bottom: 0; /* Stretch to bottom of page */
    height: auto; /* Let it grow with content */
    width: 250px;
    z-index: 500; /* Below navbar (1000) but above content */
    pointer-events: none; /* Allow clicking through empty space */
  }
  
  .sidebar-left {
    left: 0;
  }
  
  .sidebar-right {
    right: 0;
  }
  
  .sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 3rem; /* Space between ads */
    padding: 1rem;
    padding-bottom: 3rem; /* Extra padding at bottom */
    pointer-events: auto; /* Re-enable clicks on actual content */
    height: 100%; /* Fill the sidebar height */
  }
  
  .ad-unit {
    /* Removed background, border, and backdrop-filter for transparency */
    /* Only ads will be visible, empty containers are invisible */
    min-height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  /* AdSense specific styles */
  :global(.adsbygoogle) {
    display: block;
    width: 100%;
    min-height: 250px;
  }
  
  /* Hide sidebars on smaller screens */
  @media (max-width: 1400px) {
    .sidebar {
      display: none;
    }
  }
  
  /* Responsive width adjustments */
  @media (min-width: 1600px) {
    .sidebar {
      width: 300px;
    }
  }
  
  @media (min-width: 1401px) and (max-width: 1599px) {
    .sidebar {
      width: 250px;
    }
  }
</style>
