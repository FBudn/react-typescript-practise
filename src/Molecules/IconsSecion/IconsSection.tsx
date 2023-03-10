import React from "react";
import { IconsContainer } from "./IconsSectionStyle";
import Icon from "../../Atoms/Icon/Icon";

export interface IconsSectionProps {
  onClickIcon: (number: number, logs: string[]) => void;
  firstIconText: number;
  secondIconText: number;
  thirdIconText: number;
  logs: string[];
  testId?: string;
  testIdIcon1?: string;
  testIdIcon2?: string;
  testIdIcon3?: string;
}

const IconsSection: React.FC<IconsSectionProps> = ({
  onClickIcon,
  firstIconText,
  secondIconText,
  thirdIconText,
  logs,
  testId,
  testIdIcon1,
  testIdIcon2,
  testIdIcon3,
}) => {
  return (
    <IconsContainer data-testid={testId}>
      <Icon
        color="red"
        icon="facebook"
        data-testid={testIdIcon1}
        onClickIcon={() => {
          onClickIcon(firstIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="google"
        data-testid={testIdIcon2}
        onClickIcon={() => {
          onClickIcon(secondIconText, logs);
        }}
      />

      <Icon
        color="blue"
        icon="linkedin"
        data-testid={testIdIcon3}
        onClickIcon={() => {
          onClickIcon(thirdIconText, logs);
        }}
      />
    </IconsContainer>
  );
};

export default IconsSection;

/*
Tu na pewno testy i testowe id,  pewnie poprawić testy pod tym kątem. 
Sam wybór tekstu do console.log po kliknięciu pewnie też mógłbym inaczej zrobić niż tu z 
wyboru elementu z tablicy i inaczej to rozpisać 
Nazewnictwo IconsContainer bez Main ale może bardziej IconsSectionContainer żeby pasowało do
innych komponentów. 
Na górze inaczej mam w LoginPage a inaczej w singlePage: idzie trochę inaczej rospisana funkcja
onClicka tu i tablica strignów jest na różnym poziomie page vs template

Przerobienie tego bo wszelka logika na samej górze w page 
i ogarnąć już funkcje
znowu nazwy folderów 
*/
