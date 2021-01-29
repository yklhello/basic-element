
// eslint-disable-next-line import/no-unresolved
import config from './apiConfig.js'

const base = config.base
const inpatientEnc = config.inpatientEncounter
const personCis = config.personCis

// :查询床位卡筛选分组配置列表
export const QUERY_CONDITION = `${inpatientEnc}/api/v1/app_inpatient_encounter/query_condition/query/by_example`

export const ALLERGY_DELETE = `${personCis}/api/v1/person_cis/allergen_category/delete`
