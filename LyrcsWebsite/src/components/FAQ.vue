<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="max-w-2xl lg:mx-auto lg:text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <p class="mt-4 text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
      </div>
      <div class="mt-20">
        <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          <div v-for="faq in faqs" :key="faq.question">
            <dt class="font-semibold text-gray-900">
              {{ faq.question }}
            </dt>
            <dd class="mt-3 text-gray-500" v-html="faq.answer">
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
const faqs = [
  {
    question: "What's the catch, how is this free?",
    answer:
      "Lyrcs doesn't call out to any APIs or require much time to maintain. Until this becomes a full time job you can expect Lyrcs to remain free ❤️.",
  },
  {
    question: "Can you implement X feature?",
    answer:
      "Send an email to <a href='mailto:hi@lyrcs.app' class='underline'>hi@lyrcs.app</a> and we'll see what we can do.",
  },
  // More questions...
]

export default {
  setup() {
    return {
      faqs,
    }
  },
}
</script>