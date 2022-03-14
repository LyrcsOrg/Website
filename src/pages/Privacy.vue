<script setup>
import PageTitle from '@/components/PageTitle.vue';
</script>

<template>
    <PageTitle title="Privacy Policy"></PageTitle>
    <div class="relative pb-16 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                <p>The Lyrcs app itself does not collect any personally identifiable data.</p>
                <p>It does collect usage and crash data to improve features and address bugs using SDKs provided by Google. The privacy policy of these are located here:</p>
                <ul>
                    <li>
                        <a
                            target="about:_blank"
                            href="https://firebase.google.com/policies/analytics"
                        >Google Analytics for Firebase</a>
                    </li>
                    <li>
                        <a
                            target="about:_blank"
                            href="https://firebase.google.com/support/privacy/"
                        >Firebase Crashlytics</a>
                    </li>
                </ul>
                <p>
                    If you have any question, feel free to <router-link :to="konstantRouteContact">contact us</router-link>.
                </p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    inject: [
        "konstantRouteContact"
    ]
}
</script>