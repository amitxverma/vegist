export default function Auth() {
    let getCookie = document.cookie;
    if (!getCookie?.length && !getCookie.includes("userId")) {        
        if(window.location.href !== window.location.origin+'/'){
            window.location = '/';
            return false;
        }
    }
}