import { Sequelize } from "sequelize";
import { DBconfig } from "../Config/db.js";

export const Task = DBconfig.define("task", {
  nome: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  descricao: {
    type: Sequelize.STRING(200),
    allowNull: false,
  }
});
