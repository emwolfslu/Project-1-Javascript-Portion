require(["esri/WebMap", "esri/views/MapView", "esri/widgets/LayerList"], function(WebMap, MapView, LayerList) {
        const map = new WebMap({
          portalItem: {
            id: "70c054c519da4d6d9365fcdceacf5838"
          }
        });

        // Add the map to a MapView
        const view = new MapView({
          container: "viewDiv",
          map: map
        });

        // Add a legend instance to the panel of a
        // ListItem in a LayerList instance
        const layerList = new LayerList({
          view: view,
          listItemCreatedFunction: function(event) {
            const item = event.item;
            if (item.layer.type != "group") {
              // don't show legend twice
              item.panel = {
                content: "legend",
                open: true
              };
            }
          }
        });
        view.ui.add(layerList, "bottom-right");
      });



