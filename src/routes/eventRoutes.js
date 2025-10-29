const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const auth = require('../middleware/auth');

/**
 * @route POST /events
 * @desc Create event (protected)
 */
router.post('/', auth, eventController.createEvent);

/**
 * @route GET /events
 * @desc List events (public)
 */
router.get('/', eventController.listEvents);

/**
 * @route GET /events/:id
 * @desc Get event (public)
 */
router.get('/:id', eventController.getEvent);

/**
 * @route PUT /events/:id
 * @desc Update event (protected, owner only)
 */
router.put('/:id', auth, eventController.updateEvent);

/**
 * @route DELETE /events/:id
 * @desc Delete event (protected, owner only)
 */
router.delete('/:id', auth, eventController.deleteEvent);

module.exports = router;