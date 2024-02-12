import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      Doctor.hasMany(models.Orders, {
        foreignKey: 'user_id',
      });
    }
  }
  Doctor.init(
    {
      resourceType: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      name: DataTypes.JSONB,
      gender: DataTypes.STRING,
      birthDate: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: 'Doctor',
    }
  );
  return Doctor;
};
