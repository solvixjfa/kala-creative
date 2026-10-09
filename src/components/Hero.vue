<script setup>
const threadsUrl = "https://www.threads.com/@kalactives"
</script>

<template>
  <section class="relative py-20 sm:py-28 px-6 text-center max-w-4xl mx-auto">
    <!-- Social Proof Badge (Clean without bullet) -->
    <div class="inline-block px-5 py-2 rounded-full bg-kala-gold/10 border border-kala-gold/25 text-kala-goldlight text-xs font-mono tracking-wider uppercase mb-8">
      10+ Klien Terlayani dalam 10 Hari Pertama di Threads
    </div>

    <!-- Headline -->
    <h1 class="font-serif text-4xl sm:text-6xl text-kala-sand font-normal leading-tight mb-6">
      Mewujudkan Konsep Acara <br />
      <span class="italic font-serif text-kala-gold">2D & 3D Visual Design</span> & Stage Art
    </h1>

    <!-- Extended Trust Copywriting -->
    <p class="text-kala-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
      KALA Creative membantu Anda memvisualisasikan ide dekorasi pernikahan dan panggung corporate secara presisi sebelum eksekusi. Kami mengubah imajinasi konsep menjadi moodboard 2D dan render 3D realistis yang mempermudah koordinasi dengan tim vendor.
    </p>

    <!-- CTAs -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a :href="threadsUrl" target="_blank" class="w-full sm:w-auto px-8 py-4 bg-kala-gold text-kala-dark rounded-full font-bold text-xs tracking-widest uppercase hover:bg-kala-goldlight transition-all shadow-lg">
        Konsultasi Project di Threads
      </a>
      <a href="#testimonials" class="w-full sm:w-auto px-8 py-4 border border-kala-sand/20 text-kala-sand rounded-full font-bold text-xs tracking-widest uppercase hover:bg-kala-sand/5 transition-all">
        Lihat Testimoni Klien
      </a>
    </div>
  </section>
</template>
