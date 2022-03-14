<template>
    <PageTitle title="Contact Us"></PageTitle>
    <div class="bg-white px-4 overflow-hidden sm:px-6">
        <div class="relative max-w-xl mx-auto">
            <div class="text-center mb-10">
                <p
                    class="mt-4 text-lg leading-6 text-gray-500"
                >Found a bug? Got an idea for a feature? Discovered the meaning of life? Feel free to send us a message about anything.</p>
            </div>
            <component :is="'script'">
                hbspt.forms.create({
                region: "eu1",
                portalId: "25600389",
                formId: "e5b99bd2-e563-4c7a-8c10-ea1105f864ca"
                });
            </component>
        </div>
    </div>
</template>

<script>
import PageTitle from '../components/PageTitle.vue';

export default {
    components: {
        PageTitle
    }
}

</script>