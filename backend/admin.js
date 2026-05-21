const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

const createAdmin = async () => {
  const hash = await bcrypt.hash("admin123", 10);

  await Admin.create({
    username: "admin",
    password: hash,
  });

  console.log("Admin created");
};

createAdmin();