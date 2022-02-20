<script setup>
import Hero from '@/components/Hero.vue'
import MainFeatures from '@/components/MainFeatures.vue'
import FeatureList from '@/components/FeatureList.vue'
import CTA from '@/components/CTA.vue'
import Footer from '@/components/Footer.vue'
import ComingSoonApps from '@/components/ComingSoonApps.vue'
import Stats from '@/components/Stats.vue'
</script>

<template>
    <Hero />
    <MainFeatures />
    <Stats title="What could Lyrcs save you per album?" subtitle="Assuming an album is written with a friend requiring rhyme searching and syllable counting. <a href='#/savings' class='underline'>Check out how we come up with the figures</a>." />
    <FeatureList />
    <ComingSoonApps />
    <CTA />
    <Footer />
</template>
