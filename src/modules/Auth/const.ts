import * as yup from "yup";
import i18n from "../../core/i118/i118n";
import { yupResolver } from "@hookform/resolvers/yup";
import { TAuthForm } from "./types";
import { EAuthFormFields } from "./enums";

export const DEFAULT_VALUES: TAuthForm = {
    [EAuthFormFields.email]: "",
    [EAuthFormFields.password]: ""
};

export const VALIDATION_SCHEMA = yupResolver(yup
    .object({
        [EAuthFormFields.email]: yup.string().email(i18n.t("auth.form.loginErrorMessage")).required(i18n.t("common.form.requireError")),
        [EAuthFormFields.password]: yup.string().min(6, i18n.t("auth.form.passwordErrorMessage")).required(i18n.t("common.form.requireError")),
    })
    .required());
