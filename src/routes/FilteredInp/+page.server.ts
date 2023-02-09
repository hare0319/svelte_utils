import type { PageServerLoad } from "./$types";

export const load = (() => {
  const itemList: string[] = [];

  for (let index = 0; index < 100; index++) {
    let word = "";
    for (let run = 3; run < Math.round(Math.random() * 5) + 8; run++) {
      word += String.fromCharCode(
        Math.round(Math.random() * 25) + (run == 3 ? 65 : 97)
      );
    }

    itemList.push(word);
  }

  return {
    itemList,
  };
}) satisfies PageServerLoad;
