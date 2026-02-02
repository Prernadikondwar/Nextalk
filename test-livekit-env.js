
const { RoomServiceClient } = require('livekit-server-sdk');
require('dotenv').config();

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;
const apiHost = process.env.NEXT_PUBLIC_LIVEKIT_API_HOST;

console.log("Testing Livekit connection with ENV:", {
    apiKey: apiKey ? "PRESENT" : "MISSING",
    apiSecret: apiSecret ? "PRESENT" : "MISSING",
    apiHost
});

if (!apiKey || !apiSecret || !apiHost) {
    console.error("Missing ENV vars!");
    process.exit(1);
}

const roomClient = new RoomServiceClient(apiHost, apiKey, apiSecret);

async function test() {
    try {
        const rooms = await roomClient.listRooms();
        console.log("Connection successful! Found rooms:", rooms.length);
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

test();
