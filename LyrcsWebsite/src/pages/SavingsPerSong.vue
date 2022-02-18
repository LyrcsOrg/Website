<script setup>
import FAQ from '@/components/FAQ.vue'
import KeyboardShortcuts from '@/components/KeyboardShortcuts.vue'
import PageTitle from '@/components/PageTitle.vue';
import Footer from '@/components/Footer.vue';
import SectionTitle from '../components/SectionTitle.vue';
</script>

<template>
    <PageTitle title="Savings Per Song"></PageTitle>
    <SectionTitle title="Frequently Asked Questions" subtitle="See if any of these answer what's on your mind."></SectionTitle>
    <FAQ></FAQ>
    <SectionTitle title="Keyboard Shortcuts" subtitle="Try these to speed up your workflow."></SectionTitle>
    <KeyboardShortcuts></KeyboardShortcuts>
    <Footer></Footer>
</template>
