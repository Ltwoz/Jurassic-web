// lib/auth.js
const bcrypt = require('bcrypt');

export async function hashPassword(password:any) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function comparePassword(password:any, hashedPassword:any) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}