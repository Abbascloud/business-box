import React from "react";
import { Icon } from "components/Icon";
import { EIcons } from "enums";

import * as styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Icon name={EIcons.logo} />
      </div>
    </footer>
  );
};
