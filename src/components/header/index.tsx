import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { PATHS } from "../../paths";
import { Container, Flex } from "../containers";

const Header = () => {
  return (
    <header>
      <Container>
        <ul className={styles.menu}>
          <Flex gap="42px">
            <li className={styles.item}>
              <Link to={PATHS.home}>Поиск</Link>
            </li>
            <li className={styles.logo}>MealSearch</li>
            <li className={styles.item}>
              <Link to={PATHS.add}>Добавить</Link>
            </li>
          </Flex>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
