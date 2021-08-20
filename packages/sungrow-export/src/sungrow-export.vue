<template>
  <div>
    <el-button type="primary" @click="exportFile" :loading="loading">{{text}}111</el-button>
    <SungrowFooter>111</SungrowFooter>
  </div>
</template>

<script>
  import SungrowFooter from 'sungrow-components/packages/sungrow-footer'
  export default {
    name: 'sungrow-export',
    components: {
      SungrowFooter
    },
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      text: {
        type: String,
        default: '导出'
      },
      type: {
        type: String,
        default: 'excel'
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
