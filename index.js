function groupBy (rows, fieldName) {
  return rows.reduce((map, row) => {
    const key = row[fieldName] || 'undefined'
    if (!map[key]) {
      map[key] = []
    }
    map[key].push(row)
    return map
  }, {})
}

function categorise (rows, categoryMethod, categoryName) {
  return rows.map((row) => {
    return { ...row, [categoryName]: categoryMethod(row) }
  })
}

module.exports = {
  groupBy,
  categorise
}
