<template>
  <div>
    <button type="button" @click="changeLocale('en')">English</button> | 
    <button type="button" @click="changeLocale('ja')">日本語</button>
  </div>
</template>

<script>
export default {
    name: 'LocalChanger',
    methods: {
        changeLocale (locale) {
            // this.$i18nのインスタンスのlocaleプロパティに言語を指定すると、その言語に切り替わる。
            this.$i18n.locale = locale
        }
    }
}
</script>
