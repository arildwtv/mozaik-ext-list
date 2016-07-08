# Mozaïk list widgets

[![NPM version][npm-image]][npm-url]

## List Widget Configuration

### Api Configuration

No API configuration is needed.

### Dashboard Configuration

```javascript
{
  // ...
  {
    type:               'list.list',
    title:              'Your List',
    url:                'https://dl.dropboxusercontent.com/u/19253297/test2.json',
    pathText:           '$..summary',
    columns: 2, rows: 1,
    x: 1, y: 0
  }
}
```

### Parameters

key              | required | description
-----------------|----------|-------------------------------------------------------------------
`url`            | yes      | *The URL to fetch the value*
`title`          | yes      | *The title of your widget*
`pathText`       | yes      | *The JSON path to the text to show per item
