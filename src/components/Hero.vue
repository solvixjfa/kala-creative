<script setup>
const threadsUrl = "https://www.threads.com/@kalactives"
</script>

<template>
  <section class="relative py-24 sm:py-32 px-6 text-center max-w-4xl mx-auto">
    <!-- Social Proof Badge -->
    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kala-gold/10 border border-kala-gold/30 text-kala-goldlight text-xs font-medium tracking-wide mb-8">
      <span class="w-2 h-2 rounded-full bg-kala-gold animate-pulse"></span>
      10+ Klien Terlayani dalam 10 Hari Pertama di Threads
    </div>

    <!-- Headline -->
    <h1 class="font-serif text-4xl sm:text-6xl text-kala-sand font-normal leading-tight mb-6">
      Mewujudkan Visual Impian <br />
      <span class="italic font-serif text-kala-gold">2D & 3D Design</span> & Stage Concept
    </h1>

    <!-- Subheadline -->
    <p class="text-kala-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      Fokus pada pembuatan moodboard wedding eksklusif, desain dekorasi pernikahan, dan backdrop panggung corporate profesional dengan presisi estetika tinggi.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a :href="threadsUrl" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-kala-gold text-kala-dark rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-kala-goldlight transition-all shadow-lg">
        Konsultasi Project di Threads
      </a>
      <a href="#testimonials" class="w-full sm:w-auto px-8 py-4 border border-kala-sand/20 text-kala-sand rounded-full font-semibold text-xs tracking-widest uppercase hover:bg-kala-sand/5 transition-all">
        Lihat Testimoni Klien
      </a>
    </div>
  </section>
</template>
