import "./styles.css";
import { greeting } from "./greeting.js";
import odinImage from "./images/odin.png";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}

console.log(greeting);

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
