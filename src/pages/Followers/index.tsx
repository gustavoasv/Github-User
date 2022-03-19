import { useEffect, useState, useContext } from "react";
import { Theme } from "../../components/Theme";
import * as C from "./style";
import { Content } from "../../contexts/userContext";
import api from "../../service/api";
import { Card } from "../../components/Card";

type TypeFollower = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export const Followers = () => {
  const context = useContext(Content);
  const login = context.users.login;
  const [followersData, setFollowersData] = useState<Array<TypeFollower>>();

  useEffect(() => {
    const getFollowers = async () => {
      const req = await api.get(`users/${login}/following`);
      const data: any = req.data;
      console.log(data);
      setFollowersData(data);
    };

    getFollowers();
  }, []);

  return (
    <C.FollowerMain>
      <Theme>
        <Card>
          {followersData?.map((item, index) => {
            return (
              <>
                <C.div key={index}>
                  <C.photoUser>
                    <img src={item.avatar_url}></img>
                  </C.photoUser>
                  <C.userName>{item.login}</C.userName>
                </C.div>
              </>
            );
          })}
        </Card>
      </Theme>
    </C.FollowerMain>
  );
};
