var convert = require("mathml-to-asciimath");

var mathml =
  "<mrow><mn>8</mn><mn>1</mn><mo>(</mo><mfrac><mrow><mo>-</mo><mn>2</mn></mrow><mrow><mn>3</mn><mn>2</mn></mrow></mfrac><mo>)</mo><mo>=</mo><mi>A</mi><mo>(</mo><mo>-</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn><msup><mrow><mn>2</mn></mrow><mrow><mn>2</mn></mrow></msup></mrow></mfrac><mo>+</mo><mn>8</mn><msup><mrow><mn>1</mn></mrow><mrow><mn>2</mn></mrow></msup><mo>)</mo><mo>+</mo><mo>(</mo><mi>B</mi><mo>(</mo><mo>-</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn><mn>2</mn></mrow></mfrac><mo>+</mo><mi>C</mi><mo>)</mo><mo>(</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn><mn>2</mn></mrow></mfrac><mo>+</mo><mo>(</mo><mo>-</mo><mfrac><mrow><mn>2</mn></mrow><mrow><mn>3</mn><mn>2</mn></mrow></mfrac><mo>)</mo><mo>)</mo></mrow>";
convert(mathml); // => '1 + 2'
console.log("ASCII: " + convert(mathml).replace(/\s/g, ""));
