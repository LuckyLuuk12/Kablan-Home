<!-- @component
no description yet
-->
<script lang="ts">
  import { consent } from '$lib/stores/consent';
  import { onMount, onDestroy } from 'svelte';
  import { get } from 'svelte/store';

  let localConsent: 'unknown' | 'granted' | 'denied' = 'unknown';
  let unsubscribe: () => void;

  onMount(() => {
    localConsent = get(consent);
    unsubscribe = consent.subscribe(v => localConsent = v);
  });

  onDestroy(() => { if (unsubscribe) unsubscribe(); });

  function accept() { consent.set('granted'); }
  function refuse() { consent.set('denied'); }
</script>

{#if localConsent === 'unknown'}
  <div class="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
    <div class="cookie-inner">
      <div class="cookie-content">
        <div class="cookie-icon">
          <i class="fa-solid fa-cookie-bite"></i>
        </div>
        <div class="cookie-text">
          <strong>Cookie Notice</strong>
          <p>This site uses Google AdSense which may place cookies for advertising. See our <a href="/privacy">privacy policy</a> for details.</p>
        </div>
      </div>
      <div class="cookie-actions">
        <button class="btn-refuse" on:click={refuse} aria-label="Refuse cookies">
          <i class="fa-solid fa-xmark"></i>
          <span>Refuse</span>
        </button>
        <button class="btn-accept" on:click={accept} aria-label="Accept cookies">
          <i class="fa-solid fa-check"></i>
          <span>Accept</span>
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
.cookie-banner {
  position: fixed;
  left: 1rem;
  right: 1rem;
  bottom: 1.5rem;
  z-index: 2000;
  max-width: 600px;
  margin: 0 auto;
  animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cookie-inner {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1.25rem;
  background: rgba(26, 26, 30, 0.98);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 1rem;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(255, 255, 255, 0.02) inset;
  backdrop-filter: blur(20px);
}

.cookie-content {
  display: flex;
  gap: 1rem;
  align-items: start;
}

.cookie-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  border-radius: 0.75rem;
  color: white;
  font-size: 1.25rem;
}

.cookie-text {
  flex: 1;
}

.cookie-text strong {
  display: block;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 0.25rem;
}

.cookie-text p {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--placeholder);
  margin: 0;
}

.cookie-text a {
  color: var(--primary-300);
  text-decoration: underline;
  transition: color 0.3s ease;
}

.cookie-text a:hover {
  color: var(--primary-200);
}

.cookie-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-refuse,
.btn-accept {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-refuse {
  background: rgba(255, 255, 255, 0.05);
  color: var(--placeholder);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-refuse:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.btn-accept {
  background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
  color: white;
  border: 1px solid var(--primary-500);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.btn-accept:hover {
  background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
  box-shadow: 0 6px 16px rgba(139, 92, 246, 0.4);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .cookie-banner {
    left: 0.75rem;
    right: 0.75rem;
    bottom: 0.75rem;
  }

  .cookie-inner {
    padding: 1rem;
    gap: 1rem;
  }

  .cookie-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .cookie-actions {
    flex-direction: column;
  }

  .btn-refuse,
  .btn-accept {
    width: 100%;
  }
}
</style>