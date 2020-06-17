// Using async/await

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const init = async () => {
  await delay(1000);
  console.log("init done");
};

init();
