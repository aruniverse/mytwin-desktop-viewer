import { IModelApp } from "@bentley/imodeljs-frontend";
import React, { useEffect, useState } from "react";

export const UserInfoWidget = () => {
  const [userInfo, setUserInfo] = useState<{}>();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const accessToken = await IModelApp.authorizationClient?.getAccessToken();
      if (accessToken) {
        const response = await fetch("https://api.bentley.com/users/me", {
          headers: {
            Authorization: accessToken.toTokenString(),
          },
        });
        const json = await response.json();
        setUserInfo(json);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <>
      <pre>{JSON.stringify(userInfo, null, 2)}</pre>
    </>
  );
};
