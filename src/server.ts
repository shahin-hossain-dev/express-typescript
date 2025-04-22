import { Server } from "http";
import app from "./app";

const PORT = process.env.PORT || 5000;

let server: Server;

// server এর সাথে database বা others connection এর জন্য bootstrap function দ্বারা server run করা হয়েছে।

async function bootstrap() {
  server = app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  });
}

bootstrap();
