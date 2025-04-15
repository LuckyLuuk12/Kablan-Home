<script lang="ts">
  import type { Site } from "$lib/types";
  import {onMount} from "svelte";
  let sites: Site[] = [
    {
      url: "https://new-tab.firefox.kablan.nl",
      name: "Firefox - New Tab",
      description: "A 'new tab' page made for firefox and personal use for LK"
    },
    {
      url: "https://kablan.nl",
      name: "This Page",
      description: "The main home page for kablan.nl which you're looking at right now.."
    },
    {
      url: "https://luuk.kablan.nl",
      name: "Portfolio - Luuk Kablan",
      description: "Portfolio site of Luuk Kablan"
    },
    {
      url: "https://memes.kablan.nl",
      name: "My Memes Site",
      description: "A personal meme archive with easy copy and search features"
    }
  ];
  
  const LOCAL_STORAGE_KEY = "subsites_order";
  
  // Load the order from localStorage on mount
  onMount(() => {
    const storedOrder = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedOrder) {
      const parsedOrder = JSON.parse(storedOrder) as string[];
      const orderedSites = parsedOrder
              .map((url) => sites.find((site) => site.url === url))
              .filter((site): site is Site => site !== undefined);
      
      // Add any new sites that are not in the stored order
      const newSites = sites.filter(
              (site) => !parsedOrder.includes(site.url)
      );
      
      sites = [...orderedSites, ...newSites];
    }
  });
  
  // Save the new order to localStorage
  function saveOrder() {
    const order = sites.map((site) => site.url);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(order));
    // Set the sites list to update the html:
    sites = [...sites]
  }
  
  // Handle drag-and-drop reordering
  function handleDragStart(event: DragEvent, index: number) {
    event.dataTransfer?.setData("text/plain", index.toString());
  }
  
  function handleDrop(event: DragEvent, targetIndex: number) {
    event.preventDefault();
    const sourceIndex = parseInt(event.dataTransfer?.getData("text/plain") || "-1", 10);
    if (sourceIndex >= 0 && sourceIndex !== targetIndex) {
      const [movedItem] = sites.splice(sourceIndex, 1);
      sites.splice(targetIndex, 0, movedItem);
      saveOrder();
    }
  }
  
  function handleDragOver(event: DragEvent) {
    event.preventDefault();
  }
</script>

<!-- Grid container that user can re-order themselves -->
<div class="projects">
  {#each sites as site, index}
    <div class="gradient-border">
      <div class="project"
           draggable="true"
           on:dragstart={(event) => handleDragStart(event, index)}
           on:dragover={handleDragOver}
           on:drop={(event) => handleDrop(event, index)}
      >
        <h3>{site.name}</h3>
        <p>{site.description}</p>
        <a href={site.url} target="_blank" rel="noopener noreferrer">{site.url}</a>
      </div>
    </div>
  {/each}
</div>

<style>
  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns, each taking 1 fraction of the available space */
    grid-template-rows: repeat(5, 1fr);   /* 5 rows, each taking 1 fraction of the available space */
    gap: 1rem; /* Space between grid items */
  }
  
  .gradient-border {
    background: linear-gradient(to right bottom, var(--accent-2), var(--accent-3), var(--accent-1));
    border-radius: 0.5rem;
    animation: gradient-animation 6s infinite;
    background-size: 300% 300%;
  }
  
  @keyframes gradient-animation {
    0% {
      background-position: 0 0;
    }
    25% {
      background-position: 100% 0;
    }
    50% {
      background-position: 100% 100%;
    }
    75% {
      background-position: 0 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
  
  .project {
    padding: 1rem;
    margin: 2px;
    border-radius: 0.5rem;
    background-color: var(--background-1);
    cursor: grab;
  }
  
  .project:active {
    cursor: grabbing;
  }
</style>
