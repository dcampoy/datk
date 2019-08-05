const datk = require('./index.js')

const rows = [
  { id: 2, name: 'John', 'surname': 'Doe', age: 31 },
  { id: 4, name: 'John', 'surname': 'Martin', age: 32 },
  { id: 5, name: 'Jane', 'surname': 'Doe', age: 24 },
  { id: 9, name: 'Robert', 'surname': 'Cappa', age: 50 }
]

describe('groupBy operation', () => {
  it('given an array of objects, returns the objects grouped by a given fieldname', () => {
    const expected = {
      'John': [
        { id: 2, name: 'John', 'surname': 'Doe', age: 31 },
        { id: 4, name: 'John', 'surname': 'Martin', age: 32 }
      ],
      'Jane': [
        { id: 5, name: 'Jane', 'surname': 'Doe', age: 24 }
      ],
      'Robert': [
        { id: 9, name: 'Robert', 'surname': 'Cappa', age: 50 }
      ]
    }

    expect(datk.groupBy(rows, 'name')).toEqual(expected)
  })

  it('assumed the string "undefined" for unexisting field ', () => {
    const expected = {
      'undefined': [
        { id: 2, name: 'John', 'surname': 'Doe', age: 31 },
        { id: 4, name: 'John', 'surname': 'Martin', age: 32 },
        { id: 5, name: 'Jane', 'surname': 'Doe', age: 24 },
        { id: 9, name: 'Robert', 'surname': 'Cappa', age: 50 }
      ]
    }

    expect(datk.groupBy(rows, 'foo')).toEqual(expected)
  })
})

describe('categorise', () => {
  it('given an array of objects, add an attribute with the category', () => {
    const expected = [
      { id: 2, name: 'John', 'surname': 'Doe', age: 31, category: 'over 30' },
      { id: 4, name: 'John', 'surname': 'Martin', age: 32, category: 'over 30' },
      { id: 5, name: 'Jane', 'surname': 'Doe', age: 24, category: 'under 30' },
      { id: 9, name: 'Robert', 'surname': 'Cappa', age: 50, category: 'over 30' }
    ]

    function categoryMethod (row) {
      const age = row.age
      if (age < 30) return 'under 30'
      if (age >= 30) return 'over 30'
      return 'undefined'
    }

    expect(datk.categorise(rows, categoryMethod, 'category')).toEqual(expected)
  })
})

