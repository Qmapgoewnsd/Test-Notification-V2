function notification() {
    if (Notification.permission === "granted") {
        new Notification("Button Clicked", {
            body: "Notification Test",
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OCQkVgs31l9Uxqrq1SnR7oyBjklPkGRUtg&s"
        });
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("Button Clicked", {
                    body: "Notification Test",
                    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OCQkVgs31l9Uxqrq1SnR7oyBjklPkGRUtg&s"
                });
            }
        });
    }
}