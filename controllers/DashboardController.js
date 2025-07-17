const DashboardController = {
  getDashboard: (req, res) => {
    res.json({ message: `Welcome to the dashboard, ${req.user.role}` });
  }
};

export default DashboardController; 