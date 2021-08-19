import TYPES from '@/constants/actionTypes/home'

const digitalData = (state:Project.General.IAnyObject = { firstName: 'mamam' }, action) => {
  console.log('action===', action)
  switch (action.type) {
    case TYPES.INCREMENT:
      console.log('进来了吗？？？')

      return Object.assign({}, state, { firstName: action.payload })
    default:
      console.log('进来默认的了---')

      return state

  }
}

export default {
  digitalData,
}
