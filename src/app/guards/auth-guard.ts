import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const isLoggedIn = false;

  if(isLoggedIn){
    return true;
  }
  alert("Access Denied");
  return false;
};
