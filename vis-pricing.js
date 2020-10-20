fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/agentmock')
  .then(response => response.json())
  .then(state => {

    console.log(state)


    var nodes = new vis.DataSet([
      { id: 1, label: "SGX Vault", shape: "square", color: "#97C2FC", size: 40, x: 300, y: 100 },
      { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 450, y: 100 },
      {
        id: 3, shape: 'icon',
        icon: {
          face: "'FontAwesome'",
          code: "\uf00c",
          size: 50,
          color: "green",
        }, borderWidth: 2, x: 550, y: 100
      },
      { id: 4, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 150, y: 100 },
      {
        id: 5, shape: 'icon',
        icon: {
          face: "'FontAwesome'",
          code: "\uf00c",
          size: 50,
          color: "green",
        }, x: 50, y: 100
      },
      { id: 6, label: "Audit\nlogs", shape: "square", color: "#85C1E9  ", x: 300, y: 250 },
      {
        id: 7, shape: 'icon',
        icon: {
          face: "'FontAwesome'",
          code: "\uf084",
          size: 30,
          color: "#f0a30a",
        }, x: 510, y: 80
      },
      {
        id: 8, shape: 'icon',
        icon: {
          face: "'FontAwesome'",
          code: "\uf084",
          size: 30,
          color: "#f0a30a",
        }, x: 100, y: 80
      },
    ]);

    var digital_embassy_blue = { id: 1, label: "SGX Vault", shape: "square", color: "#97C2FC", size: 40, x: 300, y: 100 }
    var digital_embassy_green = { id: 1, label: "SGX Vault", shape: "square", color: "#28B463", size: 40, x: 300, y: 100 }
    var load_weights_node = { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 450, y: 100 }
    var right_tick_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 50, color: "green", }, borderWidth: 2, x: 550, y: 100 }
    var right_cross_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 50, color: "red", }, borderWidth: 2, x: 550, y: 100 }
    var left_tick_node = { id: 5, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 50, color: "green", }, borderWidth: 2, x: 50, y: 100 }
    var left_cross_node = { id: 5, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 50, color: "red", }, borderWidth: 2, x: 50, y: 100 }
    var ask_pricing_node = { id: 4, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 150, y: 100 }
    var audit_log_node = { id: 6, label: "Audit\nlogs", shape: "square", color: "#90EE90", x: 300, y: 250 }
    var right_key_node = { id: 7, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 500, y: 80 }
    var left_key_node = { id: 8, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 100, y: 80 }

    // create an array with edges
    var edges = new vis.DataSet([
      { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 4, color: "rgb(20,24,200)", arrows: "from" },
      {
        from: 1,
        to: 6,
        color: "rgb(20,24,200)",
        arrows: "to",
      },
      { from: 2, to: 3, color: "rgb(20,24,200)" },
      { from: 4, to: 5, color: "rgb(20,24,200)" },
    ]);

    // create a network
    var container = document.getElementById("mynetwork");
    var data = {
      nodes: nodes,
      edges: edges,
    };
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

    function timeout() {
      setTimeout(function () {
        fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/agentmock')
          .then(response => response.json())
          .then(state => {
            var network = new vis.Network(container, data, options);
            console.log(state)
          })
        timeout();
      }, 5000);
    };

    timeout()
  });