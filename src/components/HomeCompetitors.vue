<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div class="max-w-3xl mx-auto text-center">
                <h2 class="text-3xl font-extrabold text-gray-900">{{ header.title }}</h2>
                <p class="mt-4 text-lg text-gray-500" v-html="header.subtitle"></p>
            </div>
            <CompetitorsTable class="mt-12 home-competitors drop-shadow-default rounded-2xl" />
        </div>
    </div>
</template>

<script>
import CompetitorsTable from './CompetitorsTable.vue'

export default {
    components: {
        CompetitorsTable
    },
    inject: [
        "konstantRouteCompetitors"
    ],
    data() {
        return {
            header: {
                title: "How do others compare?",
                subtitle: `You may want to <a href='#${this.konstantRouteCompetitors}' class='underline'>see for yourself</a>.`
            }
        }
    },
}
</script>