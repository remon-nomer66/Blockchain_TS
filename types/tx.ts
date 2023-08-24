import { Input } from "./input";
import { Output } from "./output";

export type Tx = {
    id: string; //トランザクションID
    inputs: Input[];   //入金
    outputs: Output[]; //出金
};
