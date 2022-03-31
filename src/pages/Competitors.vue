<template>
    <PageTitle title="Competitors"></PageTitle>

    <div class="bg-white">
        <div class="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:pb-24 lg:px-8">
            <div class="relative pb-16">
                <p
                    class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500"
                >How does Lyrcs stack up against the other apps out there? Take a look at the following table to see where Lyrcs shines.</p>
            </div>
            <CompetitorsTable />
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'
import CompetitorsTable from '../components/CompetitorsTable.vue'

// TODO: potential: "Is Lyrcs the first app that assists in lyric writing? Certainly not, but is it the first that offers everything in the one app? You be the judge."
// Show screenshot of competitors, iframe?

export default {
    components: {
        PageTitle,
        CompetitorsTable
    }
}
</script>


