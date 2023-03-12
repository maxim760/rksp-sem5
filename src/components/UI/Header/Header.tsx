import { NavLink } from "react-router-dom"
import styles from "./header.module.css"
import cx from "classnames"


type ILinks = Array <{to: string, name: string}>

const links: ILinks = [
  {to: "/", name: "Главная"},
  {to: "/about", name: "Информация"}
]

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cx("container", styles["header-content"])}>
        <span className={styles["header-logo"]}>
          Logo
        </span>
        <nav>
          {links.map(({ to, name }) => (
            <NavLink
              className={({ isActive }) => cx(styles.link, { [styles["link-active"]]: !!isActive })}
              to={to}
            >
              {name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}