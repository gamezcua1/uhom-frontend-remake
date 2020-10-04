import React, { useState, useContext } from "react";
import { Button, Menu } from "semantic-ui-react";
import LikesController from "../../../controllers/LikesController";
import { UserContext } from "../../../lib/context/UserContext";
import SigninFirst from "../../modals/SignInFirst";

export default function LikeButton({ likesInfo, propertyId }) {
  const {
    total_likes: totalLikes,
    currently_liked: currentlyLiked,
  } = likesInfo;
  const { currentUser } = useContext(UserContext);
  const [likesTotal, setTotal] = useState(totalLikes);
  const [isLiked, setLikeState] = useState(currentlyLiked);
  const [isOpen, setToggle] = useState(false);

  const openModal = () => setToggle(!isOpen);

  const handleLike = () => {
    if (currentUser) {
      let likeResponse = isLiked
        ? LikesController.delete(propertyId)
        : LikesController.post(propertyId);

      likeResponse
        .then(() => {
          updateTotalLikes();
          setLikeState(!isLiked);
        })
        .catch((err) => console.log(err.response));
    } else openModal();
  };

  const updateTotalLikes = () =>
    setTotal(() => (isLiked ? likesTotal - 1 : likesTotal + 1));

  return (
    <>
      <div>
        <SigninFirst isOpen={isOpen} handleModal={openModal} />
      </div>
      <Menu.Item position="right">
        <Button
          className="likeButton"
          color="red"
          icon="heart"
          basic={!isLiked}
          label={{
            content: likesTotal,
            pointing: "left",
            color: "red",
          }}
          onClick={handleLike}
        />
      </Menu.Item>
    </>
  );
}
