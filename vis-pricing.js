var nodes = new vis.DataSet([
        { id: 1, label: "SGX Vault", shape: "square", color: "#97C2FC", size: 40, x:300, y: 100 },
        { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x:450 , y: 100 },
        { id: 3, shape: 'circularImage', image: "./images/tick2.png", borderWidth: 2, x:550, y: 100},
        { id: 4, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x:150 , y: 100 },
        { id: 5, shape: 'circularImage', image: "./images/tick2.png", borderWidth: 2 , x:50, y: 100},
        { id: 6, label: "Audit\nlogs", shape: "square", color: "#C2FABC", x:300, y: 250  },
        { id: 7, shape: 'circularImage', image: "./images/key.png", borderWidth: 2, x:450, y: 0},
        { id: 8, shape: 'circularImage', image: "./images/key.png", borderWidth: 2, x:150, y: 0},
      ]);

      // create an array with edges
      var edges = new vis.DataSet([
        { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
        { from: 1, to: 4, color: "rgb(20,24,200)", arrows: "from" },
        {
          from: 1,
          to: 6,
          color: "rgb(20,24,200)",
        },
        { from: 2, to: 3, color: "rgb(20,24,200)" },
        { from: 4, to: 5, color: "rgb(20,24,200)" },
        { from: 7, to: 2, color: "rgb(20,24,200)", arrows: "to" },
        { from: 8, to: 4, color: "rgb(20,24,200)", arrows: "to" },
      ]);

      // create a network
      var container = document.getElementById("mynetwork");
      var data = {
        nodes: nodes,
        edges: edges,
      };
      var width = 400;
      var height = 400;
      var options = {
          nodes: {
              shape: 'dot'
          },
          edges: {
              smooth: false
          },
          physics: false,
          interaction: {
              dragNodes: false,// do not allow dragging nodes
              zoomView: false, // do not allow zooming
              dragView: false  // do not allow dragging
          }
      };
      var network = new vis.Network(container, data, options);