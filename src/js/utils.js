!Date.prototype.format && Object.assign(Date.prototype, {
  format (fmt = 'yyyy-MM-dd HH:mm:ss') {
    let d = {
      'y+': this.getFullYear(),
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'H+': this.getHours(),
      'h+': this.getHours() % 12,
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      't+': this.getHours() > 11 ? 'PM' : 'AM'
    }

    for (let r in d) {
      switch (r) {
        case 'y+':
          (new RegExp(`(${r})`, 'gi').test(fmt)) && (fmt = fmt.replace(RegExp.$1, d[r].toString().substring(4 - RegExp.$1.length)))
          break
        case 't+':
          (new RegExp(`(${r})`, 'gi').test(fmt)) && (fmt = fmt.replace(RegExp.$1, d[r].toString().substring(0, RegExp.$1.length)))
          break
        default:
          (new RegExp(`(${r})`, 'g').test(fmt)) && (fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? d[r] : d[r].toString().padStart(2, '0')))
          break
      }
    }
    return fmt
  }
})
