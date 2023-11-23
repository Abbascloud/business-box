import classNames from "classnames/bind";
import { Binding } from "classnames/bind";

export const makeClassNames = (styles: Binding) => {
    return classNames.bind(styles);
};