export const profileReducer = (_state: any, action: any) => {
  if (action.type === 'SET_PROFILE') {
    return { ...action.profile };
  }
}