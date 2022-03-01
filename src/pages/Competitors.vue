<script setup>
import PageTitle from '../components/PageTitle.vue';
</script>

<template>
    <PageTitle title="Competitors"></PageTitle>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >Feature</th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <img
                                                class="max-h-8"
                                                src="@/assets/title.svg"
                                                alt="Lyrcs"
                                            />
                                        </th>
                                        <th
                                            scope="col"
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            <img
                                                class="max-h-8"
                                                src="@/assets/rhymezone.png"
                                                alt="Rhymezone"
                                            />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(person, personIdx) in people"
                                        :key="person"
                                        :class="personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                                    >
                                        <td
                                            v-if="typeof person.header !== 'undefined'"
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                        >{{ person.header }}</td>

                                        <td
                                            v-if="typeof person.name !== 'undefined'"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                        >- {{ person.name }}</td>
                                        <td
                                            v-if="typeof person.lyrcs !== 'undefined'"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            <!-- TODO: Handle screenreader -->
                                            <CheckIcon
                                                v-if="person.lyrcs"
                                                class="h-6 w-6 text-green-500"
                                                aria-hidden="true"
                                            />
                                        </td>
                                        <td
                                            v-if="typeof person.rhymezone !== 'undefined'"
                                            class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            <!-- TODO: Handle screenreader -->
                                            <CheckIcon
                                                v-if="person.rhymezone"
                                                class="h-6 w-6 text-green-500"
                                                aria-hidden="true"
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- TODO: table -->
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'

const people = [

    { header: 'Editor', lyrcs: true, rhymezone: false },
    { name: 'Insert Rhymes Directly', lyrcs: true, rhymezone: false },
    { header: 'Rhyme Search', lyrcs: true, rhymezone: true },
    { name: 'Offline Results', lyrcs: true, rhymezone: true },
    { name: 'Result Grouping', lyrcs: true, rhymezone: true },
    { header: 'Syllable Counting', lyrcs: true, rhymezone: false },
    { name: 'Per Line', lyrcs: true, rhymezone: false },
    { name: 'Per Selection', lyrcs: true, rhymezone: false },
    { name: 'Override Syllable Count', lyrcs: true, rhymezone: false },
    { header: 'UI', lyrcs: true, rhymezone: false },
    { name: 'Dark Mode', lyrcs: true, rhymezone: false },
    { name: 'Font Adjustable', lyrcs: true, rhymezone: false },
    { header: 'Native macOS', lyrcs: true, rhymezone: true },
    { name: 'Spelling and Grammer Checking', lyrcs: true, rhymezone: true },
    
]

export default {
    components: {
        CheckIcon,
    },
    setup() {
        return {
            people,
        }
    },
}
</script>


