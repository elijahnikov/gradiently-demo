export default function downloadImage(
  width: number,
  height: number,
  gradientStr: string,
  pickers: number,
  direction: string
) {
  var canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;

  var context = canvas.getContext("2d");
  const stepSize = 1 / (pickers - 1);
  const hexes = gradientStr.split(", ").slice(-pickers);

  const isLinear = gradientStr.includes("linear");
  const isRadial = gradientStr.includes("radial");
  if (context) {
    let gradient = context?.createLinearGradient(0, 0, width, height);
    if (isLinear) {
      switch (direction) {
        case "top":
          break;
        case "top right":
          gradient = context.createLinearGradient(0, height, width, 0);
          break;
        case "right":
          gradient = context.createLinearGradient(0, 0, width, 0);
          break;
        case "bottom right":
          gradient = context.createLinearGradient(0, 0, width, height);
          break;
        case "bottom":
          gradient = context.createLinearGradient(0, 0, 0, height);
          break;
        case "bottom left":
          gradient = context.createLinearGradient(width, 0, 0, height);
          break;
        case "left":
          gradient = context.createLinearGradient(width, 0, 0, 0);
          break;
        case "top left":
          gradient = context.createLinearGradient(width, height, 0, 0);
          break;
      }
    } else if (isRadial) {
      gradient = context.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        Math.min(width, height) / 2
      );
    }
    if (isLinear || isRadial)
      hexes.forEach((hex, index) => {
        const step = index * stepSize;
        hex = hex.replace(")", "");
        gradient?.addColorStop(step, hex);
      });

    context.fillStyle = isLinear || isRadial ? gradient : gradientStr;
    context.fillRect(0, 0, width, height);

    var img = new Image();
    img.src = canvas.toDataURL("image/png");

    var link = document.createElement("a");
    link.href = img.src;
    link.download = "image.png";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
