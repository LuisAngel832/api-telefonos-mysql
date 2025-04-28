const models = require("../database/models");

const createPhone = async (req, res) => {
  try {
    const phone = await models.Phone.create(req.body);
    return res.status(201).json({ phone });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllPhones = async (req, res) => {
  console.log('getting phones');
  try {
    const phones = await models.Phone.findAll({});
    return res.status(200).json({ phones });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updatePhone = async (req, res) => {
  try {
    const phoneId = req.params.id;
    const [updated] = await models.Phone.update(req.body, {
      where: { id: phoneId }
    });

    if (updated) {
      const updatedPhone = await models.Phone.findOne({ where: { id: phoneId } });
      return res.status(200).json({ updatedPhone });
    }

    return res.status(404).json({ message: "Teléfono no encontrado" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deletePhone = async (req, res) => {
  try {
    const phoneId = req.params.id;
    const deleted = await models.Phone.destroy({
      where: { id: phoneId }
    });

    if (deleted) {
      return res.status(200).json({ message: "Teléfono eliminado correctamente." });
    } else {
      return res.status(404).json({ message: "Teléfono no encontrado." });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createPhone,
  getAllPhones,
  updatePhone,
  deletePhone
};
