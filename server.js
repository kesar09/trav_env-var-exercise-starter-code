const FAVOURITE_INSTRUCTOR = process.env.NAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${FAVOURITE_INSTRUCTOR} rock!`);
    await sleep(5000);
  }
}

main();
