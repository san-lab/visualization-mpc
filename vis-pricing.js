fetch('https://researchbox1.uksouth.cloudapp.azure.com/pricing/agentmock')
  .then(response => response.json())
  .then(state => {

    console.log(state)

    stateTest = {
      "ID": "Agent's ID",
      "Title": "Mock PRicing Agent",
      "Description": "A 'mock' dataset to start connecting with VIS.JS",
      "OwnerName": "Acme Corp",
      "OwnerKey": {
        "Curve": {
          "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
          "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
          "B": 7,
          "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
          "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
          "BitSize": 256,
          "Name": "",
          "H": 1
        },
        "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
        "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
      },
      "OwnerPEM": "-----BEGIN PUBLIC KEY-----\nMFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAEE5PUq8WBzIMHsFqpZF0mXVerrl8HbnQ2\nICaNCuGFSvAR1SMiapXcxLUkDDo1Y6gcyWLg4i0yEh8P+/wI29wj1A==\n-----END PUBLIC KEY-----",
      "PriceGiverKey": null,
      "PriceGiverName": "",
      "Model": {},
      "ModelIntput": {
        "JsonMessage": {
          "Data": "",
          "Signature": "",
          "PublicKey": ""
        },
        "Data": "U29tZSBkYXRh",
        "Signature": null,
        "PublicKey": {
          "Curve": {
            "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
            "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
            "B": 7,
            "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
            "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
            "BitSize": 256,
            "Name": "",
            "H": 1
          },
          "X": 26924735082386881503953565036783669053856320962717752147332289402943300327979,
          "Y": 24645074815705416978325423879158786814689402819438672368959328662190261992238
        },
        "SignatureOK": true
      },
      "InvocationInputs": [{
          "JsonMessage": {
           "Data": "",
           "Signature": "",
           "PublicKey": ""
          },
          "Data": "UHJpY2luZyBSZXF1ZXN0IE5vIDE=",
          "Signature": null,
          "PublicKey": {
           "Curve": {
            "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
            "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
            "B": 7,
            "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
            "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
            "BitSize": 256,
            "Name": "",
            "H": 1
           },
           "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
           "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
          },
          "SignatureOK": true
         },
         {
          "JsonMessage": {
           "Data": "",
           "Signature": "",
           "PublicKey": ""
          },
          "Data": "UHJpY2luZyBSZXF1ZXN0IE5vIDE=",
          "Signature": null,
          "PublicKey": {
           "Curve": {
            "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
            "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
            "B": 7,
            "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
            "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
            "BitSize": 256,
            "Name": "",
            "H": 1
           },
           "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
           "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
          },
          "SignatureOK": true
         },
         {
          "JsonMessage": {
           "Data": "",
           "Signature": "",
           "PublicKey": ""
          },
          "Data": "UHJpY2luZyBSZXF1ZXN0IE5vIDE=",
          "Signature": null,
          "PublicKey": {
           "Curve": {
            "P": 115792089237316195423570985008687907853269984665640564039457584007908834671663,
            "N": 115792089237316195423570985008687907852837564279074904382605163141518161494337,
            "B": 7,
            "Gx": 55066263022277343669578718895168534326250603453777594175500187360389116729240,
            "Gy": 32670510020758816978083085130507043184471273380659243275938904335757337482424,
            "BitSize": 256,
            "Name": "",
            "H": 1
           },
           "X": 8855138442780801176353506548636868656059500751918006001522727905895765068528,
           "Y": 8065899339698401540152579930844234318056274136681996409785851378045583893460
          },
          "SignatureOK": true
         }    
      ],
      "InvocationLimit": 6,
      "InvocationCount": 5,
      "Started": "2020-10-20T14:40:11.789370292+02:00"
    }

    var digital_embassy_blue =  [{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#97C2FC", size: 80, x: 300, y: 100 }]
    var digital_embassy_green = (remainingCalls) => {return  [{ id: 10, label: remainingCalls.toString(10), shape: "box", color: "#28B463", size: 10, x: 300, y: 100 },{ id: 9, label: "Pricing agent", shape: "square", color: "white", size: 1, x: 300, y: 18 },{ id: 1, label: "", shape: "square", color: "#28B463", size: 80, x: 300, y: 100 }]}
    var load_weights_node = (data) => { return { id: 2, label: "Load\nWeights", shape: "box", color: "#FFFF00", size: 15, x: 435, y: 100, title: data } }
    var right_tick_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 580, y: 80 }
    var right_cross_node = { id: 3, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 580, y: 80 }
    var right_document_node = { id: 11, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 550, y: 100 }
    var left_tick_node = (numUser) => {return { id: 21+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00c", size: 20, color: "green", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }
    var left_cross_node = (numUser) => {return { id: 21+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf00d", size: 20, color: "red", }, borderWidth: 2, x: 20, y: 5 + (50*numUser) }
    var left_document_node = (numUser) => {return { id: 17+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf15c", size: 40, color: "black", }, borderWidth: 2, x: 50, y: 25 + (50*numUser) }}
    var ask_pricing_node = (numUser, data) => { return { id: 13+numUser, label: "Ask for\npricing", shape: "box", size: 15, color: "#FFFF00", x: 165, y: 25 + (50*numUser), title: data }} // 16
    var audit_log_node = { id: 6, label: "Audit\nlogs", shape: "square", color: "#90EE90", x: 300, y: 250 }
    var right_key_node = { id: 7, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 480, y: 80 }
    var left_key_node = (numUser) => {return { id: 25+numUser, shape: 'icon', icon: { face: "'FontAwesome'", code: "\uf084", size: 30, color: "#f0a30a", }, x: 120, y: 5 + (50*numUser) }

    var nodes = new vis.DataSet([]);

    // create an array with edges
    var edges = new vis.DataSet([
      { from: 1, to: 2, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 13, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 14, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 15, color: "rgb(20,24,200)", arrows: "from" },
      { from: 1, to: 16, color: "rgb(20,24,200)", arrows: "from" },
      {
        from: 1,
        to: 6,
        color: "rgb(20,24,200)",
        arrows: "to",
      },
      { from: 2, to: 11, color: "rgb(20,24,200)" },
      { from: 4, to: 17, color: "rgb(20,24,200)" },
      { from: 4, to: 18, color: "rgb(20,24,200)" },
      { from: 4, to: 19, color: "rgb(20,24,200)" },
      { from: 4, to: 20, color: "rgb(20,24,200)" },
    ]);

    var updateNodes = (state) => {
      //If not undefined we will have the Central node in blue unless it is already initialized
      if (state != undefined) {
        if (state["ModelIntput"]["Data"] != "") {
          nodes.add(digital_embassy_green(state["InvocationLimit"]-state["InvocationCount"]));
          nodes.add(load_weights_node(state["ModelIntput"]["Data"]));
          if (state["ModelIntput"]["SignatureOK"] == true) {
            nodes.add(right_key_node);
            setTimeout(function() {
              nodes.add(right_document_node);
              nodes.add(right_tick_node);
            },3500)
          }
          else if (state["ModelIntput"]["SignatureOK"] == false) {
            nodes.add(right_key_node);
            setTimeout(function() {
              nodes.add(right_document_node);
              nodes.add(right_cross_node);
            },3500)
          }
          
        }
        else {
          nodes.add(digital_embassy_blue);
        }
        if (state["InvocationInputs"].length > 0){
          for(i = 0; i < state["InvocationInputs"].length; i++){
            nodes.add(ask_pricing_node(i,state["InvocationInputs"][i]["Data"]));
            if (state["InvocationInputs"][i]["SignatureOK"] == true) {
              nodes.add(left_key_node(i));
              setTimeout(function() {
                nodes.add(left_document_node(i));
                nodes.add(left_tick_node(i));
              },3500)
            }
            else if (state["InvocationInputs"][i]["SignatureOK"] == false) {
              nodes.add(left_key_node(i));
              setTimeout(function() {
                nodes.add(left_document_node(i));
                nodes.add(left_cross_node(i));
              },3500)
            }
          }
        }
      }
    }

    updateNodes(stateTest);

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

