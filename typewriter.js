const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    console.log(sentence[i]);
  }, 500 * i ) // <= 1s delay to make it noticeable. Can dial it down later
  
}

//process.stdout.write