# DATK

datk is a lightweight toolkit for working with data array.

Example of use:
```js
import datk from 'datk'

const people = [
  { name: 'John Doe', age: 31 },
  { name: 'John Martin', age: 32 },
  { name: 'Jane Doe', age: 24 },
  { name: 'Robert Cappa', age: 50 }
]

function ageGroupCategoriser (person) {
  if (person.age < 30) return 'under 30'
  if (person.age < 30) return 'over 30'
  return 'unknown'
}

const peopleWithAgeGroup = datk.categorise(people, ageGroupCategoriser, 'ageGroup')

// [
//   { name: 'John Doe', age: 31, ageGroup: 'over 30' },
//   { name: 'John Martin', age: 32, ageGroup: 'over 30' },
//   { name: 'Jane Doe', age: 24, ageGroup: 'under 30' },
//   { name: 'Robert Cappa', age: 50, ageGroup: 'over 30' }
// ]

const peopleGrouped = datk.groupBy(peopleWithAgeGroup, 'ageGroup')

// {
//   'over 30': [
//     { name: 'John Doe', age: 31, ageGroup: 'over 30' },
//     { name: 'John Martin', age: 32, ageGroup: 'over 30' },
//     { name: 'Robert Cappa', age: 50, ageGroup: 'over 30' }
//   ],
//   'under 30: [
//     { name: 'Jane Doe', age: 24, ageGroup: 'under 30' },
//   ]
// }
```
