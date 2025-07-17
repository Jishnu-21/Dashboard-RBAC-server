import riders from '../models/riderModel.js';

const RiderController = {
  getRiders: (req, res) => {
    res.json(riders);
  },
  editRider: (req, res) => {
    const { id } = req.params;
    const { name, status, assignedOrderId } = req.body;
    const rider = riders.find(r => r.id === id);
    if (!rider) return res.status(404).json({ message: 'Rider not found' });
    if (name !== undefined) rider.name = name;
    if (status !== undefined) rider.status = status;
    if (assignedOrderId !== undefined) rider.assignedOrderId = assignedOrderId;
    res.json({ message: 'Rider updated', rider });
  },
  deleteRider: (req, res) => {
    const { id } = req.params;
    const index = riders.findIndex(r => r.id === id);
    if (index === -1) return res.status(404).json({ message: 'Rider not found' });
    riders.splice(index, 1);
    res.json({ message: 'Rider deleted' });
  }
};

export default RiderController; 