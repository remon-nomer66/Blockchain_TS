import {Tx} from '../types/tx';
import {Validator} from '../types/validatorSign';

/// Hash (SHA256) 
export async function hash(str: string): Promise<string>{
    const u8Ary = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest('SHA-256', u8Ary);
    const rawHash = Array.from(new Uint8Array(digest));
    return rawHash.map((b) => b.toString(16).padStart(2, '0')).join('');
}

//ブロックのハッシュ値を求める関数
export async function calcBlockHash(
    index: number, //ブロックID
    name: string,   //ブロック名
    time: string,   //ブロック生成時間
    prevBlockHash: string,  //前のブロックのハッシュ値
    txs: Tx,  //このブロックに含まれるトランザクション
    validatorSign: Validator   //このブロックを検証したバリデーター
        ): Promise<string>{
        const str = index.toString() +
         name + 
         time + 
         prevBlockHash + 
         JSON.stringify(txs) + 
         JSON.stringify(validatorSign);
        return await hash(str);
    }
