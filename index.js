const isYoutube = location.hostname.includes("youtube");
const isShort = location.pathname.startsWith("/shorts");
if (isYoutube && isShort) {
    location.pathname = location.pathname.replace("shorts", "watch");
}