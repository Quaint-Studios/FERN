import { router } from './user.route';
import {
  isNotAuthenticated,
  isAuthenticated,
  isAuthorized
} from './funcs/userSecurity';
import {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser
} from './user.controller';

// Create user.
router.post('/', [isNotAuthenticated, createUser]);

// Get all users.
router.get('/', [
  isAuthenticated,
  isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
  getAllUsers
]);

// Get :id user.
router.get('/:id', [
  isAuthenticated,
  isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
  getUser
]);

// Update :id user.
router.patch('/:id', [
  isAuthenticated,
  isAuthorized({ hasRole: ['admin', 'manager'], allowSameUser: true }),
  updateUser
]);

// Delete :id user.
router.delete('/:id', [
  isAuthenticated,
  isAuthorized({ hasRole: ['admin', 'manager'] }),
  deleteUser
]);
