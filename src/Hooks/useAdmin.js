import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [admin, setAdmin] = useState(false);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/users/admin/${email}`)
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
