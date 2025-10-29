const Event = require('../models/Event');

// Create event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, date, location, capacity } = req.body;
    const owner = req.user && req.user.id ? req.user.id : req.user && req.user._id ? req.user._id : req.user.sub;
    if (!owner) return res.status(400).json({ message: 'Owner info missing in token' });

    const event = new Event({
      title, description, date, location, capacity, owner
    });

    await event.save();
    res.status(201).json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating event', error: err.message });
  }
};

// List events
exports.listEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error listing events', error: err.message });
  }
};

// Get event by id
exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error getting event', error: err.message });
  }
};

// Update event (only owner)
exports.updateEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const ownerId = req.user && req.user.id ? req.user.id : req.user && req.user._id ? req.user._id : req.user.sub;
    if (event.owner !== ownerId) return res.status(403).json({ message: 'Not allowed' });

    const { title, description, date, location, capacity } = req.body;
    if (title !== undefined) event.title = title;
    if (description !== undefined) event.description = description;
    if (date !== undefined) event.date = date;
    if (location !== undefined) event.location = location;
    if (capacity !== undefined) event.capacity = capacity;

    await event.save();
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: 'Error updating event', error: err.message });
  }
};

// Delete event (only owner)
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    const ownerId = req.user && req.user.id ? req.user.id : req.user && req.user._id ? req.user._id : req.user.sub;
    if (event.owner !== ownerId) return res.status(403).json({ message: 'Not allowed' });

    await event.remove();
    res.json({ message: 'Event deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event', error: err.message });
  }
};