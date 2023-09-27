// model/patient.js
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Patient extends Model {
    static associate(models) {
      Patient.hasMany(models.Orders, {
        foreignKey: 'user_id',
      });
    }
  }
  Patient.init(
    {
      resourceType: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      name: DataTypes.JSONB,
      gender: DataTypes.STRING,
      birthDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Patient',
    }
  );
  return Patient;
};
