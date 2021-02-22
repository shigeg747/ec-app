export const SIGH_IN = "SIGH_IN";
export const signInAction = (userState) => {
  return {
    type: "SIGH_IN",
    payload: {
      isSignedIn: true,
      uid: userState.uid,
      username: userState.username,
    },
  };
};

export const SIGH_OUT = "SIGH_OUT";
export const signOutAction = () => {
  return {
    type: "SIGH_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
    },
  };
};
