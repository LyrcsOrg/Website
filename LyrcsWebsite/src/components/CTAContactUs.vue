<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="bg-white pt-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="rounded-lg bg-gradient-to-r from-app-primary to-app-secondary">
                <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                        <span class="block">Want to get in contact?</span>
                    </h2>
                    <p
                        class="mt-4 text-lg leading-6 text-white"
                    >We're a friendly bunch at Lyrcs so send us a message and we'll get back to you as soon as possible.</p>
                    <a
                        :href="link"
                        class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-app-primary bg-white hover:bg-gray-200 sm:w-auto"
                    >{{ cta }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const navigation = [
    { name: 'Support', href: '/support' },
    { name: 'Savings', href: '/savings' }
]

export default {
    inject: ["konstantEmail"],
    data() {
        return {
            link: `mailto:${this.konstantEmail}`,
            cta: `Email ${this.konstantEmail}`
        }
    },
}
</script>