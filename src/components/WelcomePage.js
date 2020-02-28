import React from "react";
import { WelcomeHeader, WelcomeH1, Image } from './Styles';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <WelcomeHeader>
        <WelcomeH1>Welcome to the Ultimate Fan Site!</WelcomeH1>
        <Image
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </WelcomeHeader>
    </section>
  );
}