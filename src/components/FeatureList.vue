<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900">{{ header.title }}</h2>
        <p class="mt-4 text-lg text-gray-500">{{ header.subtitle }}</p>
      </div>
      <dl
        class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8"
      >
        <div v-for="feature in features" :key="feature.name" class="relative">
          <dt>
            <CheckIcon class="absolute h-6 w-6 text-green-500" aria-hidden="true" />
            <p class="ml-9 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 ml-9 text-base text-gray-500" v-html="feature.description"></dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from '@heroicons/vue/outline'

const header = {
  title: "If That Wasn't Enough",
  subtitle: "Here are a few more things we think you'll love."
}

export default {
  inject: [
    "konstantRouteKeyboardShortcuts"
  ],
  components: {
    CheckIcon,
  },
  data() {
    return {
      header,
      features: [
        {
          name: 'Keyboard Shortcuts',
          description: `View them <a href='#${this.konstantRouteKeyboardShortcuts}' class='underline'>here</a>.`,
        },
        {
          name: 'Ad-Free',
          description: "You won't find a single one.",
        },
        {
          name: 'Plain Text Files',
          description: 'No sneaky proprietary files to lock you in.',
        },
        {
          name: 'Constant Updates',
          description: 'Lyrcs is always receiving new features, enhancements or fixes.',
        },
        {
          name: 'Work Offline',
          description: "No need to be connected to the internet to use.",
        },
        {
          name: 'Appearance Override',
          description: "Choose between dark or light mode, or match your system.",
        },
        {
          name: 'Distractionless Options',
          description: 'When you want to really focus, hide the syllable and rhyme panels.',
        },
        {
          name: 'Font Choices',
          description: "Prefer to write in Times New Roman? Lyrcs won't hold you back.",
        },
      ]
    }
  },
}
</script>