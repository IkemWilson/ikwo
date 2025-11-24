
var Tawk_API = Tawk_API || {};
var Tawk_LoadStart = new Date();

// Prevent auto-minimize or auto-hide by Tawk
Tawk_API.onLoad = function () {
    // Wait until widget is ready, then force show
    setTimeout(function () {
        if (Tawk_API && Tawk_API.showWidget) {
            Tawk_API.showWidget();
            Tawk_API.setWidgetVisibility(true);
        }
    }, 300);
};

// If Tawk tries to hide the widget, force it back
Tawk_API.onChatMinimized = function () {
    setTimeout(function () {
        if (Tawk_API && Tawk_API.showWidget) {
            Tawk_API.showWidget();
        }
    }, 200);
};

(function () {
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;

    /* ► Replace with your own property ID */
    s1.src = "https://embed.tawk.to/691cd84735fc3b193838beb6/1jacapns7";

    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    // Final failsafe: after load, force visibility again
    s1.onload = function () {
        setTimeout(function () {
            if (typeof Tawk_API !== "undefined" && Tawk_API.showWidget) {
                Tawk_API.showWidget();
                Tawk_API.setWidgetVisibility(true);
            }
        }, 1000);
    };

    s0.parentNode.insertBefore(s1, s0);
})();

