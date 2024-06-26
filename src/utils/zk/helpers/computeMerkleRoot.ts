import { encodePacked, keccak256 } from "viem";
function padArrayWithZeros(array: number[]) {
  const paddedLength = Math.pow(2, Math.ceil(Math.log2(array.length)));
  return array.concat(
    Array.from({ length: paddedLength - array.length }, () => 0)
  );
}
export default function computeMerkleRoot(points: number[]): `0x${string}` {
  const hexValues = padArrayWithZeros(points).map((point) =>
    keccak256(`0x${point.toString(16).padStart(64, "0")}`)
  );

  return recursiveMerkleRoot(hexValues);
}

function recursiveMerkleRoot(hashes: `0x${string}`[]): `0x${string}` {
  if (hashes.length === 1) {
    return hashes[0];
  }

  const nextLevelHashes: `0x${string}`[] = [];
  // console.log("LEVEL UP!!!!!!!!!");
  // Combine adjacent hashes and hash them together
  for (let i = 0; i < hashes.length; i += 2) {
    const left = hashes[i];
    const right =
      i + 1 < hashes.length
        ? hashes[i + 1]
        : (`0x${"0".repeat(64)}` as `0x${string}`);
    // console.log(
    //   Array.from(
    //     Buffer.from(left.concat(right.slice(2)).slice(2), "hex")
    //   ).toString()
    // );
    const combinedHash = keccak256(
      Buffer.from(left.concat(right.slice(2)).slice(2), "hex")
    );
    // console.log("Combining hashes: " + i + " and " + (i + 1));
    // console.log(
    //   Array.from(Buffer.from(combinedHash.slice(2), "hex")).toString()
    // );
    nextLevelHashes.push(combinedHash);
  }

  // Recur for the next level
  return recursiveMerkleRoot(nextLevelHashes);
}
