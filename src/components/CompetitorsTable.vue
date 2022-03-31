<template>
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
                                    v-for="app in apps"
                                    :key="app"
                                    scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    <div class="flex flex-row items-center gap-x-2">
                                        <img
                                            class="max-h-8"
                                            :src="app.image"
                                            :alt="app.name + ' App Icon'"
                                        />
                                        <div>{{ app.name }}</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(row, rowIdx) in rows"
                                :key="row"
                                :class="rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
                            >
                                <td
                                    v-if="typeof row.header !== 'undefined'"
                                    class="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900"
                                >{{ row.header }}</td>

                                <td
                                    v-if="typeof row.name !== 'undefined'"
                                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                                >- {{ row.name }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <!-- TODO: Handle screenreader -->
                                    <CheckIcon
                                        v-if="row.lyrcs"
                                        class="h-6 w-6 text-green-500 ml-1"
                                        aria-hidden="true"
                                    />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <!-- TODO: Handle screenreader -->
                                    <CheckIcon
                                        v-if="row.comp"
                                        class="h-6 w-6 text-green-500 ml-1"
                                        aria-hidden="true"
                                    />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <!-- TODO: Handle screenreader -->
                                    <CheckIcon
                                        v-if="row.block"
                                        class="h-6 w-6 text-green-500 ml-1"
                                        aria-hidden="true"
                                    />
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    <!-- TODO: Handle screenreader -->
                                    <CheckIcon
                                        v-if="row.songwriter"
                                        class="h-6 w-6 text-green-500 ml-1"
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
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'
import LogoLyrcs from '@/assets/logo.svg'
import LogoSongwriter from '@/assets/songwriter.webp'
import LogoSongwritersCompanion from '@/assets/songwriters-companion.webp'
import LogoBlock from '@/assets/block.png'

// TODO: potential: "Is Lyrcs the first app that assists in lyric writing? Certainly not, but is it the first that offers everything in the one app? You be the judge."
// Show screenshot of competitors, iframe?

const apps = [
    { name: "Lyrcs", image: LogoLyrcs },
    { name: "Songwriter's Companion", image: LogoSongwritersCompanion },
    { name: "Rhymer's Block", image: LogoBlock },
    { name: "Songwriter", image: LogoSongwriter },
]

const rows = [
    { header: 'Rhyme Search' },
    { name: 'Available', lyrcs: true, comp: true, block: true, songwriter: false },
    { name: 'Offline Results', lyrcs: true, comp: true, block: true, songwriter: false },
    { name: 'Insert in Editor', lyrcs: true, comp: false, block: true, songwriter: false },
    { name: 'Grouping by Syllables', lyrcs: true, comp: true, block: false, songwriter: false },
    { name: 'Grouping by Letters', lyrcs: true, comp: false, block: false, songwriter: false },
    { header: 'Rhyme Highlighting' },
    { name: 'Available', lyrcs: true, comp: false, block: true, songwriter: false },
    { name: 'Real-time', lyrcs: true, comp: false, block: true, songwriter: false },
    { header: 'Syllable Counting' },
    { name: 'Available', lyrcs: true, comp: false, block: false, songwriter: false },
    { name: 'Per Line', lyrcs: true, comp: false, block: false, songwriter: false },
    { name: 'Per Selection', lyrcs: true, comp: false, block: false, songwriter: false },
    { name: 'Override Syllable Count', lyrcs: true, comp: false, block: false, songwriter: false },
    { header: 'UI' },
    { name: 'System Appearance', lyrcs: true, comp: true, block: true, songwriter: false },
    { name: 'Override Appearance', lyrcs: true, comp: false, block: true, songwriter: false },
    { name: 'Font Adjustable', lyrcs: true, comp: true, block: true, songwriter: false },
    { name: 'Native macOS App', lyrcs: true, comp: true, block: false, songwriter: false },
    { name: 'Spell Check', lyrcs: true, comp: true, block: true, songwriter: true },
    { name: 'Plain Text Files', lyrcs: true, comp: true, block: true, songwriter: false },
    { header: 'App' },
    { name: 'Free', lyrcs: true, comp: false, block: false, songwriter: false },
]

export default {
    components: {
        CheckIcon
    },
    setup() {
        return {
            rows,
            apps
        }
    },
}
</script>


