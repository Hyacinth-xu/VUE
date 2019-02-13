// 组件公共过滤器

const vFilters = {
  // 时间过滤器
  timeFilter: (val) => {
    return val ? val.toString().split(' ')[0] : '--'
  },
  // 列表排名
  indexFilter (val) {
    val = val * 1 + 1
    return val > 9 ? val : '0' + val
  }
}

export default vFilters
