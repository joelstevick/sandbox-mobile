window.sandbox_mobile = window.sandbox_mobile || {};

$(function() {
    // Uncomment the line below to disable platform-specific look and feel and to use the Generic theme for all devices
    // DevExpress.devices.current({ platform: "generic" });
    // To customize the Generic theme, use the DevExtreme Theme Builder (http://js.devexpress.com/ThemeBuilder)
    // For details on how to use themes and the Theme Builder, refer to the http://js.devexpress.com/Documentation/Guide/#themes article

    $(document).on("deviceready", function () {
        navigator.splashscreen.hide();
        if(window.devextremeaddon) {
            window.devextremeaddon.setup();
        }
        $(document).on("backbutton", function () {
            DevExpress.processHardwareBackButton();
        });
    });

    function onNavigatingBack(e) {
        if (e.isHardwareButton && !sandbox_mobile.app.canBack()) {
            e.cancel = true;
            exitApp();
        }
    }

    function exitApp() {
        switch (DevExpress.devices.real().platform) {
            case "android":
                navigator.app.exitApp();
                break;
            case "win":
                window.external.Notify("DevExpress.ExitApp");
                break;
        }
    }


    sandbox_mobile.app = new DevExpress.framework.html.HtmlApplication({
        namespace: sandbox_mobile,
        layoutSet: DevExpress.framework.html.layoutSets[sandbox_mobile.config.layoutSet],
        navigation: sandbox_mobile.config.navigation,
        commandMapping: sandbox_mobile.config.commandMapping
    });
    sandbox_mobile.app.router.register(":view/:id", { view: "home", id: undefined });
    sandbox_mobile.app.on("navigatingBack", onNavigatingBack);
    sandbox_mobile.app.navigate();
});
