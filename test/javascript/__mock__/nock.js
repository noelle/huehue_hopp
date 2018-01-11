import nock from 'nock'

export default nock('http://localhost').defaultReplyHeaders({
  'Content-Type': 'application/json'
})

export { nock }
