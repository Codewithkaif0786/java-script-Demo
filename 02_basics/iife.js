// imediate invoke functions expression (IIFE)

(function demo() {
    console.log("DB Connected");
})();

((name) => {
    console.log(`Welcome to my website ${name}`);
    
})('kaif');