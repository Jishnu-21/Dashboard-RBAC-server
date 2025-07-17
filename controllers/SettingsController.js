const SettingsController = {
  getSettings: (req, res) => {
    res.json({ message: 'Settings data (admin only)' });
  }
};

export default SettingsController; 