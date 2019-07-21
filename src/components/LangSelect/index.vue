<template>
  <div class="">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="langIcon"><svg-icon icon-class="lang" /></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="lang in langSelect"
          :key="lang.prop"
          :command="lang.prop"
          :disabled="lang.prop === language"
        >
          {{lang.label}}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import langSelect from '@/constance/langSelect'

export default {
  name: 'LangSelect',

  data () {
    return {
      langSelect
    }
  },

  computed: {
    language () {
      return this.$store.getters.language
    }
  },

  methods: {
    handleCommand (lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
    }
  }
}

</script>
<style lang='scss' scoped>
.langIcon {
  font-size: 18px;
  color: #fff;
}
</style>
