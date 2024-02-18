import express from 'express';
import * as weaponController from '../Controllers/weaponController.js';

const router = express.Router();

router.get('/weapons', weaponController.getFilteredWeapons);
router.post('/weapons', weaponController.createWeapon);
router.get('/weapons/:id', weaponController.getWeaponById);
router.delete('/weapons/:id', weaponController.deleteWeapon);
router.patch('/weapons/:id', weaponController.updateWeapon);

export default router;