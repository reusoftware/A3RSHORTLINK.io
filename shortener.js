function shortenURL() {
    var longUrl = document.getElementById("longUrl").value;
    var shortUrl = generateShortURL(longUrl);
    document.getElementById("shortUrlResult").innerHTML = "<p>Shortened URL: <a href='" + shortUrl + "' target='_blank'>" + shortUrl + "</a></p>";
}

function generateShortURL(longUrl) {
    // Implement URL shortening logic here
    // This is a basic example of how you can generate a short URL
    var hash = 0;
    for (var i = 0; i < longUrl.length; i++) {
        hash = (hash << 5) - hash + longUrl.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return "https://reusoftware.github.io/A3RSHORTLINK.io/" + hash; // Replace yourdomain.com with your actual domain
}
