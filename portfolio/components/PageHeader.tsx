import style from "../styles/Page.module.scss";
import HeaderMenu from "./HeaderMenu";
import { useState } from "react";

type Props = {
  pageTitle: string;
};

const PageHeader: React.FC<Props> = ({ pageTitle }) => {
  const [isHamburgerMenu, setIsHamburgerMenu] = useState(false);

  return (
    <header className={style.page__header}>
      <HeaderMenu
        isHamburgerMenu={isHamburgerMenu}
        setIsHamburgerMenu={setIsHamburgerMenu}
      />
      <h1 className="en">{pageTitle}</h1>
    </header>
  );
};

export default PageHeader;
