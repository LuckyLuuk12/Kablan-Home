<!-- @component
no description yet
-->
<script lang="ts">
  import { page } from '$app/stores';
  
  let mobileMenuOpen = false;
  let expandedGroups: Record<string, boolean> = {};
  
  const navGroups = [
    { 
      name: 'About', 
      path: '/about',
      children: []
    },
    { 
      name: 'Projects', 
      path: '/projects',
      children: []
    },
    { 
      name: 'More', 
      path: '#',
      children: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' }
      ]
    }
  ];
  
  function toggleGroup(groupName: string) {
    expandedGroups[groupName] = !expandedGroups[groupName];
  }
</script>

<nav class="navbar">
  <div class="navbar-container">
    <a href="/" class="navbar-brand gradient-primary-secondary">
      <span class="brand-text">Kablan Home</span>
    </a>
    
    <button 
      class="mobile-menu-toggle"
      on:click={() => mobileMenuOpen = !mobileMenuOpen}
      aria-label="Toggle mobile menu"
    >
      <i class="fa-solid {mobileMenuOpen ? 'fa-times' : 'fa-bars'}"></i>
    </button>
    
    <div class="navbar-menu" class:open={mobileMenuOpen}>
      {#each navGroups as group}
        <div class="nav-group">
          <a 
            href={group.path} 
            class="nav-link"
            on:click={() => group.children.length > 0 && toggleGroup(group.name)}
          >
            {group.name}
            {#if group.children.length > 0}
              <i class="fa-solid fa-chevron-down" class:expanded={expandedGroups[group.name]}></i>
            {/if}
          </a>
          
          {#if group.children.length > 0 && expandedGroups[group.name]}
            <div class="nav-dropdown">
              {#each group.children as child}
                <a href={child.path} class="nav-dropdown-link">
                  {child.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</nav>

<style>
  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(26, 26, 42, 0.95);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(139, 92, 246, 0.2);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .navbar-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  
  .navbar-brand {
    font-size: 1.75rem;
    font-weight: 800;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .brand-text {
    background: linear-gradient(135deg, var(--primary-400), var(--secondary-400));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .mobile-menu-toggle {
    display: none;
    background: transparent;
    border: none;
    color: var(--text);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
  }
  
  .navbar-menu {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
  
  .nav-group {
    position: relative;
  }
  
  .nav-link {
    color: var(--text);
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }
  
  .nav-link:hover {
    background: rgba(139, 92, 246, 0.1);
    color: var(--primary-300);
  }
  
  .nav-link i.fa-chevron-down {
    font-size: 0.75rem;
    transition: transform 0.3s ease;
  }
  
  .nav-link i.fa-chevron-down.expanded {
    transform: rotate(180deg);
  }
  
  .nav-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 0.5rem;
    background: var(--card);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 0.5rem;
    padding: 0.5rem;
    min-width: 220px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    animation: fadeIn 0.2s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-dropdown-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    color: var(--text);
    text-decoration: none;
    border-radius: 0.375rem;
    transition: all 0.2s ease;
    font-size: 0.95rem;
  }
  
  .nav-dropdown-link:hover {
    background: rgba(139, 92, 246, 0.15);
    color: var(--primary-300);
  }
  
  @media (max-width: 768px) {
    .mobile-menu-toggle {
      display: block;
    }
    
    .navbar-menu {
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      background: rgba(26, 26, 42, 0.98);
      backdrop-filter: blur(20px);
      flex-direction: column;
      gap: 0;
      padding: 1rem 0;
      border-top: 1px solid rgba(139, 92, 246, 0.2);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }
    
    .navbar-menu.open {
      max-height: 500px;
    }
    
    .nav-group {
      width: 100%;
    }
    
    .nav-link {
      width: 100%;
      padding: 1rem 2rem;
      border-radius: 0;
      justify-content: space-between;
    }
    
    .nav-dropdown {
      position: static;
      margin-top: 0;
      border-left: 3px solid var(--primary-500);
      border-radius: 0;
      background: rgba(139, 92, 246, 0.05);
    }
    
    .nav-dropdown-link {
      padding-left: 3rem;
    }
  }
</style>
