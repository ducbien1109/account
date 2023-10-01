const ACCOUNT = [];
for (let i = 0; i < 1; i++) {
  const data = {
    id: i +1,
    email: `email ${i +1}`,
    userName: `userName ${i + 1}`,
    fullName: `fullName ${i + 1}`,
    position: 1,
    department: 2,
    createDate: " 2022",
  };
  ACCOUNT.push(data);
}
export default ACCOUNT;
