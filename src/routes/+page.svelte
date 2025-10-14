<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import { onMount } from 'svelte';
  
  let scrollY = 0;
  
  onMount(() => {
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const features = [
    {
      icon: "fa-solid fa-code",
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks and technologies"
    },
    {
      icon: "fa-solid fa-tools",
      title: "Developer Tools",
      description: "Building productivity tools and browser extensions that streamline workflows"
    },
    {
      icon: "fa-solid fa-gamepad",
      title: "Game Development",
      description: "Creating game launchers, protocol tools, and interactive experiences"
    },
    {
      icon: "fa-solid fa-rocket",
      title: "Modern Stack",
      description: "Leveraging TypeScript, Svelte, React, and cutting-edge cloud platforms"
    }
  ];
  
  const stats = [
    { number: "10+", label: "Active Projects" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Passion Driven" }
  ];
</script>

<svelte:head>
  <title>Kablan - Software Engineering & Web Development</title>
  <meta name="description" content="Professional software engineering services specializing in full-stack development, modern web applications, and developer tools" />
</svelte:head>

<Navbar />

<main class="main-content">
  <!-- Animated Background -->
  <div class="bg-gradient" style="transform: translateY({scrollY * 0.5}px)"></div>
  <div class="bg-overlay"></div>
  
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <div class="hero-badge">
        <i class="fa-solid fa-star"></i>
        Software Engineering Excellence
      </div>
      <h1 class="hero-title">
        Building the Future of
        <span class="gradient-text">Digital Solutions</span>
      </h1>
      <p class="hero-description">
        Specializing in full-stack web development, creating modern applications,
        developer tools, and interactive experiences from concept to deployment
      </p>
      <div class="hero-actions">
        <a href="/projects" class="btn-primary">
          View Projects
          <i class="fa-solid fa-arrow-right"></i>
        </a>
        <a href="https://luuk.kablan.nl" target="_blank" class="btn-secondary">
          Portfolio
          <i class="fa-solid fa-external-link-alt"></i>
        </a>
      </div>
      
      <!-- Stats -->
      <div class="stats-grid">
        {#each stats as stat}
          <div class="stat-card">
            <div class="stat-number">{stat.number}</div>
            <div class="stat-label">{stat.label}</div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- Features Section -->
  <section class="features">
    <div class="features-container">
      <h2 class="section-title">What I Do</h2>
      <div class="features-grid">
        {#each features as feature}
          <div class="feature-card">
            <div class="feature-icon">
              <i class={feature.icon}></i>
            </div>
            <h3 class="feature-title">{feature.title}</h3>
            <p class="feature-description">{feature.description}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="cta">
    <div class="cta-container">
      <h2 class="cta-title">Ready to Explore?</h2>
      <p class="cta-description">Check out the portfolio of projects and technical writing</p>
      <div class="cta-actions">
        <a href="/projects" class="btn-primary large">
          Browse All Projects
          <i class="fa-solid fa-grid"></i>
        </a>
        <a href="https://luuks-lab.kablan.nl" target="_blank" class="btn-outline">
          Read the Blog
          <i class="fa-solid fa-book-open"></i>
        </a>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="footer-container">
    <p>&copy; {new Date().getFullYear()} Kablan.nl - All Rights Reserved</p>
    <div class="footer-links">
      <a href="/projects">Projects</a>
      <a href="https://luuk.kablan.nl" target="_blank">Portfolio</a>
      <a href="https://luuks-lab.kablan.nl" target="_blank">Blog</a>
    </div>
  </div>
</footer>

<style>
  .main-content {
    position: relative;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }
  
  /* Animated Background */
  .bg-gradient {
    position: fixed;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: 
      radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.1) 0%, transparent 50%);
    animation: gradientShift 20s ease infinite;
    pointer-events: none;
    z-index: 0;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    33% {
      transform: translate(5%, -5%) rotate(120deg);
    }
    66% {
      transform: translate(-5%, 5%) rotate(240deg);
    }
  }
  
  .bg-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(10, 10, 15, 0.8) 100%);
    pointer-events: none;
    z-index: 1;
  }
  
  /* Hero Section */
  .hero {
    position: relative;
    z-index: 2;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
  }
  
  .hero-container {
    max-width: 900px;
    text-align: center;
    animation: fadeInUp 1s ease-out;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 2rem;
    color: var(--primary-300);
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 2rem;
  }
  
  .hero-title {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--text);
  }
  
  .gradient-text {
    background: linear-gradient(135deg, var(--primary-400), var(--secondary-400), var(--primary-600));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .hero-description {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    line-height: 1.7;
    color: var(--placeholder);
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }
  
  .btn-primary, .btn-secondary, .btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
    font-size: 1.125rem;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    color: white;
    border: 2px solid var(--primary-500);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
  }
  
  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 32px rgba(139, 92, 246, 0.4);
  }
  
  .btn-secondary {
    background: rgba(236, 72, 153, 0.1);
    color: var(--secondary-300);
    border: 2px solid var(--secondary-600);
  }
  
  .btn-secondary:hover {
    background: rgba(236, 72, 153, 0.2);
    transform: translateY(-2px);
  }
  
  .btn-outline {
    background: transparent;
    color: var(--text);
    border: 2px solid rgba(255, 255, 255, 0.2);
  }
  
  .btn-outline:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: var(--primary-400);
    transform: translateY(-2px);
  }
  
  .btn-primary.large, .btn-outline {
    padding: 1.25rem 2.5rem;
  }
  
  /* Stats Grid */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .stat-card {
    padding: 1.5rem;
    background: rgba(38, 38, 42, 0.5);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: 900;
    background: linear-gradient(135deg, var(--primary-300), var(--secondary-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: var(--placeholder);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  /* Features Section */
  .features {
    position: relative;
    z-index: 2;
    padding: 6rem 2rem;
    background: linear-gradient(180deg, transparent 0%, rgba(26, 26, 42, 0.5) 100%);
  }
  
  .features-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, var(--text), var(--primary-300));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    padding: 2.5rem;
    background: rgba(38, 38, 42, 0.6);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    transform: translateY(-8px);
    border-color: var(--primary-400);
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
  }
  
  .feature-icon {
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    border-radius: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .feature-icon i {
    font-size: 2rem;
    color: white;
  }
  
  .feature-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text);
  }
  
  .feature-description {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--placeholder);
  }
  
  /* CTA Section */
  .cta {
    position: relative;
    z-index: 2;
    padding: 6rem 2rem;
    background: linear-gradient(180deg, rgba(26, 26, 42, 0.5) 0%, rgba(139, 92, 246, 0.05) 100%);
  }
  
  .cta-container {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .cta-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: var(--text);
  }
  
  .cta-description {
    font-size: 1.25rem;
    color: var(--placeholder);
    margin-bottom: 2.5rem;
  }
  
  .cta-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  /* Footer */
  .footer {
    position: relative;
    z-index: 2;
    padding: 3rem 2rem;
    background: rgba(26, 26, 42, 0.8);
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .footer-links {
    display: flex;
    gap: 2rem;
  }
  
  .footer-links a {
    color: var(--placeholder);
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: var(--primary-300);
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero {
      min-height: calc(100vh - 70px);
      padding: 3rem 1.5rem;
    }
    
    .stats-grid {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .features {
      padding: 4rem 1.5rem;
    }
    
    .cta {
      padding: 4rem 1.5rem;
    }
    
    .footer-container {
      flex-direction: column;
      text-align: center;
    }
    
    .hero-actions {
      flex-direction: column;
      align-items: stretch;
    }
    
    .btn-primary, .btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
  
  @media (max-width: 480px) {
    .hero-badge {
      font-size: 0.75rem;
      padding: 0.375rem 1rem;
    }
  }
</style>
