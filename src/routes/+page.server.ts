import type { PageServerLoad } from "./$types";

export const load = (() => {
  const itemList: string[] = [];

  for (let index = 0; index < 100; index++) {
    let word = "";
    for (let run = 3; run < Math.round(Math.random() * 7) + 4; run++) {
      word += String.fromCharCode(
        Math.round(Math.random() * 25) + (run == 3 ? 65 : 97)
      );
    }

    itemList.push(word);
  }

  console.log(itemList.slice(1, 10));
  return {
    itemList,
  };
}) satisfies PageServerLoad;
