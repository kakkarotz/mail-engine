module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define("Contact", {
      contactId: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      emailAddress: {
          type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      ContactTypeId: {
          type: DataTypes.BIGINT
      },
      CompanyName: {
          type: DataTypes.STRING
      },
      address1: {
          type: DataTypes.STRING
      },
      address2: {
          type: DataTypes.STRING
      },
      city: {
          type: DataTypes.STRING
      },
      state: {
          type: DataTypes.STRING
      },
      pincode: {
          type: DataTypes.INTEGER
      },
      country: {
          type: DataTypes.STRING
      },
      mobileNumber: {
          type: DataTypes.BIGINT
      },
      buisnessPhone: {
          type: DataTypes.BIGINT
      },
      companyId: {
          type: DataTypes.INTEGER
      },
      isObsolete: {
          type: DataTypes.INTEGER
      }
    });
    return Contact;
  };