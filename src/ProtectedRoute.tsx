import { useNavigate } from "react-router-dom";
import { ChildrenProps } from "./types/props";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: ChildrenProps) => {
  const isLogin = true;
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isLogin) navigate("/");
    },
    [isLogin, navigate]
  );
  return children;
};

export default ProtectedRoute;
