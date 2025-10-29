import Event from "../models/Event.js";

// Criar evento
export const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar evento", error });
  }
};

// Listar todos
export const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar eventos", error });
  }
};

// Buscar por ID
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Evento não encontrado" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar evento", error });
  }
};

// Atualizar
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!event) return res.status(404).json({ message: "Evento não encontrado" });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar evento", error });
  }
};

// Deletar
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Evento não encontrado" });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar evento", error });
  }
};
