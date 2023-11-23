import * as yup from "yup";
import { TFunction } from "i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { TAuthForm } from "./types";
import { EAuthFormFields } from "./enums";

export const DEFAULT_VALUES: TAuthForm = {
    [EAuthFormFields.email]: "",
    [EAuthFormFields.password]: ""
};

export const VALIDATION_SCHEMA = yupResolver(yup
    .object({
        [EAuthFormFields.email]: yup.string().email("sdasdadsad").required("required"),
        [EAuthFormFields.password]: yup.string().min(6, "sadasd").required("required"),
    })
    .required());
