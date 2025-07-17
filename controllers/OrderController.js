import orders from '../models/orderModel.js';

const OrderController = {
  getOrders: (req, res) => {
    res.json(orders);
  },
  editOrder: (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const order = orders.find(o => o.id === id);
    if (!order) return res.status(404).json({ message: 'Order not found' });
    order.status = status;
    res.json({ message: 'Order updated', order });
  }
};

export default OrderController; 