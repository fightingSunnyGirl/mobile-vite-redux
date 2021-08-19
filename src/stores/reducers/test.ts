import TYPES from '@/constants/actionTypes/test'

const testData = (state = 'test初始值', action) => {
  switch (action.type) {
    case TYPES.TEST:
      state = action.payload

      return state
    default:
      return state

  }
}
export default {
  testData,
}
