const rememberMePending = (state: any, action: any) => {
    state.rememberMeLoading = true;
};


const rememberMeFullfilled = (state: any, action: any) => {
    console.log(state)
    state.loggedIn = action?.payload?.success ? true : false;
    state.rememberMeLoading = false;
}
    
const rememberMeRejected = (state: any, action: any) => {
    state.loggedIn = false;
    state.rememberMeLoading = false;
};


const loginPending = (state: any, action: any) => {
    state.loginLoading = true;
};


const loginFullfilled = (state: any, action: any) => {
    state.loggedIn = action?.payload?.success ? true : false;
    state.loginLoading = false;
}
    
const loginRejected = (state: any, action: any) => {
    state.loggedIn = false;
    state.loginLoading = false;
};

const logoutPending = (state: any, action: any) => {
    state.logoutLoading = true;
};


const logoutFullfilled = (state: any, action: any) => {
    state.logoutLoading = false;
}
    
const logoutRejected = (state: any, action: any) => {
    state.logoutLoading = false;
};
export {rememberMeFullfilled, rememberMePending, rememberMeRejected, loginFullfilled, loginPending, loginRejected, logoutFullfilled, logoutPending, logoutRejected}