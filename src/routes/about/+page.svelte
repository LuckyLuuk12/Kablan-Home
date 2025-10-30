<svelte:head>
  <title>About — Luuk (Kablan)</title>
  <meta name="description" content="Luuk Kablan — solo software engineer, author of several open-source projects and tools." />
</svelte:head>

<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="page-wrapper">
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <i class="fa-solid fa-user"></i>
          About Me
        </div>
        <h1 class="hero-title">
          Hi — I'm <span class="gradient-text">Luuk</span>
        </h1>
        <p class="hero-lead">
          Independent software engineer building focused, high-value tools for web, development workflows, and gaming communities.
        </p>
        
        <div class="social-buttons">
          <a class="social-btn github" href="https://github.com/LuckyLuuk12" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.6 7.6 0 018 4.58c.68.01 1.36.09 2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a class="social-btn linkedin" href="https://www.linkedin.com/in/luuk-kablan/" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a class="social-btn discord" href="https://discord.gg/qRTevFvHbx" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.042-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
            </svg>
            <span>Discord</span>
          </a>

          <a class="social-btn kofi" href="https://ko-fi.com/luckyluuk" target="_blank" rel="noopener">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" fill="currentColor"/>
            </svg>
            <span>Support Me</span>
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="content-section">
    <div class="container">
      <div class="grid-2-col">
        <div class="info-card">
          <div class="card-icon">
            <i class="fa-solid fa-code"></i>
          </div>
          <h2>What I Build</h2>
          <p>I focus on small, targeted software that solves specific problems efficiently. My work includes web applications, developer utilities, and game tooling.</p>
          <ul class="feature-list">
            <li><i class="fa-solid fa-check"></i> Targeted web applications solving single workflow problems</li>
            <li><i class="fa-solid fa-check"></i> Developer utilities and productivity integrations</li>
            <li><i class="fa-solid fa-check"></i> Minecraft tools, launchers, plugins, and protocol utilities</li>
          </ul>
        </div>

        <div class="info-card">
          <div class="card-icon">
            <i class="fa-solid fa-rocket"></i>
          </div>
          <h2>Notable Projects</h2>
          <p>My most significant project is <strong>Kable Launcher</strong>, a custom Minecraft launcher. I also maintain several open-source projects and tools.</p>
          <div class="project-links">
            <a href="https://kable.kablan.nl" target="_blank" class="project-link highlight">
              <i class="fa-solid fa-cube"></i>
              <span>Kable Launcher — Custom Minecraft Launcher</span>
            </a>
            <a href="https://github.com/LuckyLuuk12/kable" target="_blank" class="project-link">
              <i class="fa-brands fa-github"></i>
              <span>Kable on GitHub</span>
            </a>
            <a href="https://luuk.kablan.nl" target="_blank" class="project-link">
              <i class="fa-solid fa-briefcase"></i>
              <span>Personal Portfolio & Tools</span>
            </a>
            <a href="/projects" class="project-link">
              <i class="fa-solid fa-grid-2"></i>
              <span>Full Project Index</span>
            </a>
          </div>
        </div>
      </div>

      <div class="info-card contact-card">
        <div class="card-icon">
          <i class="fa-solid fa-envelope"></i>
        </div>
        <h2>Get in Touch</h2>
        <p>I'm available for Minecraft plugin development and custom plugin requests. Feel free to reach out through any of these channels:</p>
        <div class="contact-links">
          <a href="https://discord.gg/qRTevFvHbx" target="_blank" class="contact-link">
            <i class="fa-brands fa-discord"></i>
            <div>
              <strong>Discord Community</strong>
              <span>Join my Discord server for support and collaboration</span>
            </div>
          </a>
          <a href="https://github.com/LuckyLuuk12" target="_blank" class="contact-link">
            <i class="fa-brands fa-github"></i>
            <div>
              <strong>GitHub</strong>
              <span>Check out my open-source projects and contribute</span>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/luuk-kablan/" target="_blank" class="contact-link">
            <i class="fa-brands fa-linkedin"></i>
            <div>
              <strong>LinkedIn</strong>
              <span>Connect with me professionally</span>
            </div>
          </a>
        </div>
      </div>

      <div class="about-footer">
        <p>
          This site is a personal hub linking to my projects and writing. I work as an individual creator, 
          not a company, and I prefer to keep projects focused and practical.
        </p>
      </div>
    </div>
  </section>
</main>

<style>
  .page-wrapper {
    position: relative;
    min-height: 100vh;
    padding-top: 70px;
  }

  .hero-section {
    position: relative;
    padding: 5rem 2rem 3rem;
    background: linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%);
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
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
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: var(--text);
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--primary-400), var(--secondary-400));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-lead {
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    line-height: 1.7;
    color: var(--placeholder);
    margin-bottom: 2rem;
  }

  .social-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .social-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.5rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid transparent;
  }

  .social-btn svg {
    flex-shrink: 0;
  }

  .social-btn.github {
    background: linear-gradient(135deg, #24292e, #333);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .social-btn.github:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(36, 41, 46, 0.4);
  }

  .social-btn.linkedin {
    background: linear-gradient(135deg, #0A66C2, #004182);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .social-btn.linkedin:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(10, 102, 194, 0.4);
  }

  .social-btn.discord {
    background: linear-gradient(135deg, #5865F2, #4752C4);
    color: #fff;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .social-btn.discord:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(88, 101, 242, 0.4);
  }

  .social-btn.kofi {
    background: linear-gradient(135deg, #099c29, #185712);
    color: var(--text);
    border-color: rgba(0, 0, 0, 0.4);
  }

  .social-btn.kofi:hover {
    background: linear-gradient(135deg, #099c29, #185712);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
  }

  .content-section {
    padding: 4rem 2rem;
  }

  .grid-2-col {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .info-card {
    background: rgba(38, 38, 42, 0.6);
    border: 1px solid rgba(139, 92, 246, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .info-card:hover {
    transform: translateY(-4px);
    border-color: var(--primary-400);
    box-shadow: 0 12px 24px rgba(139, 92, 246, 0.2);
  }

  .card-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    border-radius: 0.75rem;
    margin-bottom: 1rem;
  }

  .card-icon i {
    font-size: 1.5rem;
    color: white;
  }

  .info-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text);
  }

  .info-card p {
    color: var(--placeholder);
    line-height: 1.7;
    margin-bottom: 1.25rem;
  }

  .feature-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .feature-list li {
    display: flex;
    align-items: start;
    gap: 0.75rem;
    padding: 0.5rem 0;
    color: var(--placeholder);
  }

  .feature-list i {
    color: var(--primary-400);
    margin-top: 0.25rem;
  }

  .project-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .project-link {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 0.5rem;
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s ease;
  }

  .project-link:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: var(--primary-400);
    transform: translateX(4px);
  }

  .project-link i {
    color: var(--primary-400);
  }

  .project-link.highlight {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.15));
    border-color: var(--primary-500);
    font-weight: 600;
  }

  .project-link.highlight:hover {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.25), rgba(236, 72, 153, 0.25));
    border-color: var(--primary-400);
  }

  .contact-card {
    max-width: 100%;
    margin: 2rem 0;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem;
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--text);
    transition: all 0.3s ease;
  }

  .contact-link:hover {
    background: rgba(139, 92, 246, 0.1);
    border-color: var(--primary-400);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(139, 92, 246, 0.2);
  }

  .contact-link i {
    font-size: 1.75rem;
    color: var(--primary-400);
    flex-shrink: 0;
  }

  .contact-link div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .contact-link strong {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text);
  }

  .contact-link span {
    font-size: 0.9rem;
    color: var(--placeholder);
  }

  .about-footer {
    text-align: center;
    padding: 2rem;
    background: rgba(38, 38, 42, 0.3);
    border-radius: 1rem;
    border: 1px solid rgba(139, 92, 246, 0.1);
  }

  .about-footer p {
    color: var(--placeholder);
    line-height: 1.7;
    margin: 0;
    max-width: 700px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 1.5rem 2rem;
    }

    .social-buttons {
      flex-direction: column;
      align-items: stretch;
    }

    .social-btn {
      justify-content: center;
    }

    .grid-2-col {
      grid-template-columns: 1fr;
    }
  }
</style>