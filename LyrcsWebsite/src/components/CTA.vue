<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="bg-gradient-to-r from-app-primary to-app-secondary rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
      >
        <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
          <div class="lg:self-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              <span class="block">Like what you see?</span>
              <span class="block">Download Lyrcs today!</span>
            </h2>
            <p
              class="mt-4 text-lg leading-6 text-gray-100"
            >If you're not 100% satisfied, we don't offer refunds because Lyrcs is free. What have you got to lose? Certainly not money.</p>
            <a
              :href="this.konstantAppStoreURL"
              target="about:_blank"
              class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-app-primary hover:bg-gray-200"
            >Download</a>
          </div>
        </div>
        <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
          <img
            class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
            src="@/assets/hero.png"
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["konstantAppStoreURL"]
}
</script>