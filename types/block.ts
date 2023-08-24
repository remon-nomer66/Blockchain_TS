import { Tx } from "./tx";
import { Validator } from "./validatorSign";

//ブロック
export type Block = {
    index: number; //ブロックID
    name: string;   //ブロック名
    time: string;   //ブロック生成時間
    prevBlockHash: string;  //前のブロックのハッシュ値
    hash: string;   //このブロックのハッシュ値
    txs: Tx;  //このブロックに含まれるトランザクション
    validatorSign: Validator;   //このブロックを検証したバリデーター
    };