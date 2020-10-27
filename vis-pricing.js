fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/json?ID=004006')
  .then(response => response.json())
  .then(state => {

    var starting_ask_pricing_node = 500;
    var starting_left_doc_node = 600;
    var starting_tick_node = 700;
    var start_open_envelope = 900;
    var start_close_envelope = 1000;

    //////////////NODES//////////////

    var digital_embassy_blue =  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 100 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#97C2FC", size: 80, x: 300, y: 100 }]
    var digital_embassy_green = (maxCalls, remainingCalls) => {return  [{ id: 29, shape: "square", color: "white", size: 1, x: 580, y: 25 + (maxCalls-1)*25 },{ id: 10, label: remainingCalls.toString(10), shape: "box", color: "#28B463", font: {color:(remainingCalls>0) ? 'white' : 'red'}, size: 10, x: 300, y: 25 + (maxCalls-1)*25 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 25 + (maxCalls-1)*25 - 82 },{ id: 1, label: "", shape: "square", color: "#28B463", size: 80, x: 300, y: 25 + (maxCalls-1)*25 }]}
    var load_weights_node = (maxCalls, data) => { return { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 445, y: 25 + (maxCalls-1)*25, title: data } }
    var right_tick_node = (maxCalls) => { return { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 580, y: 25 + (maxCalls-1)*25 - 20 }}
    var right_cross_node = (maxCalls) => { return { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 580, y: 25 + (maxCalls-1)*25 - 20 }}
    var right_document_node = (maxCalls) => { return { id: 11, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 550, y: 25 + (maxCalls-1)*25 }}
    var left_tick_node = (numUser) => {return { id: starting_tick_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_cross_node = (numUser) => {return { id: starting_tick_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }}
    var left_document_node = (numUser) => {return { id: starting_left_doc_node+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 50, y: 25 + (50*numUser) }}
    var ask_pricing_node = (numUser) => { return { id: starting_ask_pricing_node+numUser, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 155, y: 25 + (50*numUser)}} // 16
    var audit_log_node = { id: 6, label: "Audit\nlogs", shape: "square", color: "#90EE90", x: 300, y: 250 }
     
    //WIP
    var model_open_envelope = (maxCalls) => { return{ id: 99, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf2b6", size: 30, color: "#f0a30a"}, x: 330, y: 25 + ((maxCalls-1)*25)}}
    var model_close_envelope = (maxCalls) => { return { id: 100, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf0e0", size: 30, color: "#f0a30a"}, x: 390, y: 25 + ((maxCalls-1)*25) }}
    var starting_open_envelope = (numUser, maxCalls) => {return { id: start_open_envelope+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf2b6", size: 30, color: "#f0a30a"}, x: 270, y: 25 + ((maxCalls-1)*25)} }
    var starting_close_envelope = (numUser) => { return { id: start_close_envelope+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf0e0", size: 30, color: "#f0a30a"}, x: 200, y: (-45) + (50*(numUser+1)) }}

    var nodes = new vis.DataSet([]);

    ///////////////EDGES/////////////

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

    // get original positions
    var open_envelope_start_x = 270
    var open_envelope_start_y = 0
    var close_envelope_start_x = 200
    var close_envelope_start_y = 5

    var left_envelope_start_x = 330
    var left_envelope_start_y = 0
    var left_envelope_end_x = 390
    var left_envelope_end_y = 0

    // animation properties
    var k = 0, lambda = 0, tick = 20, totalTime = 1000;

    // nr of steps, given tick time and total animation time
    var nrOfSteps = Math.floor( totalTime / tick);
    var timers = []

    var timer_generic = (numNode, offsetTimer, offsetNode,x_start,y_start,x_target,y_target) => {
      var data = {
              nodes: nodes,
              edges: edges,
            };
      network = new vis.Network(container, data, options);

      let numIter = 0;
      timers[numNode+offsetTimer] = setInterval(function(){
      
        // iteration counter
        numIter++;

        // lambda (for convex combination)
        var l = numIter / nrOfSteps;

        // compute the convex combination of x_start and x_target to find intermediate x and move node to it, same for y
        var xt = x_start * (1 - l) + x_target * l;
        var yt = y_start * (1 - l) + y_target * l;
        
        // move node
        network.moveNode(offsetNode+numNode,xt,yt);
      
        // stop if we have reached nr of steps
        if(numIter == nrOfSteps){
          clearInterval(timers[numNode+offsetTimer])
        } 
      },tick);
    }

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
            nodes.add(model_open_envelope(state["InvocationLimit"]));
            left_envelope_start_y = nodes.get(99).y
            left_envelope_end_y = left_envelope_start_y
            timer_generic(0,200,99,left_envelope_start_x,left_envelope_start_y,left_envelope_end_x,left_envelope_end_y);
            setTimeout(function() {
              nodes.remove(99);
              nodes.add(model_close_envelope(state["InvocationLimit"]));
              timer_generic(0,201,100,left_envelope_end_x,left_envelope_end_y,left_envelope_start_x,left_envelope_start_y);
            },3000)
            if (state["ModelIntput"]["SignatureOK"] == true) {
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
                nodes.remove(100);
                var data = {
                  nodes: nodes,
                  edges: edges,
                };
                network = new vis.Network(container, data, options);
              },5500)
            }
            else if (state["ModelIntput"]["SignatureOK"] == false) {
              setTimeout(function() {
                nodes.add(right_document_node(state["InvocationLimit"]));
                nodes.add(right_cross_node(state["InvocationLimit"]));
                nodes.remove(100);
                var data = {
                  nodes: nodes,
                  edges: edges,
                };
                network = new vis.Network(container, data, options);
              },5500)
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
              nodes.add(starting_open_envelope(i,state["InvocationLimit"]));
              if(i == 0){
                open_envelope_start_y = nodes.get(900).y
              }
              timer_generic(i,0,900,open_envelope_start_x,open_envelope_start_y, close_envelope_start_x, close_envelope_start_y + 50*(i));
              setTimeout(function() {
                nodes.remove(900+i);
                nodes.add(starting_close_envelope(i));
                timer_generic(i,100,1000,close_envelope_start_x,close_envelope_start_y + 50*(i),open_envelope_start_x,open_envelope_start_y);
              },3000)
              if (state["InvocationInputs"][i]["SignatureOK"] == true && state["InvocationInputs"][i]["ParsingOK"]==true) {
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_tick_node(i));
                  nodes.update({ id: 10, color: (remaining_Calls>0) ? "#28B463" : "#A4A4A4", label: remaining_Calls.toString(10), font: {color:(remaining_Calls>0) ? 'white' : 'red'}});
                  nodes.update({ id: 1, color: (remaining_Calls>0) ? "#28B463" : "#A4A4A4"});
                  nodes.update({ id: 9, label: (remaining_Calls>0) ? "Pricing agent" : "Pricing agent\n (exhausted)"})
                  nodes.remove(1000+i);
                  var data = {
                    nodes: nodes,
                    edges: edges,
                  };
                  network = new vis.Network(container, data, options);
                },5500)
              }
              else if (state["InvocationInputs"][i]["SignatureOK"] == false || state["InvocationInputs"][i]["ParsingOK"]==false) {
                setTimeout(function() {
                  nodes.add(left_document_node(i));
                  nodes.add(left_cross_node(i));
                  if(state["InvocationInputs"][i]["SignatureOK"] == false){
                    nodes.update({ id: starting_tick_node+i, title: "Error on signature checking"})
                  }
                  else {
                    nodes.update({ id: starting_tick_node+i, title: JSON.stringify(state["InvocationInputs"][i]["Error"])})
                  }
                  nodes.remove(1000+i);
                  var data = {
                    nodes: nodes,
                    edges: edges,
                  };
                  network = new vis.Network(container, data, options);
                },5500)
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

    function timeout() {
      setTimeout(function () {
        fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/json?ID=004006')
          .then(response => response.json())
          .then(state => {
            prevState = updateNodesAndEdges(edges, nodes, state,prevState);
            var data = {
              nodes: nodes,
              edges: edges,
            };
            network = new vis.Network(container, data, options);
          })
        timeout();
      }, 7000);
    };

    timeout()
  });

