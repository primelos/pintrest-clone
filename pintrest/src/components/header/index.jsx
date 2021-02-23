import React, { useState } from 'react'
import PinterestIcon from "@material-ui/icons/Pinterest";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FaceIcon from "@material-ui/icons/Face";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";


import {
  Wrapper,
  LogoWrapper,
  HomePageButton,
  FollowingButton,
  SearchWrapper,
  SearchBarWrapper,
  IconsWrapper,
} from "./header.styles";


const Header = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const onSearchSubmit = (e) => {
    e.preventDefault()
    onSubmit(input)
    cancelCourse()
  }
  const cancelCourse = () => {
    document.getElementById("create-course-form").reset();
  };


  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Homepage</a>
      </HomePageButton>
      <FollowingButton>
        <a href="/">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form id="create-course-form">
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header


