<template>
    <a
        :href="href"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-app-primary hover:bg-app-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >{{ title }}</a>
</template>

<script>
export default {
    props: {
        title: String,
        href: String
    }
}
</script>