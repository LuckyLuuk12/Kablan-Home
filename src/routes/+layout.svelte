<script lang="ts">
  import '@kablan/clean-ui/css/index.css';
  import '$lib/styles/global.css';
  import '@fortawesome/fontawesome-free/css/all.css';
  import CookieConsent from '$lib/components/CookieConsent.svelte';
</script>
<slot/>
<CookieConsent />
