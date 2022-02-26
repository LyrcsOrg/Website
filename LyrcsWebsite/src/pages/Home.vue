<script setup>
import Hero from '@/components/Hero.vue'
import MainFeatures from '@/components/MainFeatures.vue'
import FeatureList from '@/components/FeatureList.vue'
import CTA from '@/components/CTA.vue'
import Footer from '@/components/Footer.vue'
import ComingSoonApps from '@/components/ComingSoonApps.vue'
import Stats from '@/components/Stats.vue'
import Testimonial from '../components/Testimonial.vue'
</script>

<template>
    <Hero />
    <MainFeatures />
    <!-- <Testimonial /> -->
    <Stats title="What could Lyrcs save you per album?" subtitle="<a href='#/savings' class='underline'>Check out how we came up with the figures</a>." />
    <FeatureList />
    <ComingSoonApps />
    <CTA />
</template>
