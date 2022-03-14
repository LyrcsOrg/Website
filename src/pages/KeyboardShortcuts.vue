<template>
    <PageTitle title="Keyboard Shortcuts"></PageTitle>
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 divide-y divide-gray-200 sm:px-6 lg:px-8">
            <dl class="divide-y divide-gray-200">
                <div
                    v-for="faq in faqs"
                    :key="faq.question"
                    class="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
                >
                    <dt class="text-base font-medium text-gray-900 md:col-span-5">{{ faq.question }}</dt>
                    <dd class="mt-2 md:mt-0 md:col-span-7">
                        <p class="text-base text-gray-500">{{ faq.answer }}</p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

const faqs = [
    {
        question: "Toggle Rhyme Panel",
        answer:
            "⌘ R",
    },
    // {
    //     question: "Toggle Syllables",
    //     answer:
    //         "⌘ E",
    // },
    {
        question: "Font Increase",
        answer:
            "⌘ +",
    },
    {
        question: "Font Decrease",
        answer:
            "⌘ -",
    },
    {
        question: "Font Reset",
        answer:
            "⌘ 0",
    },
    {
        question: "New Tab",
        answer:
            "⌘ T",
    },
    // More questions...
]

export default {
    components: {
        PageTitle
    },
    setup() {
        return {
            faqs,
        }
    },
}
</script>