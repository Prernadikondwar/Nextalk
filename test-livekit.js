
const { RoomServiceClient } = require('livekit-server-sdk');

const apiKey = "APIiYZ3XTqcf7zS";
const apiSecret = "sOIWV39Befp6XIo8g9IuQrbSeDFlmwQvJSzxDWV3GRSA";
const apiHost = "https://hackerflow-main-yz0shc13.livekit.cloud";

const roomClient = new RoomServiceClient(apiHost, apiKey, apiSecret);

async function test() {
    console.log("Testing Livekit connection to", apiHost);
    try {
        const rooms = await roomClient.listRooms();
        console.log("Connection successful! Found rooms:", rooms.length);
    } catch (error) {
        console.error("Connection failed:", error);
    }
}

test();
