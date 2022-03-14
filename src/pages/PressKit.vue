<template>
    <PageTitle title="Press Kit"></PageTitle>
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
                        <p class="text-base text-gray-500" v-html="faq.answer"></p>
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    inject: [
        "konstantRouteContact",
        "konstantEmail"
    ],
    components: {
        PageTitle
    },
    data() {
        return {
            faqs: [
                {
                    question: "App name",
                    answer:
                        "Lyrcs",
                },
                {
                    question: "Tagline",
                    answer:
                        "The Best Kept Secret of Every Song Writer",
                },
                {
                    question: "Description",
                    answer:
                        "Lyrcs is an application that assists in lyric writing by providing rhymes, syllable counting and more. Lyrcs is a native macOS app and works entirely offline.",
                },
                {
                    question: "System requirements",
                    answer:
                        "macOS 12.0.0",
                },
                {
                    question: "Contact information",
                    answer:
                        `Email <a href="mailto:${this.konstantEmail}" class='underline'>${this.konstantEmail}</a> or see the <a href="#${this.konstantRouteContact}" class='underline'>contact page</a>`,
                },
                {
                    question: "App Icon, Screenshots",
                    answer:
                        `Feel free to right click and save any of the images on the site. The logo is located at the top of the page.`
                }

            ]
        }
    },
}
</script>