<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
        <div v-for="faq in faqs" :key="faq.question">
          <dt class="font-semibold text-gray-900">{{ faq.question }}</dt>
          <dd class="mt-3 text-gray-500" v-html="faq.answer"></dd>
        </div>
      </dl>
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