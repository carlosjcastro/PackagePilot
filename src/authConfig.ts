console.log('Client ID:', import.meta.env.VITE_CLIENT_ID);
console.log('Authority:', import.meta.env.VITE_AUTHORITY);
console.log('Redirect URI:', import.meta.env.VITE_REDIRECT_URI);

export const msalConfig = {
  auth: {
    clientId: import.meta.env.VITE_CLIENT_ID || '',
    authority: import.meta.env.VITE_AUTHORITY || '',
    redirectUri: import.meta.env.VITE_REDIRECT_URI || ''
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
};

export const loginRequest = {
  scopes: ["openid", "profile", "User.Read"]
};