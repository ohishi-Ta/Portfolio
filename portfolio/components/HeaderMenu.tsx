import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/Page.module.scss";

type HamburgerMenuProps = {
  isHamburgerMenu: boolean;
  setIsHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMenu: React.FC<HamburgerMenuProps> = ({
  isHamburgerMenu,
  setIsHamburgerMenu,
}) => {
  const handleHamburgerMenu = () => {
    setIsHamburgerMenu(!isHamburgerMenu);
  };
  const router = useRouter();
  const navItems = [
    {
      href: "/",
      title: "Top",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/works",
      title: "Works",
    },
  ];

  return (
    <>
      <button
        type="button"
        className={`hamburger sp`}
        onClick={handleHamburgerMenu}
        data-menu={isHamburgerMenu ? "open" : "clouse"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={style.page__header_Btnlist}
        data-menu={isHamburgerMenu ? "open" : "clouse"}
      >
        {navItems.map((item) => {
          return (
            <div
              className={`${
                (
                  item.href === "/"
                    ? router.pathname === item.href
                    : router.pathname.startsWith(item.href)
                )
                  ? "active"
                  : ""
              } ${style.page__header_Btnitem}`}
              key={item.href}
            >
              <Link className="en" href={item.href}>
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HeaderMenu;
