// check logocalStorage user
export function checkUserLocal() {
 const getUserData = localStorage.getItem('userData');
 if(getUserData) return true 
 return false
}


