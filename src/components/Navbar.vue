<script setup>
import { ref } from 'vue'
import { store } from '../store.js'

const isMenuOpen = ref(false)
const threadsUrl = "https://www.threads.com/@kalactives"
</script>

<template>
  <header class="sticky top-0 z-50 bg-kala-dark/90 backdrop-blur-md border-b border-kala-gold/10">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-3">
        <img src="/assets/logo/logo-icon.png" alt="KALA Logo" class="h-10 w-10 rounded-full object-cover border border-kala-gold/30" />
        <span class="font-serif text-xl tracking-wider text-kala-sand font-bold">KALA <span class="text-kala-gold font-sans text-xs tracking-widest uppercase">Creative</span></span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-kala-muted">
        <a href="#about" class="hover:text-kala-gold transition-colors">{{ store.lang === 'en' ? 'About Us' : 'Tentang Kami' }}</a>
        <a href="#services" class="hover:text-kala-gold transition-colors">{{ store.lang === 'en' ? 'Services' : 'Layanan' }}</a>
        <a href="#portfolio" class="hover:text-kala-gold transition-colors">{{ store.lang === 'en' ? 'Design Portfolio' : 'Portofolio Desain' }}</a>
      </nav>

      <div class="hidden md:flex items-center gap-4">
        <button @click="store.lang = store.lang === 'en' ? 'id' : 'en'" class="px-3 py-1 rounded-full border border-kala-gold/30 text-xs font-bold text-kala-sand hover:border-kala-gold transition-all">
          {{ store.lang === 'en' ? 'ID' : 'EN' }}
        </button>
        <a :href="threadsUrl" target="_blank" class="px-6 py-2.5 rounded-full border border-kala-gold text-kala-gold hover:bg-kala-gold hover:text-kala-dark transition-all text-xs font-semibold tracking-wider uppercase">
          {{ store.lang === 'en' ? 'Consult via Threads' : 'Konsultasi via Threads' }}
        </a>
      </div>

      <!-- Mobile Button & Lang -->
      <div class="flex items-center gap-3 md:hidden">
        <button @click="store.lang = store.lang === 'en' ? 'id' : 'en'" class="px-2.5 py-1 rounded border border-kala-gold/30 text-xs font-bold text-kala-sand">
          {{ store.lang === 'en' ? 'ID' : 'EN' }}
        </button>
        <button @click="isMenuOpen = !isMenuOpen" class="text-kala-sand p-2">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isMenuOpen" class="md:hidden bg-kala-card border-b border-kala-gold/20 p-6 space-y-4">
      <a href="#about" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">{{ store.lang === 'en' ? 'About Us' : 'Tentang Kami' }}</a>
      <a href="#services" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">{{ store.lang === 'en' ? 'Services' : 'Layanan' }}</a>
      <a href="#portfolio" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">{{ store.lang === 'en' ? 'Design Portfolio' : 'Portofolio Desain' }}</a>
      <a :href="threadsUrl" target="_blank" class="block text-center w-full py-3 bg-kala-gold text-kala-dark font-bold text-xs uppercase tracking-widest rounded-full">
        {{ store.lang === 'en' ? 'Consult via Threads' : 'Konsultasi via Threads' }}
      </a>
    </div>
  </header>
</template>
