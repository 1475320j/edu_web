import request from '@/utils/request'

export default {
  pageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/teacher/list/${page}/${limit}`,
      method: 'get',
      // params: 表单提交方式 或 url 字符串传参
      params: searchObj
    })
  }
}
