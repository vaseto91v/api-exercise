import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const getParkings = async () => 
{
  try {
    const result = await fs.readFile(
      path.join(rootDir, "data/parkings.json"),
      {
        endcoding: "utf8",
      }
    );

    return JSON.parse(result).parkings;
  } catch (err) {
    return err;
  }
};

export { getParkings };
