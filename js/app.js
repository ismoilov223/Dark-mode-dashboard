import {toDarkMode, toLightMode, toSystemMode} from './components/theme';
 
window.toDarkMode = toDarkMode;
window.toLightMode = toLightMode;
window.toSystemMode = toSystemMode;

function updateTheme(localStoragetheme) {
   
    switch(localStoragetheme) {
        case 'system':
        if (window.matchMedia('(prefers-color-scheme: dark').matches) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        document.documentElement.setAttribute('color-theme', 'system');
        break;
    case 'dark':
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('color-theme', 'dark');
        break;
        case 'light':
            document.documentElement.classList.remove('dark');
            document.documentElement.setAttribute('color-theme', 'light');
        break;
    }
}