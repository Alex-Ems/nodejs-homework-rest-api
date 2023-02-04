const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.status(200).json({
    user: {
      subscription,
    },
  });
};

module.exports = updateSubscription;
