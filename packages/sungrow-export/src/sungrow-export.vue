<template>
  <el-button type="primary" @click="exportFile" :loading="loading">{{text}}</el-button>
</template>

<script>
export default {
  name: 'sungrow-export',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: '导出'
    },
    title: {
      type: String,
      default: '导出文件'
    },
    options: {
      type: Object,
      default: () => {
        return {
          labelList: [],
          valueList: []
        }
      }
    }
  },
  data() {
    return {
      exportLoading: false
    }
  },
  methods: {
    exportFile() {
      require.ensure([], async() => {
        const { export_json_to_excel } = require('../export/Export2Excel')
        const labelList = this.options.labelList
        const valueList = this.options.valueList
        export_json_to_excel(labelList, valueList, this.title)
      })
    }
  }
}
</script>
