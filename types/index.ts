import exp from "constants";
import { MouseEventHandler } from "react";

export interface CoustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
    btnType? : "button" | "submit" | "reset";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string)=> void;
}
