<script setup>
import { store } from '../store.js'

const erikaDesigns = [
  '/assets/testimonials/erika/erika-1.png',
  '/assets/testimonials/erika/erika-2.png',
  '/assets/testimonials/erika/erika-3.png'
]

const sandraDesigns = [
  '/assets/testimonials/sandra/sandra-1.png',
  '/assets/testimonials/sandra/sandra-2.png',
  '/assets/testimonials/sandra/sandra-3.png',
  '/assets/testimonials/sandra/sandra-4.png',
  '/assets/testimonials/sandra/sandra-5.png',
  '/assets/testimonials/sandra/sandra-6.png',
  '/assets/testimonials/sandra/sandra-7.png'
]
</script>

<template>
  <section id="portfolio" class="py-20 border-t border-kala-gold/10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-[0.3em] text-kala-gold">
          {{ store.lang === 'en' ? 'Design Showcase' : 'Karya Visual' }}
        </span>
        <h2 class="font-serif text-3xl sm:text-4xl text-kala-sand mt-2">
          {{ store.lang === 'en' ? 'Featured 3D Renders & Stage Concepts' : 'Hasil Karya Desain 3D & Konsep Stage' }}
        </h2>
        <p class="text-kala-muted text-sm font-light mt-2 max-w-xl mx-auto">
          {{ store.lang === 'en' 
            ? 'A collection of 3D moodboard designs, wedding backdrops, and stage concepts created for our Threads clients.' 
            : 'Koleksi hasil karya desain 3D moodboard, dekorasi pelaminan, dan konsep panggung yang kami rancang untuk klien Threads.' }}
        </p>
      </div>

      <!-- Erika Section -->
      <div class="mb-16">
        <h3 class="text-xs font-bold font-mono tracking-widest uppercase text-kala-goldlight mb-6 border-b border-kala-gold/20 pb-2">
          {{ store.lang === 'en' ? '3D Stage & Backdrop Concepts — Erika Project' : 'Konsep Desain 3D & Stage — Project Erika' }}
        </h3>
        <div class="grid sm:grid-cols-3 gap-6">
          <div v-for="(img, idx) in erikaDesigns" :key="idx" class="kala-card p-2 rounded-xl overflow-hidden bg-black/20">
            <img 
              :src="img" 
              :alt="'Visual Desain 3D Erika ' + (idx + 1)" 
              loading="lazy" 
              decoding="async"
              class="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>

      <!-- Sandra Section -->
      <div>
        <h3 class="text-xs font-bold font-mono tracking-widest uppercase text-kala-goldlight mb-6 border-b border-kala-gold/20 pb-2">
          {{ store.lang === 'en' ? '3D Wedding Moodboard & Layout — Sandra Project' : 'Konsep Moodboard 3D Wedding — Project Sandra' }}
        </h3>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(img, idx) in sandraDesigns" :key="idx" class="kala-card p-2 rounded-xl overflow-hidden bg-black/20">
            <img 
              :src="img" 
              :alt="'Visual Desain 3D Sandra ' + (idx + 1)" 
              loading="lazy" 
              decoding="async"
              class="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
