import { Block } from "../types/block";
import { Tx } from "../types/tx";
import { Validator } from "../types/validatorSign";
import { calcBlockHash } from "./calcBlockHash";

//ブロックを生成する関数
export async function createBlock(
    prevBlock: Block,   //前のブロック
    txs: Tx, //このブロックに含まれるトランザクション
    validatorSign: Validator   //このブロックを検証したバリデーター
    ): Promise<Block>{
        const index = prevBlock.index + 1;
        const name = 'block' + index;
        const time = new Date().toString();
        const prevBlockHash = prevBlock.hash;
        const hash = await calcBlockHash(index, 
            name, 
            time, 
            prevBlock.hash, 
            txs, 
            validatorSign);
            //ブロックを生成
            const newBlock: Block = {
                index: index,
                name : '',
                time: time,
                prevBlockHash: prevBlock.hash,
                hash: hash,
                txs: txs,
                validatorSign: validatorSign
            };
            return newBlock;
    }
    