import request from '@/utils/request'

export default {
  pageList(page, limit, searchObj) {
    return request({
      url: `/admin/edu/teacher/list/${page}/${limit}`,
      method: 'get',
      // params: 表单提交方式 或 url 字符串传参
      params: searchObj
    })
  },
  batchRemove(idList) {
    console.log('batchRemove', idList)
    return request({
      url: '/admin/edu/teacher/batch-remove',
      method: 'delete',
      data: idList
    })
  },
  deleteTeacherById(id) {
    return request({
      url: `/admin/edu/teacher/remove/${id}`,
      method: 'delete'
    })
  },
  save(teacher) {
    return request({
      url: '/admin/edu/teacher/save',
      method: 'post',
      // data: Json格式提交数据
      data: teacher
    })
  },
  getById(id) {
    return request({
      url: `/admin/edu/teacher/get/${id}`,
      method: 'get'
    })
  },
  updateById(teacher) {
    return request({
      url: '/admin/edu/teacher/update',
      method: 'put',
      // data: Json格式提交数据
      data: teacher
    })
  },
}
