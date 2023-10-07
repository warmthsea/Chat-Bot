import service from './request'

export function testApi() {
  return service({
    url: '/test',
    method: 'get',
  })
}

export function testGetPersonsApi() {
  return service({
    url: '/test/persons',
    method: 'get',
  })
}

export interface ItemDataType {
  name: string
  age: number
  gender: '男' | '女'
}

export function testAddPersonsApi(data: ItemDataType) {
  return service({
    url: '/test/persons',
    method: 'post',
    data,
  })
}
