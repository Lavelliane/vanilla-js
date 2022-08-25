var latexOutput = document.getElementById("LatexOutput");
var mathmlOutput = document.getElementById("MathmlOutput");
var asciiOutput = document.getElementById("AsciiOutput");
var equationEditor = createEquationEditor(
  document.getElementById("EquationEditor")
);
equationEditor.addListener(function () {
  latexOutput.textContent = equationEditor.getLatex();
  mathmlOutput.textContent = equationEditor.getMathml();
});
