<svelte:head>
  <title>Privacy Policy — Luuk (Kablan)</title>
  <meta name="description" content="Privacy policy for Luuk's personal site and project hub." />
</svelte:head>

<script lang="ts">
  import Navbar from '$lib/components/Navbar.svelte';
</script>

<Navbar />

<main class="page-wrapper">
  <section class="hero-section">
    <div class="container">
      <div class="hero-badge">
        <i class="fa-solid fa-shield-halved"></i>
        Privacy Policy
      </div>
      <h1 class="hero-title">Your <span class="gradient-text">Privacy</span> Matters</h1>
      <p class="hero-lead">
        Transparent information about how this site collects and uses data.
      </p>
    </div>
  </section>

  <section class="content-section">
    <div class="container">
      <div class="intro-card">
        <p>
          This is the privacy policy for Luuk's personal site (Kablan). I maintain this
          site as an individual and care about your privacy. The following explains what
          data may be collected and how it is used.
        </p>
      </div>

      <div class="policy-sections">
        <div class="policy-card">
          <div class="policy-icon">
            <i class="fa-solid fa-database"></i>
          </div>
          <h2>Information Collected</h2>
          <p>
            When you visit this site, basic technical information such as your IP address,
            browser type, and pages visited may be collected by server logs and third-party
            services used on the site (for example analytics or advertising providers).
          </p>
          <p>
            This information is used solely for site operation, analytics, and improvement purposes.
          </p>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fa-solid fa-cookie-bite"></i>
          </div>
          <h2>Cookies & Advertising</h2>
          <p>
            I use Google AdSense to serve ads on this site. AdSense may set cookies and collect
            information about how you use the site. You can accept or refuse advertising cookies
            using the cookie banner that appears on your first visit.
          </p>
          <p>
            If you refuse cookies, ad scripts will not be loaded on this site. Your choice is
            stored locally in your browser.
          </p>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fa-solid fa-link"></i>
          </div>
          <h2>Third-Party Services</h2>
          <p>
            The site links to and embeds content from other services (GitHub, LinkedIn, blog
            platforms, Ko-fi, etc.). Those services have their own privacy policies and may collect data
            separately from this site.
          </p>
          <p>
            I am not responsible for the privacy practices of external sites and services.
          </p>
        </div>

        <div class="policy-card">
          <div class="policy-icon">
            <i class="fa-solid fa-clock"></i>
          </div>
          <h2>Data Retention & Requests</h2>
          <p>
            I retain only necessary data for site operation and for services used. If you have
            specific requests regarding data (access, deletion, correction), please reach out via
            the contact links on the <a href="/about">About page</a>.
          </p>
          <p>
            Responses to data requests will be handled promptly and in compliance with applicable
            privacy regulations.
          </p>
        </div>
      </div>

      <div class="contact-card">
        <h2>Questions or Concerns?</h2>
        <p>
          For privacy questions or data requests, contact me via:
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
    background: linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, transparent 100%);
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
    background: rgba(139, 92, 246, 0.1);
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 2rem;
    color: var(--primary-300);
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
    background: linear-gradient(135deg, var(--primary-400), var(--secondary-400));
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
    border: 1px solid rgba(139, 92, 246, 0.2);
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

  .policy-sections {
    display: grid;
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .policy-card {
    background: rgba(38, 38, 42, 0.6);
    border: 1px solid rgba(139, 92, 246, 0.15);
    border-radius: 1rem;
    padding: 2rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }

  .policy-card:hover {
    transform: translateX(4px);
    border-color: var(--primary-400);
    box-shadow: 0 8px 20px rgba(139, 92, 246, 0.15);
  }

  .policy-icon {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    border-radius: 0.75rem;
    margin-bottom: 1rem;
  }

  .policy-icon i {
    font-size: 1.5rem;
    color: white;
  }

  .policy-card h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--text);
  }

  .policy-card p {
    color: var(--placeholder);
    line-height: 1.7;
    margin-bottom: 0.75rem;
  }

  .policy-card p:last-child {
    margin-bottom: 0;
  }

  .policy-card a {
    color: var(--primary-300);
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .policy-card a:hover {
    color: var(--primary-200);
  }

  .contact-card {
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    border: 1px solid rgba(139, 92, 246, 0.3);
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
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .contact-link:hover {
    background: rgba(139, 92, 246, 0.2);
    border-color: var(--primary-400);
    transform: translateY(-2px);
  }

  .contact-link i {
    color: var(--primary-400);
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