<script setup>
import { ref } from 'vue'

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
        <a href="#about" class="hover:text-kala-gold transition-colors">Tentang Kami</a>
        <a href="#services" class="hover:text-kala-gold transition-colors">Layanan</a>
        <a href="#testimonials" class="hover:text-kala-gold transition-colors">Testimoni Threads</a>
      </nav>

      <a :href="threadsUrl" target="_blank" class="hidden md:inline-flex px-6 py-2.5 rounded-full border border-kala-gold text-kala-gold hover:bg-kala-gold hover:text-kala-dark transition-all text-xs font-semibold tracking-wider uppercase">
        Consult via Threads
      </a>

      <!-- Mobile Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-kala-sand p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="isMenuOpen" class="md:hidden bg-kala-card border-b border-kala-gold/20 p-6 space-y-4">
      <a href="#about" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">Tentang Kami</a>
      <a href="#services" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">Layanan</a>
      <a href="#testimonials" @click="isMenuOpen = false" class="block text-sm tracking-wider uppercase text-kala-sand">Testimoni Threads</a>
      <a :href="threadsUrl" target="_blank" class="block text-center w-full py-3 bg-kala-gold text-kala-dark font-bold text-xs uppercase tracking-widest rounded-full">
        Consult via Threads
      </a>
    </div>
  </header>
</template>
