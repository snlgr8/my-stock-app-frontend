import { bcrypt } from 'bcrypt';

async function hashIt(password) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
}

async function compareIt(password) {
  const validPassword = await bcrypt.compare(password, hashedPassword);
}
