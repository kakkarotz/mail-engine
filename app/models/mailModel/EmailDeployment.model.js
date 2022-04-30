module.exports = (sequelize, DataTypes) => {
    const EmailDeployment = sequelize.define("EmailDeployment", {
      emailDeploymentId: {
        type: DataTypes.BIGINT
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      emailDefinitionId: {
          type: DataTypes.BIGINT
      },
      status: {
        type: DataTypes.STRING
      },
      proirity: {
          type: DataTypes.STRING
      },
      isHTMLEmail: {
          type: DataTypes.BOOLEAN
      },
      senderContactId: {
          type: DataTypes.INTEGER
      },
      isObsolete: {
          type: DataTypes.BOOLEAN
      },
      startDate: {
          type: DataTypes.DATEONLY
      },
      finishDate: {
          type: DataTypes.DATEONLY
      },
      totalSent: {
          type: DataTypes.BIGINT
      },
      totalFailed: {
          type: DataTypes.BIGINT
      },
      isBatch: {
          type: DataTypes.BOOLEAN
      },
      scheduleDate: {
          type: DataTypes.DATEONLY
      }
    });
    return EmailDeployment;
  };