import { FC, PropsWithChildren } from "react";
import { useTitle } from "../../../utils/hooks/useTitle";
import { Header } from "../Header/Header";
import styles from "./layout.module.css"
type IProps = {
  title?: string
}

export const Layout: FC<PropsWithChildren<IProps>> = ({title, children}) => {
  useTitle(title)
  return (
    <>
      <Header />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}