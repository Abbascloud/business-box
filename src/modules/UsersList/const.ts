import * as yup from "yup";
import i18n from "../../core/i118/i118n";
import { yupResolver } from "@hookform/resolvers/yup";
import { TAddUserConfig } from "./types";
import { EAddUserForm } from "./enums";

export const DEFAULT_VALUES: TAddUserConfig = {
    [EAddUserForm.name]: "",
};

export const VALIDATION_SCHEMA = yupResolver(yup
    .object({
        [EAddUserForm.name]: yup.string().required(i18n.t("common.errors.requireError")),
    })
    .required());
