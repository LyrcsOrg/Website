<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="relative overflow-hidden">
      <div class="absolute inset-y-0 h-full w-full bg-gradient-to-r from-app-primary to-app-secondary" aria-hidden="true">
      </div>

      <div class="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
            <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">Lyrcs</span>
                    <img class="h-8 w-auto sm:h-10" src="@/assets/logo.svg" alt="Logo" />
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <PopoverButton class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:flex md:space-x-10">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
              </div>
              <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span class="inline-flex rounded-md shadow">
                  <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-app-primary bg-white hover:bg-gray-200">{{ header.cta }}</a>
                </span>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
            <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="@/assets/logo.svg" alt="Logo" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"> {{ header.cta }} </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <div class="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div class="text-center">
            <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span class="block">{{ header.title }}</span>
              <span class="block text-white">{{ header.titleImpact}}</span>
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
          <img class="relative rounded-lg shadow-lg" src="@/assets/hero.png" alt="App screenshot" />
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

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const header = {
  title: "Song writing has",
  titleImpact: "never been easier.",
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
      navigation,
      header
    }
  },
}
</script>