fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/json?ID=222222')
  .then(response => response.json())
  .then(state => {

    var starting_ask_pricing_node = 500;
    var starting_left_doc_node = 600;
    var starting_tick_node = 700;
    var starting_left_key_node = 800;

    var digital_embassy_blue =  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 100 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#97C2FC", size: 80, x: 300, y: 100 }]
    var digital_embassy_green = (maxCalls, remainingCalls) => {return  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 25 + (maxCalls-1)*25 },{ id: 10, label: remainingCalls.toString(10), shape: "box", color: "#28B463", font: {color:(remainingCalls>0) ? 'white' : 'red'}, size: 10, x: 300, y: 25 + (maxCalls-1)*25 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 25 + (maxCalls-1)*25 - 82 },{ id: 1, label: "", shape: "square", color: "#28B463", size: 80, x: 300, y: 25 + (maxCalls-1)*25 }]}
    var load_weights_node = (maxCalls, data) => { return { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 435, y: 25 + (maxCalls-1)*25, title: data } }
    var right_tick_node = (maxCalls) => { return { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 580, y: 25 + (maxCalls-1)*25 - 20 }}
    var right_cross_node = (maxCalls) => { return { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 580, y: 25 + (maxCalls-1)*25 - 20 }}
    var right_document_node = (maxCalls) => { return { id: 11, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 550, y: 25 + (maxCalls-1)*25 }}
    var left_tick_node = (numUser) => {return { id: starting_tick_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_cross_node = (numUser) => {return { id: starting_tick_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_document_node = (numUser) => {return { id: starting_left_doc_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 50, y: 25 + (50*numUser) }}
    var ask_pricing_node = (numUser) => { return { id: starting_ask_pricing_node+numUser, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 165, y: 25 + (50*numUser)}} // 16
    var audit_log_node = { id: 6, label: "Audit\nlogs", shape: "square", color: "#90EE90", x: 300, y: 250 }
    var right_key_node = (maxCalls) => { return { id: 7, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 480, y: 25 + (maxCalls-1)*25 - 20 }}
    var left_key_node = (numUser) => {return { id: starting_left_key_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 120, y: 5 + (50*numUser) }}

    var nodes = new vis.DataSet([]);

    var enclave_askPricing_edge = (num) => {return { from: 1, to: starting_ask_pricing_node + num, color: "rgb(20,24,200)", arrows: "from" }}
    var askPricing_document_edge = (num) => {return { from: starting_ask_pricing_node + num, to: starting_left_doc_node + num, color: "rgb(20,24,200)" }}

    // create an array with edges
    var edges = new vis.DataSet([
      { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
      {
        from: 1,
        to: 6,
        color: "rgb(20,24,200)",
        arrows: "to",
      },
      { from: 2, to: 11, color: "rgb(20,24,200)" },
    ]);

    var updateNodesAndEdges = (edges, nodes,state, prevState) => {
      //If not undefined we will have the Central node in blue unless it is already initialized
      let newPrevState = prevState
      if (state != undefined) {
        if (state["Initialized"] == true) {
          if(prevState["init"] != true){
            if(nodes.get(1) != null){
              nodes.remove([1,9,29])
            }
            newPrevState["init"] = true;
            nodes.add(digital_embassy_green(state["InvocationLimit"], state["InvocationLimit"]-state["InvocationCount"]));
            nodes.add(load_weights_node(state["InvocationLimit"],state["ModelIntput"]["DataPlain"]));
            nodes.update({id: 2, title: state["ModelIntput"]["DataEncrypted"]});
              
            if (state["ModelIntput"]["SignatureOK"] == true) {
              nodes.add(right_key_node(state["InvocationLimit"]));
              setTimeout(function() {
                nodes.add(right_document_node(state["InvocationLimit"]));
                nodes.add(right_tick_node(state["InvocationLimit"]));
                if(nodes.get(starting_ask_pricing_node) == null){
                  for(let i = 0; i < state["InvocationLimit"]; i++){
                    nodes.add(ask_pricing_node(i));
                    edges.add(enclave_askPricing_edge(i));
                    edges.add(askPricing_document_edge(i));
                  }  
                }
              },3500)
            }
            else if (state["ModelIntput"]["SignatureOK"] == false) {
              nodes.add(right_key_node(state["InvocationLimit"]));
              setTimeout(function() {
                nodes.add(right_document_node(state["InvocationLimit"]));
                nodes.add(right_cross_node(state["InvocationLimit"]));
              },3500)
            }
          }
        }
        else {
          if(prevState["init"] == undefined){
            newPrevState["init"] = false;
            nodes.add(digital_embassy_blue);
          }
        }
        if (state["InvocationInputs"] != null){
          if(state["InvocationInputs"].length > prevState["numPricing"]){
            let remaining_Calls = state["InvocationLimit"]-state["InvocationCount"]
            if(nodes.get(starting_ask_pricing_node) == null){
              for(let i = 0; i < state["InvocationLimit"]; i++){
                nodes.add(ask_pricing_node(i));
                edges.add(enclave_askPricing_edge(i));
                edges.add(askPricing_document_edge(i));
              }
            }
            for(let i = prevState["numPricing"]; i < state["InvocationInputs"].length; i++){
              nodes.update({id: starting_ask_pricing_node+i, title: state["InvocationInputs"][i]["DataEncrypted"]});
              if (state["InvocationInputs"][i]["SignatureOK"] == true && state["InvocationInputs"][i]["ParsingOK"]==true) {
                nodes.add(left_key_node(i));
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_tick_node(i));
                  nodes.update({ id: 10, color: (remaining_Calls>0) ? "#28B463" : "#A4A4A4", label: remaining_Calls.toString(10), font: {color:(remaining_Calls>0) ? 'white' : 'red'}});
                  nodes.update({ id: 1, color: (remaining_Calls>0) ? "#28B463" : "#A4A4A4"});
                  nodes.update({ id: 9, label: (remaining_Calls>0) ? "Pricing agent" : "Pricing agent\n (exhausted)"})
                },3500)
              }
              else if (state["InvocationInputs"][i]["SignatureOK"] == false || state["InvocationInputs"][i]["ParsingOK"]==false) {
                nodes.add(left_key_node(i));
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_cross_node(i));
                  if(state["InvocationInputs"][i]["SignatureOK"] == false){
                    nodes.update({ id: starting_tick_node+i, title: "Error on signature checking"})
                  }
                  else {
                    nodes.update({ id: starting_tick_node+i, title: JSON.stringify(state["InvocationInputs"][i]["Error"])})
                  }
                },3500)
              }
            }
            newPrevState["numPricing"] = state["InvocationInputs"].length;
          }
        }
      }
      return newPrevState;
    }

    //updateNodes(state);

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
    let prevState = {
      "init": undefined,
      "numPricing": 0,
    }
    //var num = 0;

    function timeout() {
      setTimeout(function () {
        fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/json?ID=222222')
          .then(response => response.json())
          .then(state => {
            //state = states_test[num]
            prevState = updateNodesAndEdges(edges, nodes, state,prevState);
            var data = {
              nodes: nodes,
              edges: edges,
            };
            var network = new vis.Network(container, data, options);
          })
        //num=num+1
        timeout();
      }, 5000);
    };

    timeout()
  });

