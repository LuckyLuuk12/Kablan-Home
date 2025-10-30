import { writable } from 'svelte/store';

// consent: 'unknown' | 'granted' | 'denied'
const initial = typeof window !== 'undefined' ? (localStorage.getItem('cookie_consent') as 'granted' | 'denied' | null) ?? 'unknown' : 'unknown';

export const consent = writable<'unknown' | 'granted' | 'denied'>(initial);

consent.subscribe(value => {
  if (typeof window === 'undefined') return;
  if (value === 'unknown') return;
  localStorage.setItem('cookie_consent', value);
});