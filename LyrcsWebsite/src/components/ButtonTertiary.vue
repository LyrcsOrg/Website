<template>
    <a
        :href="href"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-app-primary bg-[#E8FCFC] hover:bg-[#D1E3E3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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