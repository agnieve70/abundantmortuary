import React, { useEffect } from "react";

import Header from "../components/admin/Header";
import { useNavigate } from "react-router-dom";

function AdminScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("amUserInfo")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
}

export default AdminScreen;
