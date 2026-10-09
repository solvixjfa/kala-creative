<script setup>
import { store } from '../store.js'
const threadsUrl = "https://www.threads.com/@kalactives"
</script>

<template>
  <section class="relative py-20 sm:py-28 px-6 text-center max-w-4xl mx-auto">
    <!-- Social Proof Badge -->
    <div class="inline-block px-5 py-2 rounded-full bg-kala-gold/10 border border-kala-gold/25 text-kala-goldlight text-xs font-mono tracking-wider uppercase mb-8">
      {{ store.lang === 'en' ? '10+ Clients Handled in First 10 Days on Threads' : '10+ Klien Terlayani dalam 10 Hari Pertama di Threads' }}
    </div>

    <!-- Headline -->
    <h1 class="font-serif text-4xl sm:text-6xl text-kala-sand font-normal leading-tight mb-6">
      <template v-if="store.lang === 'en'">
        Crafting Visual Concepts <br />
        <span class="italic font-serif text-kala-gold">2D & 3D Design</span> & Stage Art
      </template>
      <template v-else>
        Mewujudkan Konsep Visual <br />
        <span class="italic font-serif text-kala-gold">Desain 2D & 3D</span> & Seni Panggung
      </template>
    </h1>

    <!-- Extended Copywriting -->
    <p v-if="store.lang === 'en'" class="text-kala-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      KALA Creative helps you visualize wedding decorations and corporate stages with high precision before execution. We turn ideas into structured 2D moodboards and realistic 3D renders for seamless vendor coordination.
    </p>
    <p v-else class="text-kala-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      KALA Creative membantu Anda memvisualisasikan ide dekorasi pernikahan dan panggung corporate secara presisi sebelum eksekusi. Kami mengubah imajinasi konsep menjadi moodboard 2D dan render 3D realistis yang mempermudah koordinasi dengan tim vendor.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a :href="threadsUrl" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-kala-gold text-kala-dark rounded-full font-bold text-xs tracking-widest uppercase hover:bg-kala-goldlight transition-all shadow-lg">
        {{ store.lang === 'en' ? 'Consult Project on Threads' : 'Konsultasi Project di Threads' }}
      </a>
      <a href="#portfolio" class="w-full sm:w-auto px-8 py-4 border border-kala-sand/20 text-kala-sand rounded-full font-bold text-xs tracking-widest uppercase hover:bg-kala-sand/5 transition-all">
        {{ store.lang === 'en' ? 'View Design Portfolio' : 'Lihat Portofolio Desain' }}
      </a>
    </div>
  </section>
</template>
