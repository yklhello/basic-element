<template>
    <el-dialog
            width="400px"
            :modal-append-to-body="false"
            :close-on-click-modal="false"
            :modal="true"
            :visible.sync="queryDialog"
            title="存为常用查询"
            custom-class="query-dialog-class">
        <div class="query-dialog-content" @click.stop>
            <span class="_title">方案名称</span>
            <el-input v-model="conditionGroupName" placeholder="请输入方案名称"></el-input>
        </div>
        <span slot="footer" class="dialog-footer">
			<el-button type="default" @click="handleClose">取消</el-button>
			<el-button type="primary" :loading="btnLoading" @click="handleSave">保 存</el-button>
		</span>
    </el-dialog>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('list')

export default {
	props: {
		queryDialog: {
			type: Boolean,
			default: false
		},
		saveCondition: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	data () {
		return {
			conditionGroupName: '',
			btnLoading: false
		}
	},
	methods: {
		...mapActions(['requestAddnewQuery']),
		async handleSave () {
			if (this.conditionGroupName === '') return
			let seqNo = this.$parent.$parent.$parent.visiblePlan.length ? (this.$parent.$parent.$parent.visiblePlan[this.$parent.$parent.$parent.visiblePlan.length - 1].seqNo + 1) : 1
			this.btnLoading = true
			let queryCondition = JSON.parse(JSON.stringify(this.saveCondition))
			let tagIds = queryCondition.tagIds
			delete queryCondition.tagIds
			delete queryCondition.queryIds
			const params = {
				appSystemCode: this.isNurse ? '951678' : '951677',
				defaultFlag: '98176',
				visibleFlag: '98175',
				tagIds,
				queryCondition: JSON.stringify(queryCondition),
				queryName: this.conditionGroupName,
				type: 3,
				seqNo
			}

			const data = await this.requestAddnewQuery(params)

			if (data && data.success) {
				this.$message.success('保存成功')
				this.handleClose()
				this.conditionGroupName = ''
				this.$emit('updateList')
			} else {
				mywinning.showMsg(data.errorDetail.message || '网络错误')
			}

			this.btnLoading = false
		},
		handleClose () {
			this.$emit('closeDialog')
		}
	}
}
</script>

