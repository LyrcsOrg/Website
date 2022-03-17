<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full bg-gradient-to-r from-app-primary to-app-secondary" aria-hidden="true">
      </div>

      <div class="relative pb-16 sm:pb-24">
        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span class="block" v-html="header.title"></span>
            </h1>
            <p class="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{{ header.subtitle}}</p>
          </div>
        </div>
      </div>

      <div class="relative">
        <div class="absolute inset-0 flex flex-col" aria-hidden="true">
          <div class="flex-1" />
          <div class="flex-1 w-full bg-gray-800" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <img class="relative rounded-lg" src="@/assets/hero.png" alt="App screenshot" />
        </div>
      </div>
    </div>
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 class="text-center text-gray-400 text-sm font-semibold uppercase tracking-wide">{{ header.footnote }}</h2>
        <div class="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5 text-gray-400">
          <figure class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center space-x-2">
            <img class="h-16" src="@/assets/daws/live.svg" alt="Ableton Live" />
            <figcaption>Ableton Live</figcaption>
          </figure>
          <figure class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center space-x-2">
            <img class="h-16" src="@/assets/daws/logic.svg" alt="Logic Pro" />
            <figcaption>Logic Pro</figcaption>
          </figure>
          <figure class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1 items-center space-x-2">
            <img class="h-16" src="@/assets/daws/tools.svg" alt="Pro Tools" />
            <figcaption>Pro Tools</figcaption>
          </figure>
          <figure class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1 items-center space-x-2">
            <img class="h-16" src="@/assets/daws/fl.svg" alt="FL Studio" />
            <figcaption>FL Studio</figcaption>
          </figure>
          <figure class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1 items-center space-x-2">
            <img class="h-16" src="@/assets/daws/garage.svg" alt="GarageBand" />
            <figcaption>GarageBand</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const header = {
  title: "The Best Kept Secret<br>of Every Song Writer",
  subtitle: "Lyrcs is the single tool that empowers you to do what you do best - tell stories through music. Made for songwriters, by songwriters.",
  cta: "Download",
  footnote: "Work side by side with all your favorite tools and more"
}

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
  },
  setup() {
    return {
      header
    }
  },
}
</script>