<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white pt-12 sm:pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl" v-html="title"></h2>
        <p class="mt-3 text-xl text-gray-500 sm:mt-4" v-html="subtitle"></p>
      </div>
    </div>
    <div class="mt-10 pb-12 bg-white sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2 bg-white" />
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-4xl mx-auto">
            <dl
              class="rounded-lg bg-white drop-shadow-[0_0_8px_rgba(0,0,0,0.25)] sm:grid sm:grid-cols-3"
            >
              <div
                class="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r"
              >
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Minutes</dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">{{ konstantStatsMinutes }}</dd>
              </div>
              <div
                class="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r"
              >
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Memory</dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">{{ konstantStatsMemory }}</dd>
              </div>
              <div
                class="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l"
              >
                <dt class="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Relationships</dt>
                <dd class="order-1 text-5xl font-extrabold text-indigo-600">{{ konstantStatsRelationships }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["konstantStatsMinutes", "konstantStatsMemory", "konstantStatsRelationships"],
  props: {
    title: String,
    subtitle: String
  }
}

</script>