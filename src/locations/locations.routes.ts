import Router from 'express';
import {
    getLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation,
    getLocationsByBuildingId,
    searchLocations,
    getLocationsWithDevices
} from './locations.controller';
import { authMiddleware } from '../auth/auth.middleware';

const router = Router();

router.get('/locations', getLocations);
router.get('/locations/:id', getLocationById);
router.post('/locations', createLocation);
router.put('/locations/:id', updateLocation);
router.delete('/locations/:id', deleteLocation);
router.get('/locations/buildings/:id', getLocationsByBuildingId);
router.get('/locations-search', authMiddleware, searchLocations);
router.get('/locations-with-devices', getLocationsWithDevices);

export default router;
