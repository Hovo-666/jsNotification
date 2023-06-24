const button = document.querySelector("#button");

button.addEventListener("click", () => {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notifications.");
    return;
  }

  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      console.log("Permission granted. Sending notification...");
      new Notification("HELLO", {
        body: "helloooooo",
      });
    } else if (perm === "denied") {
      console.log("Permission denied for notifications.");
    } else {
      console.log("Permission dismissed by the user.");
    }
  });
});
