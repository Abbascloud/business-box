import { useTextMaker } from "hooks";
import { KeyboardEventHandler, useState } from "react";

export const useCapsLookWatcher = () => {
    const t = useTextMaker("common.errors");
    const [capsLockWarning, setCapsLockWarning] = useState<null | string>(null);

    const capsLookWatcher: KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.getModifierState("CapsLock")) {
            setCapsLockWarning(t("capsLockError"));
            return;
        }
        setCapsLockWarning(null);
    };
    return { capsLookWatcher, capsLockWarning };
};