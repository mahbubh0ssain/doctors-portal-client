import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://doctors-portal-server-nu-eight.vercel.app/users/admin/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.isAdmin) {
          setAdmin(data.isAdmin);
          setLoader(false);
        }
      });
  }, [email]);
  return [admin, loader];
};

export default useAdmin;
