interface IUserRoles {
  /**
   * Has System-Level permissions.
   */
  sysadmin?: boolean;

  /**
   * Ability to manipulate users and some data.
   */
  admin?: boolean;

  /**
   * Admin but more restricted.
   */
  mod?: boolean;
}