<script setup>
const threadsUrl = "https://www.threads.com/@kalactives"
</script>

<template>
  <footer class="py-16 border-t border-kala-gold/10 bg-kala-card/50 text-center">
    <div class="max-w-4xl mx-auto px-6">
      <img src="/assets/logo/logo-icon.png" alt="KALA Logo" class="h-16 w-16 rounded-full mx-auto mb-6 border border-kala-gold/30 object-cover" />
      <h2 class="font-serif text-2xl sm:text-3xl text-kala-sand mb-4">Siap Mewujudkan Konsep Acara Anda?</h2>
      <p class="text-kala-muted text-sm max-w-md mx-auto mb-8 font-light">
        Hubungi kami secara langsung melalui Threads untuk diskusi konsep, estimasi waktu, dan penawaran terbaik.
      </p>
      
      <a :href="threadsUrl" target="_blank" class="inline-block px-8 py-4 bg-kala-gold text-kala-dark rounded-full font-bold text-xs tracking-widest uppercase hover:bg-kala-goldlight transition-all shadow-lg mb-12">
        Direct Message via Threads (@kalactives)
      </a>

      <div class="border-t border-kala-gold/10 pt-8 text-xs text-kala-muted font-light">
        © 2026 KALA Creative. All rights reserved.
      </div>
    </div>
  </footer>
</template>
