<svelte:head>
  <title>Terms of Service — Luuk (Kablan)</title>
  <meta name="description" content="Terms of Service for Luuk's personal site and project hub." />
</svelte:head>

<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="page-wrapper">
  <section class="hero-section">
    <div class="container">
      <div class="hero-badge">
        <i class="fa-solid fa-file-contract"></i>
        Terms of Service
      </div>
      <h1 class="hero-title">Simple <span class="gradient-text">Terms</span></h1>
      <p class="hero-lead">
        By using this site, you agree to these straightforward terms.
      </p>
    </div>
  </section>

  <section class="content-section">
    <div class="container">
      <div class="intro-card">
        <p>
          This is a personal site maintained by an individual. The following terms are simple
          and designed to protect both you and me. This is not legal advice.
        </p>
      </div>

      <div class="terms-sections">
        <div class="term-card">
          <div class="term-icon">
            <i class="fa-solid fa-hand-pointer"></i>
          </div>
          <h2>Use of Site</h2>
          <p>
            All content on this site is provided "as-is" for informational and reference purposes.
            You may browse the site, follow links to projects and subdomains, and use any openly
            shared tools or resources responsibly.
          </p>
          <p>
            Do not attempt to disrupt the site, access unauthorized areas, or misuse any services
            or content provided.
          </p>
        </div>

        <div class="term-card">
          <div class="term-icon">
            <i class="fa-solid fa-copyright"></i>
          </div>
          <h2>Intellectual Property</h2>
          <p>
            All original content, code, and creative work on this site is owned by Luuk (Kablan)
            unless otherwise stated. Many projects are open-source and licensed accordingly—check
            individual repositories for specific licenses.
          </p>
          <p>
            Do not copy, redistribute, or claim ownership of proprietary content without permission.
          </p>
        </div>

        <div class="term-card">
          <div class="term-icon">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <h2>Disclaimer of Warranties</h2>
          <p>
            This site and its content are provided without warranties of any kind. I make no
            guarantees about the accuracy, reliability, or availability of the site or its links.
          </p>
          <p>
            Use of any tools, code, or information is at your own risk. I am not liable for any
            damages or issues arising from the use of this site.
          </p>
        </div>

        <div class="term-card">
          <div class="term-icon">
            <i class="fa-solid fa-scale-balanced"></i>
          </div>
          <h2>Changes to Terms</h2>
          <p>
            I may update these terms from time to time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>
          <p>
            For significant changes, I'll make a reasonable effort to notify users through the site
            or linked channels.
          </p>
        </div>
      </div>

      <div class="contact-card">
        <h2>Questions?</h2>
        <p>
          If you have questions about these terms, reach out via the <a href="/about">About page</a> or contact me directly:
        </p>
        <div class="contact-links">
          <a href="https://github.com/LuckyLuuk12" target="_blank" class="contact-link">
            <i class="fa-brands fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/luuk-kablan/" target="_blank" class="contact-link">
            <i class="fa-brands fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
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
    padding: 4rem 2rem 2rem;
    background: linear-gradient(180deg, rgba(236, 72, 153, 0.05) 0%, transparent 100%);
    text-align: center;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1.5rem;
    background: rgba(236, 72, 153, 0.1);
    border: 1px solid rgba(236, 72, 153, 0.3);
    border-radius: 2rem;
    color: var(--secondary-300);
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  .hero-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1rem;
    color: var(--text);
  }

  .gradient-text {
    background: linear-gradient(135deg, var(--secondary-400), var(--primary-400));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--placeholder);
    max-width: 600px;
    margin: 0 auto;
  }

  .content-section {
    padding: 3rem 2rem 5rem;
  }

  .intro-card {
    background: rgba(38, 38, 42, 0.4);
    border: 1px solid rgba(236, 72, 153, 0.2);
    border-radius: 1rem;
    padding: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  .intro-card p {
    color: var(--placeholder);
    line-height: 1.7;
    margin: 0;
  }

  .terms-sections {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .term-card {
    background: rgba(38, 38, 42, 0.6);
    border: 1px solid rgba(236, 72, 153, 0.15);
    border-radius: 1rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .term-card:hover {
    transform: translateX(4px);
    border-color: var(--secondary-400);
    box-shadow: 0 8px 20px rgba(236, 72, 153, 0.15);
  }

  .term-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--secondary-600), var(--secondary-700));
    border-radius: 0.75rem;
    margin-bottom: 1rem;
  }

  .term-icon i {
    font-size: 1.5rem;
    color: white;
  }

  .term-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text);
  }

  .term-card p {
    color: var(--placeholder);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  .term-card p:last-child {
    margin-bottom: 0;
  }

  .contact-card {
    background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1));
    border: 1px solid rgba(236, 72, 153, 0.3);
    border-radius: 1rem;
    padding: 2.5rem;
    text-align: center;
  }

  .contact-card h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    color: var(--text);
  }

  .contact-card > p {
    color: var(--placeholder);
    margin-bottom: 1.5rem;
  }

  .contact-card a:not(.contact-link) {
    color: var(--secondary-300);
    text-decoration: underline;
  }

  .contact-links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  .contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(38, 38, 42, 0.8);
    border: 1px solid rgba(236, 72, 153, 0.3);
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .contact-link:hover {
    background: rgba(236, 72, 153, 0.2);
    border-color: var(--secondary-400);
    transform: translateY(-2px);
  }

  .contact-link i {
    color: var(--secondary-400);
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 1.5rem 1.5rem;
    }

    .content-section {
      padding: 2rem 1.5rem 3rem;
    }

    .contact-links {
      flex-direction: column;
      align-items: stretch;
    }

    .contact-link {
      justify-content: center;
    }
  }
</style>