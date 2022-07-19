export const AdminLogin = async ({ id, password }) => {
  const response = await fetch("http://localhost:8888/admin");
  
  if (response.ok) {
    const adminData = await response.json();
    const admin = adminData.find((user) => user.id === id);

    if (!admin || admin.password !== password) {
      throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    return admin;
  }

  throw new Error("서버 통신이 원할하지 않습니다.");
};