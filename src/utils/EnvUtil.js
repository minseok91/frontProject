import CookieUtil from "./CookieUtil";

const EnvUtil = {
    isDev: () => window.location.href.startsWith('http://local'),
    isReal: () => window.location.href.startsWith('https://minseok-front-app-url'),
};

export default EnvUtil;