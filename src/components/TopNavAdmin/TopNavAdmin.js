import React from "react";
import './TopNavAdmin.css'
import styled from "styled-components";
import { MDBCol } from "mdbreact";
import * as AiIcons from "react-icons/ai";
import * as IonIcons from "react-icons/io5";
import * as CgIcons from "react-icons/cg";

const NavIcon = styled.span`
  margin-left: 2rem;
  font-size: 2rem;
`;

const TopNavAdmin = () => {
  return (
    <div className="top__nav__admin">
      <h3>Welcome to Amar Teacher</h3>
      <MDBCol md="6" className="top__nav__search">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </MDBCol>
      <NavIcon>
        <AiIcons.AiOutlineMail />
      </NavIcon>
      <NavIcon>
        <IonIcons.IoNotificationsOutline />
      </NavIcon>
      <NavIcon>
        <CgIcons.CgProfile />
      </NavIcon>
    </div>
  );
};

export default TopNavAdmin;
