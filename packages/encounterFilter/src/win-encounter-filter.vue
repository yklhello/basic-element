<template>
    <el-popover
            :visible-arrow="false"
            placement="bottom-end"
            width="800"
            v-model="showQueryPopover"
            popper-class="query-setting-popover"
            trigger="click">
        <query-setting
                @updateList="querySearchCondition"
                @selfQuery="querySearchPlan"
                @closeSelf="showQueryPopover=false"
        />
        <div :class="{'search-confition-btn': true, 'is-active_sort': showQueryPopover}" slot="reference">
            <i class="filter-img win-icon-filter"></i>
            <span @click.stop="showQueryPopover=!showQueryPopover">筛选</span>
        </div>
    </el-popover>
</template>

<script>
import querySetting from './querySetting'

export default {
	name: 'win-encounter-filter',
	components: { querySetting },
	props: {

	}
}
</script>
