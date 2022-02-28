<template>
    <!-- <span class="inline-flex rounded-md shadow"> -->
        <a
            :href="href"
            target="about:_blank"
            class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-app-primary bg-white hover:bg-gray-200"
        >{{ title }}</a>
    <!-- </span> -->
</template>

<script>
export default {
    props: {
        title: String,
        href: String
    }
}
</script>