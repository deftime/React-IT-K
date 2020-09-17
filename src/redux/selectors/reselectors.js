import {createSelector} from 'reselect';

export function selectProfile(state) {
  return state.profilePage.currentProfile;
}

export function selectStatus(state) {
  return state.profilePage.status;
}

function selectErrorMessage(state) {
  return state.auth.errorMessage;
}

function selectCheckId(state) {
  return state.auth.id
}

export let errorMessageSelector = createSelector(selectErrorMessage, (errorMsg)=>{
  return errorMsg;
})

export let checkAuthSelector = createSelector(selectCheckId, (id)=>{
  return id;
})
