export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export function getDefaultRedirectPath(role) {
  switch (role) {
    case ROLES.ADMIN:
      return "/admin";
    case ROLES.USER:
      return "/dashboard";
    default:
      return "/";
  }
}
