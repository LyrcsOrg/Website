<script setup>
import FAQ from '@/components/FAQ.vue'
import KeyboardShortcuts from '../components/KeyboardShortcuts.vue'
import PageTitle from '../components/PageTitle.vue';
import SectionTitle from '../components/SectionTitle.vue';
import CTAContactUs from '../components/CTAContactUs.vue';
</script>

<template>
    <PageTitle title="Support"></PageTitle>
    <SectionTitle
        title="Frequently Asked Questions"
        subtitle="See if any of these answer what's on your mind."
    ></SectionTitle>
    <FAQ />
    <SectionTitle title="Keyboard Shortcuts" subtitle="Try these to speed up your workflow."></SectionTitle>
    <KeyboardShortcuts />
    <CTAContactUs />
</template>
