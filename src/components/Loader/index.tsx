import React, { FC, PropsWithChildren } from "react";
import * as styles from "./styles.module.scss";
import { makeClassNames } from "utils";

const cx = makeClassNames(styles);

type Props = {
  isLoading: boolean;
  isFixed?: boolean;
};

export const Loader: FC<PropsWithChildren<Props>> = ({
  children,
  isLoading,
  isFixed,
}) => {
  return (
    <div className={styles.wrapper}>
      {isLoading && (
        <div className={cx({ loaderContainer: true, fixedContainer: isFixed })}>
          <span className={styles.loader} />
        </div>
      )}
      {children}
    </div>
  );
};
