<template>
    <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
        <span class="inline-flex rounded-md shadow">
            <a
                :href="this.konstantAppStoreURL"
                target="about:_blank"
                class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-app-primary bg-white hover:bg-gray-200"
            >{{ cta }}</a>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        title: String

    }
}
</script>