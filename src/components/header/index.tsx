import { Link } from "react-router-dom";
import { Container, Flex } from "../container";
import styles from "./index.module.css";
import { PATHS } from "../../paths";

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
              <Link to={PATHS.admin}>Изменить</Link>
            </li>
          </Flex>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
