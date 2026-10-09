<script setup>
const erikaTestimonials = [
  '/assets/testimonials/erika/erika-1.png',
  '/assets/testimonials/erika/erika-2.png',
  '/assets/testimonials/erika/erika-3.png'
]

const sandraTestimonials = [
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
  <section id="testimonials" class="py-20 border-t border-kala-gold/10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-16">
        <span class="text-xs font-mono uppercase tracking-[0.3em] text-kala-gold">Social Proof</span>
        <h2 class="font-serif text-3xl sm:text-4xl text-kala-sand mt-2">Testimoni Asli dari Threads</h2>
        <p class="text-kala-muted text-sm font-light mt-2">Bukti percakapan dan kepuasan klien KALA Creative langsung dari platform Threads.</p>
      </div>

      <!-- Erika Section -->
      <div class="mb-16">
        <h3 class="text-xs font-bold tracking-widest uppercase text-kala-goldlight mb-6 border-b border-kala-gold/20 pb-2">Client Showcase — Kak Erika</h3>
        <div class="grid sm:grid-cols-3 gap-6">
          <div v-for="(img, idx) in erikaTestimonials" :key="idx" class="kala-card p-2 rounded-xl overflow-hidden">
            <img :src="img" :alt="'Testimoni Kak Erika ' + (idx + 1)" class="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>

      <!-- Sandra Section -->
      <div>
        <h3 class="text-xs font-bold tracking-widest uppercase text-kala-goldlight mb-6 border-b border-kala-gold/20 pb-2">Client Showcase — Kak Sandra</h3>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(img, idx) in sandraTestimonials" :key="idx" class="kala-card p-2 rounded-xl overflow-hidden">
            <img :src="img" :alt="'Testimoni Kak Sandra ' + (idx + 1)" class="w-full h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
