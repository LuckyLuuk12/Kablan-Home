<!-- @component
no description yet
-->
<script lang="ts">
  import type { Site } from "$lib/types";
  import {onMount} from "svelte";
  
  let sites: Site[] = [
    {
      url: "https://luuk.kablan.nl",
      name: "Luuk's Portfolio",
      description: "Professional portfolio showcasing projects, skills, and experience",
      group: "portfolio",
      icon: "fa-solid fa-briefcase"
    },
    {
      url: "https://studio-terraverde.pages.dev",
      name: "Studio Terraverde",
      description: "Creative, modern & sustainable company specializing in Architecture",
      group: "portfolio",
      icon: "fa-solid fa-palette"
    },
    {
      url: "https://luuks-lab.kablan.nl",
      name: "Luuk's Lab",
      description: "Technical blog featuring deep dives into software engineering, architecture, and development insights",
      group: "content",
      icon: "fa-solid fa-flask"
    },
    {
      url: "https://kable.kablan.nl",
      name: "Kable Launcher",
      description: "Feature-rich Minecraft launcher built with modern technologies and enhanced user experience",
      group: "minecraft",
      icon: "fa-solid fa-cube"
    },
    {
      url: "https://varint.kablan.nl",
      name: "Varint Converter",
      description: "Developer tool for converting variable-length integers used in the Minecraft protocol",
      group: "minecraft",
      icon: "fa-solid fa-exchange-alt"
    },
    {
      url: "https://luukahead.kablan.nl",
      name: "Luuk Ahead",
      description: "Agile project management platform with kanban boards, sprint planning, and team collaboration",
      group: "tools",
      icon: "fa-solid fa-tasks"
    },
    {
      url: "https://luckytab.kablan.nl",
      name: "Lucky Tab",
      description: "Productivity-focused browser new tab page with customizable widgets and quick links",
      group: "tools",
      icon: "fa-solid fa-window-restore"
    },
    {
      url: "https://new-tab.firefox.kablan.nl",
      name: "Firefox New Tab",
      description: "Lightweight custom new tab extension designed specifically for Firefox",
      group: "tools",
      icon: "fa-brands fa-firefox"
    },
    {
      url: "https://reken-escape-room.kablan.nl",
      name: "Math Escape Room",
      description: "Interactive educational game teaching primary school mathematics through engaging puzzles",
      group: "education",
      icon: "fa-solid fa-graduation-cap"
    },
    {
      url: "https://memes.kablan.nl",
      name: "Meme Archive",
      description: "Personal meme collection with advanced search, tagging, and one-click copy features",
      group: "content",
      icon: "fa-solid fa-images"
    }
  ];
  
  const LOCAL_STORAGE_KEY = "subsites_order";
  
  // Group sites by their group property
  $: groupedSites = sites.reduce((acc, site) => {
    const group = site.group || "other";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(site);
    return acc;
  }, {} as Record<string, Site[]>);
  
  // Define group display names and order
  const groupOrder = ["minecraft", "tools", "portfolio", "education", "content", "misc", "other"];
  const groupNames: Record<string, string> = {
    portfolio: "Portfolios",
    tools: "Development Tools & Utilities",
    minecraft: "Minecraft Projects",
    education: "Educational Projects",
    content: "Blog & Content",
    misc: "Miscellaneous",
    other: "Other"
  };
  
  const groupDescriptions: Record<string, string> = {
    portfolio: "Professional work and experience showcase",
    tools: "Productivity tools and browser extensions for developers and users",
    minecraft: "Game development projects and tools for the Minecraft ecosystem",
    education: "Interactive learning experiences and educational games",
    content: "Articles, tutorials, and technical writing",
    misc: "Personal projects and experimental ideas"
  };
  
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
    sites = [...sites];
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

<div class="landing-container">
  <!-- Projects Section -->
  <section class="projects-section">
    {#each groupOrder as groupKey}
      {#if groupedSites[groupKey] && groupedSites[groupKey].length > 0}
        <div class="project-group">
          <div class="group-header">
            <h2 class="group-title">{groupNames[groupKey]}</h2>
            {#if groupDescriptions[groupKey]}
              <p class="group-description">{groupDescriptions[groupKey]}</p>
            {/if}
          </div>
          <div class="projects-grid">
            {#each groupedSites[groupKey] as site, index}
              {@const globalIndex = sites.indexOf(site)}
              <div 
                class="project-card"
                draggable="true"
                role="gridcell"
                tabindex="0"
                on:dragstart={(event) => handleDragStart(event, globalIndex)}
                on:dragover={handleDragOver}
                on:drop={(event) => handleDrop(event, globalIndex)}
              >
                {#if site.icon}
                  <div class="project-icon">
                    <i class={site.icon}></i>
                  </div>
                {/if}
                <div class="project-content">
                  <h3 class="project-name">{site.name}</h3>
                  <p class="project-description">{site.description}</p>
                  <a href={site.url} target="_blank" rel="noopener noreferrer" class="project-link">
                    Visit Site <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; {new Date().getFullYear()} Kablan.nl - All projects and sites</p>
    <p class="footer-hint">Tip: Drag and drop cards to reorder them</p>
  </footer>
</div>

<style>
  .landing-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem 4rem;
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* Hero Section */
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    margin-bottom: 3rem;
    background: var(--card);
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
  }

  .hero-content {
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--primary-500), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 1.5rem;
  }

  .hero-description {
    font-size: 1.125rem;
    line-height: 1.8;
    color: var(--placeholder);
    max-width: 700px;
    margin: 0 auto;
  }

  /* About Section */
  .about-section {
    margin-bottom: 4rem;
    width: 100%;
  }

  .about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    gap: 2rem;
    width: 100%;
  }

  .about-card {
    background: var(--card);
    padding: 2rem;
    border-radius: 0.75rem;
    text-align: center;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .about-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: var(--primary-200);
  }

  .about-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-400), var(--primary-600));
    border-radius: 1rem;
  }

  /* Projects Section */
  .projects-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin-bottom: 4rem;
    width: 100%;
  }

  .project-group {
    animation: fadeIn 0.5s ease-in;
    width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .group-header {
    margin-bottom: 2rem;
  }

  .group-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid var(--primary-500);
    display: inline-block;
  }

  .group-description {
    font-size: 1rem;
    color: var(--placeholder);
    margin-top: 0.75rem;
    line-height: 1.6;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
    gap: 1.5rem;
    width: 100%;
  }

  .project-card {
    background: var(--card);
    border-radius: 0.75rem;
    padding: 1.75rem;
    transition: all 0.3s ease;
    cursor: grab;
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    width: 100%;
  }

  .project-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-500), var(--secondary));
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .project-card:hover::before {
    transform: scaleX(1);
  }

  .project-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    border-color: var(--primary-300);
  }

  .project-card:active {
    cursor: grabbing;
  }

  .project-icon {
    width: 48px;
    height: 48px;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-100), var(--primary-200));
    border-radius: 0.5rem;
  }

  .project-icon i {
    font-size: 1.5rem;
    color: var(--primary-700);
  }

  .project-content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-name {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
  }

  .project-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--placeholder);
    flex-grow: 1;
    margin: 0;
  }

  .project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-600);
    text-decoration: none;
    transition: all 0.2s ease;
    margin-top: 0.5rem;
    width: fit-content;
  }

  .project-link:hover {
    color: var(--primary-700);
    gap: 0.75rem;
  }

  .project-link i {
    font-size: 0.85rem;
  }

  /* Footer */
  .footer {
    text-align: center;
    padding: 2rem 1rem;
    color: var(--placeholder);
    border-top: 1px solid var(--primary-200);
    width: 100%;
    max-width: 100%;
  }

  .footer p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
  }

  .footer-hint {
    font-size: 0.875rem;
    font-style: italic;
    color: var(--placeholder);
    opacity: 0.7;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .landing-container {
      padding: 1rem;
      max-width: 100%;
    }

    .hero {
      padding: 2rem 1rem;
      margin-left: 0;
      margin-right: 0;
    }

    .hero-title {
      font-size: 2.5rem;
      word-break: break-word;
    }

    .hero-subtitle {
      font-size: 1.25rem;
    }

    .hero-description {
      font-size: 1rem;
    }

    .about-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .group-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .landing-container {
      padding: 0.75rem;
    }

    .hero {
      padding: 1.5rem 0.75rem;
      border-radius: 0.5rem;
    }

    .hero-title {
      font-size: 2rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .about-card {
      padding: 1.5rem;
    }

    .about-grid {
      gap: 1rem;
    }

    .project-card {
      padding: 1.25rem;
    }

    .projects-grid {
      gap: 1rem;
    }

    .footer {
      padding: 1.5rem 0.75rem;
    }
  }
</style>
