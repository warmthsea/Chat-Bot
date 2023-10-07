import service from './request'

export function sendApi(val: string) {
  return service({
    url: '/openai/v1/chat/completions',
    method: 'post',
    data: {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: val }],
      temperature: 0.7,
    },
  })
}
